@ECHO off
color 0E

title Interface startup tools

ECHO Welcome, %USERNAME%

ECHO Checking node version
ECHO node -v
REM if not "%node -v%"=="0" Echo Node not installed 


pause

ECHO Installing Grunt dependencies at %CD%
IF exist node_modules ( echo node_modules already exists ) ELSE ( echo node_modules already exists CALL npm install )
grunt watch