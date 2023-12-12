#!/bin/bash

set -ex

cd remote-h5-worker-project
yarn install
yarn build
mkdir -p ../dist
cp dist/assets/RemoteH5Worker-*.js ../dist/RemoteH5Worker.js

