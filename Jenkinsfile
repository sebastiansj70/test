pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
    disableConcurrentBuilds()
  }

  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK8_Centos' //Verisión preinstalada en la Configuración del Master
  }
/*    Versiones disponibles
      JDK8_Mac
      JDK6_Centos
      JDK7_Centos
      JDK8_Centos
      JDK10_Centos
      JDK11_Centos
      JDK13_Centos
      JDK14_Centos
*/

  //Aquí comienzan los “items” del Pipeline
  stages {
    stage('Install') {
      steps {
            echo '------------>Install<------------'
            sh 'npm install'
      }
    }

    stage('Checkout') {
      steps {
            echo '------------>Checkout<------------'
            checkout([
                $class: 'GitSCM',
                branches: [[name: '*/master']],
                doGenerateSubmoduleConfigurations: false,
                extensions: [],
                gitTool: 'Default',
                submoduleCfg: [],
                userRemoteConfigs: [[
                    credentialsId: 'GitHub_sebastiansj70',
                    url:'https://github.com/sebastiansj70/test'
                ]]
            ])
      }
    }

    stage('Compile & Unit Tests') {
      steps {
        echo '------------>Compile & Unit Tests<------------'

            // sh 'npm run test'
      }
    }

    stage('Static Code Analysis') {
      steps {
            echo '------------>Análisis de código estático<------------'
            withSonarQubeEnv('Sonar') {
          sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
            }
      }
    }

    stage('Build') {
      steps {
        echo '------------>Build<------------'
          sh 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
        junit 'build/test-results/test/*.xml' //RUTA DE TUS ARCHIVOS .XML
    }

    failure {
        echo 'This will run only if failed'
        mail (to: 'sebastian.sanchez@ceiba.com.co', subject: "Failed Pipeline:${currentBuild.fullDisplayName}", body: "Something is wrong with ${env.BUILD_URL}")
    }

    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
