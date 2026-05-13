@echo off
setlocal
cd /d "%~dp0"
start "wanty-preview-server" cmd /k "node preview-server.mjs"
timeout /t 2 /nobreak > nul
start "" "http://127.0.0.1:4173/#figmacapture=e9b7e810-8d8f-479c-aca2-bd1c19986b8c&figmaendpoint=https%3A%2F%2Fmcp.figma.com%2Fmcp%2Fcapture%2Fe9b7e810-8d8f-479c-aca2-bd1c19986b8c%2Fsubmit&figmadelay=1000"
endlocal
