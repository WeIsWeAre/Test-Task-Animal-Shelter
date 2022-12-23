@echo off
set /P var="Do you have a python 3.11? Y/N "
if %var%==N (
 python-3.11.1-amd64.exe /quiet /passive InstallAllUsers=1 PrependPath=1 Include_test=0 SimpleInstallDescription="Please, wait"
)
set /P var="Do you have a node.js? Y/N "
if %var%==N (
 start node-v18.12.1-x64.msi
)
start http://localhost:8080/animal_shelter
cd myvenv/Scripts
start activate1.bat 
python ..\..\AnimalShelter\manage.py runserver


