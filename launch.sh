#!/bin/bash

# Go to project folder
cd "$(dirname "$0")"

# Check if node_modules exists, if not install automatically
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the app
npm start
