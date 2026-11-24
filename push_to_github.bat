@echo off
setlocal
echo ========================================================
echo   DocuFlow Studio - Push to GitHub Helper
echo ========================================================
echo.
echo 1. Open your browser and go to: https://github.com/new
echo 2. Enter a Repository name (e.g. docuflow-studio)
echo 3. Choose Public or Private, DO NOT check "Add a README"
echo 4. Click "Create repository"
echo 5. Copy the HTTPS repository link (e.g. https://github.com/username/docuflow-studio.git)
echo.
echo ========================================================
set /p REPO_URL="Enter your GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo.
    echo [ERROR] No URL provided. Aborting.
    pause
    exit /b
)

echo.
echo [1/3] Setting remote origin...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [2/3] Ensuring branch is 'main'...
git branch -M main

echo [3/3] Pushing files to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUCCESS] Your code is now live on GitHub!
    echo ========================================================
    echo Tip: You can host it for FREE with GitHub Pages:
    echo Go to your repo -> Settings -> Pages -> Source: Deploy from branch (main / root) -> Save!
) else (
    echo.
    echo [NOTE] If GitHub asked for authentication, sign in with your GitHub account.
)

pause
