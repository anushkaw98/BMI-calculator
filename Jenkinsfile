pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your Git repository
                checkout scm
            }
        }

        stage('Build and Package') {
            steps {
                // Compile your project (if needed)
                sh 'javac -d build/classes src/bmi-calculator/*.java'
                
                // Create the WAR file structure
                sh 'mkdir -p build/bmi-calculator/WEB-INF/classes'
                sh 'cp -r build/classes/* build/bmi-calculator/WEB-INF/classes/'
                sh 'cp -r src/bmi-calculator/index.html src/bmi-calculator/styles.css src/bmi-calculator/script.js build/bmi-calculator/'
                sh 'cp src/bmi-calculator/WEB-INF/web.xml build/bmi-calculator/WEB-INF/'

                // Create the WAR file
                sh 'javac -d build/classes *.java'

                // Archive the WAR file
                archiveArtifacts artifacts: 'bmi-calculator.war', allowEmptyArchive: true
            }
        }
    }
}
