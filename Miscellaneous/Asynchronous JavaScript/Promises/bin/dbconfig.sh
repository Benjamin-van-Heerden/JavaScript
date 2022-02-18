#!/bin/bash

export PGPASSWORD="node_password"

database="usersdb"

echo "Configuring database: $database"

dropdb -U node_user $database
createdb -U node_user $database

psql -U node_user $database < ./bin/sql/$database.sql

echo "$database configured"