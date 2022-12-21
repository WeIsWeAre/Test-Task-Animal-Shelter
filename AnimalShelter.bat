@echo off
set /P var="Do you have a python ? 1 - Yes, 0 - No ->, "
if %var%==1 (
 python-3.11.1-amd64.exe /quiet /passive InstallAllUsers=1 PrependPath=1 Include_test=0 SimpleInstallDescription="Please, wait"
 pause
)
REM pip install Django
REM pip install djangorestframework
myvenv/Scripts/activate
cd AnimalShelter
python manage.py runserver