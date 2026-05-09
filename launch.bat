@echo off
cd /d "%~dp0"

IF NOT EXIST "node_modules" (
  echo Installing dependencies...
  npm install
)

npm start
