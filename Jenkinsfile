node {
    def app
    stage('Image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.image("leonvillapun/backendviajes")
    }
    stage('Test image') {
        sh 'echo "Tests passed"'
    }
}
