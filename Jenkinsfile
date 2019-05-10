node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("lithium366/ssr")
    }

    stage('Linting') {
        app.inside {
          sh "npm run lint"
        }
    }
}
