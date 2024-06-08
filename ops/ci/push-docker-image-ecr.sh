#!/bin/bash

if [ -z "${AWS_ACCESS_KEY_ID}" ]; then
    printf "ERROR: AWS ACCESS KEY ID is not defined, Please set environment variable AWS_ACCESS_KEY_ID.";
    exit 1;
fi

if [ -z "${AWS_SECRET_ACCESS_KEY}" ]; then
    printf "ERROR: AWS SECRET ACCESS KEY is not defined, Please set environment variable AWS_SECRET_ACCESS_KEY.";
    exit 1;
fi

if [ -z "${AWS_DEFAULT_REGION}" ]; then
    printf "ERROR: AWS DEFAULT REGION is not defined, Please set environment variable AWS_DEFAULT_REGION.";
    exit 1;
fi

if [ -z "${BITBUCKET_REPO_SLUG}" ]; then
    printf "ERROR: BITCBUCKET REPO SLUG is not defined, Please set environment variable BITBUCKET_REPO_SLUG.";
    exit 1;
fi

if [ -z "${BITBUCKET_BUILD_NUMBER}" ]; then
    printf "ERROR: BITBUCKET BUILD NUMBER is not defined, Please set environment variable BITBUCKET_BUILD_NUMBER.";
    exit 1;
fi

if [ -z "${APP_TAG_PREFIX}" ]; then
    printf "ERROR: Tag Prefix is not defined, Please set environment variable APP_TAG_PREFIX Application Tag Prefix."
    exit 1
fi

if [ -z "$1" ]; then
    printf "ERROR: Artifacts path is missing please pass as Argument.";
    exit 1;
fi  

printf "Installing Dependencies."
apt-get update && apt-get install python-pip libpython-dev jq -y
pip install awscli

printf "Set AWS_ACCOUNT_ID "
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account) 

printf "Setting Registry Name..."
export ECR_REGISTRY_NAME=${AWS_ACCOUNT_ID}".dkr.ecr."${AWS_DEFAULT_REGION}".amazonaws.com/"${BITBUCKET_REPO_SLUG}

printf "Logging to AWS ECR."
if eval $(aws ecr get-login --no-include-email); then
    printf "Login to ECR successfull."
    if aws ecr describe-repositories  --repository-name ${BITBUCKET_REPO_SLUG}; then
        printf "${BITBUCKET_REPO_SLUG} Repo already exists."
    else
        printf "${BITBUCKET_REPO_SLUG} Repo doesn't exists."
        if aws ecr create-repository  --repository-name ${BITBUCKET_REPO_SLUG}; then
            printf "${BITBUCKET_REPO_SLUG} Repo created successfully."
        else
            printf "${BITBUCKET_REPO_SLUG} Repo not created."
            exit 1;
        fi
    fi
    printf "Build Docker Image."
    
    printf "Navigate to Internal-Artifacts Directory."
    cd $1

    if [[ "${BITBUCKET_BRANCH}" =~ ^hotfix- ]]; then
    #   APP_TAG_PREFIX="hotfix-${APP_TAG_PREFIX}"
        APP_TAG_PREFIX="v${APP_TAG_PREFIX}"
    fi

    if [[ $BITBUCKET_BRANCH == "master" ]]; then
        APP_TAG_PREFIX="v${APP_TAG_PREFIX}"
    fi

    if [[ $BITBUCKET_BRANCH == "pre-prod" ]]; then
        APP_TAG_PREFIX="v${APP_TAG_PREFIX}"
    fi

    if [[ $BITBUCKET_BRANCH == "qa" ]]; then
        APP_TAG_PREFIX="v${APP_TAG_PREFIX}"
    fi

    if [ "$2" ]; then
        APP_TAG_PREFIX="$2.${APP_TAG_PREFIX}"
    fi

    if docker build -f Dockerfile -t ${ECR_REGISTRY_NAME}:${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER} -t ${ECR_REGISTRY_NAME}:latest .; then
        printf "Docker image build successfully.";
            printf "Push Docker Image."
            if docker push ${ECR_REGISTRY_NAME}:${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER} && docker push ${ECR_REGISTRY_NAME}:latest; then
                printf "Docker Image ["${ECR_REGISTRY_NAME}:${APP_TAG_PREFIX}.${BITBUCKET_BUILD_NUMBER}"] pushed successfully with "latest" tag.";
            else
                printf "Docker image push failed.";
                exit 1;
            fi
    else
        printf "Docker image build failed.";
        exit 1;
    fi
else
    printf "Not able to login to ECR."
    exit 1;    
fi