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
}
