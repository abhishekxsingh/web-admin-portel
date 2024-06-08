#!/usr/bin/env bash
# this script only excepts positional arguments. option parameters are not supported

# it is expected first argument will always be common-functions script. If incorrect
# value is passed the script will fail
set -e
source ${1}

(( "$#" != 3 )) && { log ERROR "Must supply 3 arguments. [common-helper-file-path] [terraform-folder-path] [CD folder path]" ; }

[[ ! -d ${2} ]] && { log ERROR "Please pass correct argument for Terraform working directory" ; }
[[ ! -d ${3} ]] && { log ERROR "Please pass correct argument for CD working directory" ; }

[[ -z "${SERVICE}" ]] && { log ERROR "Please set environment variable SERVICE to determine which service to manage" ; }
[[ -z "${EB_ENVIRONMENT}" ]] && { log ERROR "Please set environment variable EB_ENVIRONMENT to determine which environments need to be managed" ; }
[[ -z "${EB_WEIGHT}" ]] && { log ERROR "Please set environment variable EB_WEIGHT to determine which stack size need to be managed" ; }

install_common_dependencies

readonly terraform_folder_path=${2}
readonly cd_folder_path=${3}
readonly environments_configuration=$(echo ${ENVIRONMENTS_TO_CREATE} | jq --compact-output '.[]')

log "Attempting to create ${EB_ENVIRONMENT} environment"

get_application_version_from_datastore ${SERVICE} ${EB_ENVIRONMENT}
export CIRCLE_TAG=${VERSION}

# TODO statement saying,
# reference of TF* variables need to be removed in the future
get_snapshot_identifier_from_datastore ${SERVICE} ${EB_ENVIRONMENT}
if [[ ${SNAPSHOT_IDENTIFIER} != "" ]]; then
    export TF_VAR_SNAPSHOT_IDENTIFIER=${SNAPSHOT_IDENTIFIER}
fi

log "Creating ${EB_ENVIRONMENT} environment with ${CIRCLE_TAG} version"

unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN
export AWS_ACCESS_KEY_ID=${ORIGINAL_AWS_ACCESS_KEY_ID}
export AWS_SECRET_ACCESS_KEY=${ORIGINAL_AWS_SECRET_ACCESS_KEY}

bash ./ops/cd/infrastructure-pipeline.sh ${terraform_folder_path} ${cd_folder_path} "apply"
bash ./ops/cd/deployment-pipeline.sh `pwd`
