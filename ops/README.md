# CI/CD Flow

![Sequence Diagram](./cicd.jpg)
## 1. GIT-SECRETS

It is a git hook that prevents secrets go into git branch. this hook is executed when a commit is triggered against Task, Feature, and Master branch.

First, clone git-secrets from GitHub

```
git clone https://github.com/awslabs/git-secrets
```

Install it by running following commands

```
cd git-secrets
sudo make install
git secrets --register-aws --global
```
Scan source code for any possible secrets leak

```
git secrets --scan
```

###1.1 Working

####1.1.a Git-secrets scans the commit to check if any undesirable information is present.
####1.1.b If so, then the commit fails with a detailed message about where possible secrets got leaked out.
####1.1.c Based on the feedback, a committer can fix it and then recommit.  

Imagine a file may contain the following:
```
AWS_SECRET_ACCESS_KEY=your real secret key
```

when a commit has executed an error like this will come back preventing the commit:

```
main.tf:13:    AWS_SECRET_ACCESS_KEY=your real secret key

[ERROR] Matched one or more prohibited patterns
```

## 2. Switching to target aws deployment account 
Before pushing docker image to ECR, Switch to target aws deployment account:

Set environment variable ROLE_ARN_TO_ASSUME for Cross Account Role Name in Bitbucket

Set current Timestamp
TIMESTAMP=$(date +%s)
```
DEPLOYMENT_ACCOUNT_CREDS=$(aws sts assume-role --role-arn ${ROLE_ARN_TO_ASSUME} --role-session-name "aws_role_session_${TIMESTAMP}")
```
Setting secret key, access key id and session token for target aws deployment account.
```
AWS_ACCESS_KEY_ID=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.AccessKeyId)
AWS_SECRET_ACCESS_KEY=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.SecretAccessKey)
AWS_SESSION_TOKEN=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.SessionToken)
```
More Information about switching to target aws deployment account  : https://ansibleplatform.atlassian.net/wiki/spaces/ACP/pages/142278663/How+to+enable+CLI+access

## 3. Push Docker Image to ECR 

Set Account ID for setting the Registry Name: 
```
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)
``` 

Setting Registry Name:
```
ECR_REGISTRY_NAME=${AWS_ACCOUNT_ID}".dkr.ecr."${AWS_DEFAULT_REGION}".amazonaws.com/"${BITBUCKET_REPO_SLUG}
```
In order to push image, first login to ECR:

###3.1 Logging to AWS ECR
	```
    eval $(aws ecr get-login --no-include-email);
    ```

###3.2 Building the docker image 
	```
    docker build -f Dockerfile -t ${ECR_REGISTRY_NAME}:${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER} -t ${ECR_REGISTRY_NAME}:latest .
    ```

###3.3 Push Docker Image
	```
	docker push ${ECR_REGISTRY_NAME}:${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER} && docker push ${ECR_REGISTRY_NAME}:latest;
	```


## 4. Create Tags at the end of CI

A tag is created from each commit into master branch. It serves two purposes:

4.1 A friendly name (or version number) can be applied to each commit. This friendly name is used for deployment across different environments.
4.2 Inter operability between bitbucket pipeline and circle ci is established via tags. When a tag is created, circle ci kicks off deployment workflow

To Create Tags:

4.1 Use OAuth consumer (as Authentication mechanism) which will create a consumer in bitbucket and return two values BITBUCKET_ACCESS_KEY and BITBUCKET_ACCESS_SECRET, Set these values in  Bitbucket Environment variables.

4.2 Using BITBUCKET_ACCESS_KEY and BITBUCKET_ACCESS_SECRET a TOKEN is obtained which will be used later for Authentication.

```
TOKEN=`curl -X POST -u "${BITBUCKET_ACCESS_KEY}:${BITBUCKET_ACCESS_SECRET}"       https://bitbucket.org/site/oauth2/access_token       -d grant_type=client_credentials | ./jq .access_token -r`
```
```
git remote set-url origin https://x-token-auth:${TOKEN}@bitbucket.org/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}.git
```
4.3 Git uses a username and email to associate tags with an identity. Configure an identity as per following: 
```
git config user.name "${BB_TAG_USERNAME}"
git config user.email "${BB_TAG_USER_EMAIL}"
```

For Tag ,Set the environment variable "APP_TAG_PREFIX" to create tag that will be used for deployment purpose.
"BITBUCKET_BUILD_NUMBER" is the Pipeline build number.

```
git tag ${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER}
git push origin ${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER}
```

The token is used by bitbucket pipeline to authenticate tag creation request with bitbucket repo.

Output :  * [new tag] $APP_TAG_PREFIX.445 -> $APP_TAG_PREFIX.445


## 5. Deploy a Node solution template docker image to Elastic Beanstalk

After tag creation, circle ci begins execution.

Deployment process has two distinct steps.

* Application infrastructure creation.

* Application version deployment into the above mentioned infrastructure

These steps are achieved by two different bash files

 * Application Infrastructure (infrastructure-pipeline.sh)
 
 * Application Deployment (deployment-pipeline.sh)

### 5.1 Application Infrastructure

The following configuration and scripts creates application infrastructure in an idempotent manner.

Using AWS Parameter Store to store DB user and DB password. Example shared below:

```
/servicename/environment/keyname
```

6 environment variables ("DB_USER_CONFIG_KEY","DB_PASSWORD_CONFIG_KEY", "DB_NAME", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY" and "AWS_DEFAULT_REGION") need to be set in circle-ci.

The following creates application infrastructure. Scripts are located at ops/terraform/

```

