pipeline {
    agent {
        docker {
            image 'node:16-bullseye-slim'
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Checkout SCM') {
			steps {
				git 'https://github.com/jrenjq/JenkinsDependencyCheckTest.git'
			}
		}
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
		stage('OWASP DependencyCheck') {
			steps {
				dependencyCheck additionalArguments: '--format HTML --format XML', odcInstallation: 'Default'
			}
		}
        