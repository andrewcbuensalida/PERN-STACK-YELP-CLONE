#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node server for real this time, not really"
# pkill node
/home/ubuntu/.nvm/versions/node/v16.11.0/bin/pm2 delete doctordb_react
/home/ubuntu/.nvm/versions/node/v16.11.0/bin/pm2 delete doctordb_node