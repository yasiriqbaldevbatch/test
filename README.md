# Stackdriver debugger demo

See this screenrecording on YouTube for the demo:

[![YouTube video](http://img.youtube.com/vi/197-B9HTJ7o/0.jpg)](http://www.youtube.com/watch?v=197-B9HTJ7o "Stackdriver Debugger Node.js demo")


## Setup
Create a cluster and connect to it:

    gcloud container clusters create code-cooking --scopes https://www.googleapis.com/auth/cloud_debugger --num-nodes=1 --project=code-cooking

    gcloud container clusters get-credentials code-cooking --zone europe-west1-d --project code-cooking

Generate source context files (do this before each docker build):

    gcloud beta debug source gen-repo-info-file

Build and push the Docker container:

    docker build -t eu.gcr.io/code-cooking/debugging-demo:0.4 .

    gcloud docker -- push eu.gcr.io/code-cooking/debugging-demo:0.4

Deploy to Kubernetes:

    kubectl apply -f k8s

Debug:

    open https://console.cloud.google.com/debug?project=code-cooking


## Demo script

- What is it
  - Live debugging of applications without interruption
  - Adding logs to running applications

- How does it work
  - app.js
  - Dockerfile
  - source-context
  - deployment.yaml

- Deploy version 4

- Snapshot
  - req
  - req.headers

- Log
  - req.headers

- Why cool
  - reduces debug time
  - much faster than typical add logs -> deploy -> add logs -> deploy cycle
  - tradeoff signal versus noise in logging
