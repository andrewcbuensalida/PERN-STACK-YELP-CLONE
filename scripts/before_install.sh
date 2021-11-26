#!/bin/bash

#download node and npm. only need to do this for the first time.
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install node

#create our working directory if it doesnt exist
DIR="/home/ubuntu/doctordb"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi