# BMI-calculator---
simple Java-based web application to calculate BMI value

The HTML web application allows users to calculate their Body Mass Index (BMI) by providing their height and weight. The application calculates the BMI using JavaScript and displays the result on the web page.


## project setup 
Create a directory name "bmi-calculator" to hold the entire project.
HTML file name "index.html" to build the web page
Created a CSS file name "styles.css" to style the web page
JavaScript file name "script.js" to handle the BMI calculation logic and display the result.

"WEB-INF" folder to hold the deployment descriptor file "web.xml."
"web.xml" file to configure the web application settings.
## Directory Structure:
                  - bmi-calculator
                    |- index.html
                    |- styles.css
                    |- script.js
                    |- WEB-INF
                       |- web.xml


Calculate the BMI using the formula: BMI = weight / ((height / 100) ^ 2).

Create an Ant build script named "build.xml" to automate the process of creating a .war file.then Define the targets for cleaning the previous build, creating the build directory, copying files, and packaging the .war file.Specify the deployment descriptor location in the "war" target.

## Build Process:
Use Ant to run the "war" target, which execute the defined tasks in the build.xml file.
Create the "bmi-calculator.war" file, containing all the necessary files and the configure deployment descriptor.

## Deploying on Tomcat:
Copy the generated "bmi-calculator.war" file into the "webapps" directory of Apache Tomcat.
and Start Tomcat using the startup script to deploy the application.
Access the BMI Calculator web application via the Tomcat server using the URL "http://localhost:8080/bmi-calculator/".

## conclusion:
after doing above steps, you will successfully create a simple BMI Calculator web application using HTML, CSS, and JavaScript. The application allows users to input their height and weight, calculates the BMI, and displays the result along with the corresponding BMI level. The web application is then packaged as a .war file using Apache Ant and deployed on Apache Tomcat, making it accessible through a web browser.

