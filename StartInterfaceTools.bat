@ECHO off
color 0E

ECHO Interface startup tools

ECHO Welcome, %USERNAME%

ECHO Checking node version
SET nodeversion=node -v
IF "%nodeversion%"=="" (ECHO Node not installed) ELSE ( ECHO Node is installed... continuing)

pause

ECHO Installing Grunt dependencies at %CD%
IF exist node_modules ( echo node_modules already exists ) ELSE ( echo node_modules already exists CALL npm install )
grunt watch