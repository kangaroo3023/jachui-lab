@echo off
chcp 65001 >nul
title 자취연구소 - 서버 종료
color 0C

echo.
echo ================================================
echo   자취연구소 서버 종료
echo ================================================
echo.

REM 3000 포트 사용 중인 프로세스 찾아서 종료
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    echo 실행 중인 서버 프로세스를 종료합니다 (PID: %%a)
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo [OK] 서버 종료 완료
echo.
timeout /t 2 /nobreak >nul
