@echo off
chcp 65001 >nul
title 자취연구소 - 사이트 실행
color 0B

echo.
echo ================================================
echo   자취연구소 로컬 서버 실행 도우미
echo ================================================
echo.

cd /d "%~dp0"

REM Node.js 설치 여부 확인
where node >nul 2>&1
if errorlevel 1 (
    color 0C
    echo [!] Node.js가 설치되어 있지 않습니다.
    echo.
    echo 이 창을 그대로 둔 채, 아래 페이지로 가서 LTS 버전을 설치하세요:
    echo.
    echo    https://nodejs.org/ko
    echo.
    echo 설치 후 이 파일을 다시 더블클릭하시면 됩니다.
    echo.
    pause
    start https://nodejs.org/ko
    exit /b 1
)

echo [OK] Node.js 확인됨
node -v
echo.

REM node_modules 폴더가 없거나 깨져있으면 자동 설치
if not exist "node_modules\.package-lock.json" (
    echo 필요한 라이브러리를 설치합니다 (최초 1회, 약 2~3분 소요)...
    echo ------------------------------------------------
    if exist "node_modules" (
        echo 기존 파일 정리 중...
        rmdir /s /q node_modules 2>nul
        echo 정리 완료
    )
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        color 0C
        echo.
        echo [!] 설치 중 오류가 발생했습니다.
        echo 인터넷 연결을 확인하고 다시 시도해주세요.
        pause
        exit /b 1
    )
    echo.
    echo [OK] 설치 완료
    echo.
)

echo ================================================
echo   서버를 시작합니다 (종료: 이 창에서 Ctrl+C)
echo ================================================
echo.
echo 3초 뒤 브라우저가 자동으로 열립니다...
echo 주소: http://localhost:3000
echo.

REM 3초 대기 후 브라우저 자동 열기
timeout /t 3 /nobreak >nul
start http://localhost:3000

REM Next.js 개발 서버 실행
call npm run dev
pause
