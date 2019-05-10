node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("lithium366/ssr")
    }

    stage('Linting') {
        agent {
            docker { image 'lithium366/ssr:latest' }
        }
        steps {
          sh "npm run lint"
        }
    }
}
