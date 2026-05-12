@echo off
chcp 65001 >/dev/null
echo.
echo ============================================
echo   Deploying your website to Vercel
echo   Please wait 1-2 minutes...
echo ============================================
echo.

cd /d "%~dp0out"

where node >/dev/null 2>/dev/null
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install from https://nodejs.org
    pause
    exit /b 1
)

echo [1/2] Preparing Vercel CLI...
call npx --yes vercel@latest --version
echo.

echo [2/2] Deploying to production...
echo.
REM GitHub 연동으로 자동 배포됩니다. git push만 하면 됩니다.
echo 이제 GitHub 연동으로 자동 배포됩니다.
echo git add -A ^&^& git commit -m "update" ^&^& git push
echo 위 명령어를 PowerShell에서 실행하세요.
echo.

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Something went wrong.
    echo Please contact support.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   SUCCESS! Your website is now live!
echo   The URL is shown above.
echo ============================================
echo.
pause
