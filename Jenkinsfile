node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Install') {
        sh "npm install"
    }

    stage('Lint') {
        sh "npm run lint"
    }

    stage('Build image') {
        app = docker.build("lithium366/ssr")
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("latest")
        }
    }
}
