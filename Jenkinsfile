pipeline {
    agent any
              triggers {
                pollSCM '* * * * *'
            }
                stages{
                stage('SCM Checkout') {
            steps{
            git branch: 'main',  url: 'https://github.com/dejinfo/jenkins.git'
            }
        }

        stage('build') {
            steps{
            sh 'ls -lrt'
            sh 'docker compose build'
            echo 'docker images build'
            }
        }
        stage('run') {
            steps{

            sh 'docker compose up --build'
            echo 'running the containers'
            }
        }

}
}