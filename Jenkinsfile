node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("lithium366/ssr")
    }

    stage('Linting') {
        docker.image('lithium366/ssr:latest').inside {
          sh "npm run lint"
        }
    }
}
