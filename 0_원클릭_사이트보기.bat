@echo off
chcp 949 >/dev/null
title SingleLab Server
color 0B

echo.
echo ================================================
echo   SingleLab - One Click Start
echo ================================================
echo.

cd /d "%~dp0"

REM --- 1. Check Node.js ---
where node >/dev/null 2>&1
if errorlevel 1 (
    color 0C
    echo [!] Node.js not found!
    echo.
    echo     Opening download page now...
    echo     Click the green LTS button to install.
    echo     After install, double-click this file again!
    echo.
    start https://nodejs.org/ko
    pause
    exit /b 1
)
echo [1/4] Node.js OK
node -v
echo.

REM --- 2. Clean broken node_modules ---
if exist "node_modules" (
    if not exist "node_modules\.package-lock.json" (
        echo [2/4] Cleaning broken files... please wait 1-2 min
        rmdir /s /q node_modules
        echo       Done!
        echo.
    ) else (
        echo [2/4] Libraries OK
        echo.
    )
) else (
    echo [2/4] Need to install libraries
    echo.
)

REM --- 3. Install libraries ---
if not exist "node_modules\.package-lock.json" (
    echo [3/4] Installing... first time takes 2-3 min, please wait!
    echo ------------------------------------------------
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        color 0C
        echo.
        echo [!] Install failed. Check internet and try again.
        pause
        exit /b 1
    )
    echo.
    echo       Install complete!
    echo.
) else (
    echo [3/4] Already installed OK
    echo.
)

REM --- 4. Start server + open browser ---
echo ================================================
echo [4/4] Starting server!
echo ================================================
echo.
echo   Browser will open in 3 seconds...
echo   URL: http://localhost:3000
echo.
echo   To stop: press Ctrl+C in this window
echo ================================================
echo.

timeout /t 3 /nobreak >/dev/null
start http://localhost:3000

call npm run dev
pause
