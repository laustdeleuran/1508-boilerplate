@ECHO off
color 0E

ECHO 1508 Interface dependency installer (windows)

ECHO Welcome, %USERNAME%

ECHO Checking dependencies

set OLDDIR=%CD%

C:

IF exist Ruby200-x64 ( echo SUCCESS: Ruby installed ) ELSE ( echo ERROR: Could not find Ruby directory at C:\Ruby200-x64, please make sure it is installed... continuing.)
IF exist "Program Files\nodejs" ( echo SUCCESS: Node installed ) ELSE ( echo ERROR: Could not find nodejs directory at C:\Program Files\nodejs, please make sure it is installed... continuing. )

chdir /d %OLDDIR%

IF exist node_modules ( echo SUCCESS: node_modules already installed ) ELSE ( CALL npm install )
start GruntWatch.bat
grunt build



