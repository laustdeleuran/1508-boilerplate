@echo off
git clone git://github.com/RuneKobberoe/Pattern-Primer.git
cd Pattern-Primer
ECHO The Pattern Primer has now been downloaded to: %CD%
pause
IF NOT EXIST node_modules\connect CALL npm install connect
cmd /k StartServer.cmd