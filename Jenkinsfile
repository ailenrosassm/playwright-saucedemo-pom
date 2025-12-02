pipeline {
    agent any

    stages {
      stage('Install'){
        steps {
          sh 'npm install'
        }
      }
      
    stage('Test'){
      steps{
        sh 'npx playwright install'
        sh 'npx playwright test --reporter=junit'
      }
    }
  }
  post {
    always{
      junit 'playwright-report/results.xml'
      archiveArtifacts 'playwright-report/**'
    }
  }
}
