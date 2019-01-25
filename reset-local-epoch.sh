#!/bin/bash

docker rm aeternity-node
docker volume rm aeternity-node-test_node_keys
docker volume rm aeternity-node-test_node_db
docker-compose up