terraform init -input=false -backend-config="access_key=${AWS_ACCESS_KEY_ID}" -backend-config="secret_key=${AWS_SECRET_ACCESS_KEY}" -backend-config="region=${AWS_DEFAULT_REGION}" -backend-config="role_arn=${ROLE_ARN_TO_ASSUME}"
$ terraform plan -out=tfplan -input=false
$ terraform apply -input=false tfplan
```

### 5.2 Applicaiton configuration templating

[j2cli](https://github.com/kolypto/j2cli) is a command-line tool for templating in shell-scripts, leveraging the [Jinja2](http://jinja.pocoo.org/docs/2.10/) library.

Usage:

```
$ cat ./ops/cd/Dockerrun.aws.json.template
{
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "essential": true,
      "image": "{{ AWS_ACCOUNT_ID_ECR }}.dkr.ecr.{{ AWS_DEFAULT_REGION }}.amazonaws.com/{{ CIRCLE_PROJECT_REPONAME }}:{{ CIRCLE_TAG }}",
   ...

# install j2cli package.
$ pip install j2cli

# update variables with one command.
$ j2cli ./ops/cd/Dockerrun.aws.json.template > ./ops/cd/Dockerrun.aws.json
```

If the environment variables (`AWS_ACCOUNT_ID`, `AWS_DEFAULT_REGION`, `CIRCLE_PROJECT_REPONAME`, `CIRCLE_TAG`, etc) are available, j2cli will replace them all together with one command.

### 5.3 Application Deployment

Deploying the docker image to eb , Installing the aws-cli and unzip it.

Set environment variable ROLE_ARN_TO_ASSUME for Cross Account Role Name in circle ci

Before deploying the image , Switch to target aws deployment account:

Set current Timestamp
TIMESTAMP=$(date +%s)
```
DEPLOYMENT_ACCOUNT_CREDS=$(aws sts assume-role --role-arn ${ROLE_ARN_TO_ASSUME} --role-session-name "aws_role_session_${TIMESTAMP}")
```
Setting secret key, access key id and session token for target aws deployment account.
```
AWS_ACCESS_KEY_ID=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.AccessKeyId)
AWS_SECRET_ACCESS_KEY=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.SecretAccessKey)
AWS_SESSION_TOKEN=$(echo ${DEPLOYMENT_ACCOUNT_CREDS} | jq -r .Credentials.SessionToken)
```

Follow these step to deploying the image.

```
$ eb init ${CIRCLE_PROJECT_REPONAME} --region ${AWS_DEFAULT_REGION} --keyname ${AWS_KEY_PAIR_NAME}
$ eb use ${CIRCLE_PROJECT_REPONAME}-${EB_ENVOIRNMENT}
$ eb deploy ${CIRCLE_PROJECT_REPONAME}-${EB_ENVOIRNMENT}
```
"CIRCLE_PROJECT_REPONAME" is the default variable name , the repository name of the project no need set this name as a environment variable  on circle ci

All Environment variables for Circle-CI


| Variable                  | Description                                                                                                       |
| -------------------       | ------------------------------------------------------------------------------------------------------------------|
| AWS_ACCESS_KEY_ID         | Permission to access the resources that you are requesting                                                        |
| AWS_DEFAULT_REGION        | AWS region. This variable overrides the default region of the in-use profile, if set                              |
| AWS_KEY_PAIR_NAME         | Use this SSH  key pair to access Amazon EC2 instances running Linux.                                              |
| AWS_SECRET_ACCESS_KEY     | Permission to access the resources that you are requesting                                                        |
| EB_ENVIRONMENT            | Unique name for the deployment environment. Used in the application URL                                           |
| SERVER_PORT               | Port on which application will run                                                                    			|
| TERRAFORM_VERSION         | Terraform lastest Version 																						|
| AWS_IAM_INSTANCE_PROFILE  | An instance profile is an IAM role that is applied to instances launched in your Elastic Beanstalk environment.   |
| DB_USER_CONFIG_KEY        | This key is the refrernce value of database username stored in parameter store 									|
| DB_PASSWORD_CONFIG_KEY    | This key is the refrernce value of database secret key stored in parameter store 									|
| DB_NAME                   | The DB name to create. If omitted, no database is created initially 												|
| ROLE_ARN_TO_ASSUME        | The Assume ARN Role is the Cross Account Role Name,Using ROLE_ARN_TO_ASSUME to switch to the target account. 		|

