#!/bin/bash

set -ex

function clean {
    echo ' failed, exit code was :' $?
    docker-compose -f docker-compose.dev.yml down --remove-orphans
}
function cleanUpFiles {
    echo "Clean up some files and images and containers"
}

function cleanUp {
    cleanUpFiles
    cleanUpDocker
}
function stopAndRemoveContainers {
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
}

trap cleanUp ERR

docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
