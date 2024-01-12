pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        git(url: 'https://github.com/theBikz/Learning-List', branch: 'main', changelog: true)
        echo 'test run successfully'
      }
    }

  }
}