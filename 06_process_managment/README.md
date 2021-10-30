### Process maneging

* No need for nodemon, forever, or pm2 on server
* We will use nodemon in dev for file watch later
* Docker manages app start, stop, restart, healthcheck
* Node multi-thread: Docker manages multiple "replicas"
* One npm/node problem: They don't listen for proper shutdown signal by default

### The Truth About The PID 1 Problem
* PID (Process Identifier) is the first process in a system (or container) (AKA init)
* Init process ina a container has two jobs:
* reap zombie processes
* pass signals to sub-processes
* Zombie not a big Node issue
* Focus on proper Node shutdown

### Proper CMD for Healthy Shutdown
* Docker uses Linux signals to stop app (SIGINIT/SIGTERM/SIGKILL)
* SIGINIT/SIGTERM allow gracefull stop
* npm doesn't respond to SIGINIT/SIGTERM
* node doesn't respond by default but can wiith code
* Docker provides a init PID 1 replacement option

### Proper Node Shutdown Options
* Temp: Use --init to fix ctrl-c for now
* Workaround: add tini to your image
* Production your app captures SIGINIT for proper exit

### Run any node app with --init to handle signals (temp solution)
```
    docker run --init -d nodeapp
```
* Add tini to your Dockerfile, then use it in CMD (pernament workaround)
```
    RUN apk add --no-cache tini
    
    ENTRYPOIN ["/sbin/tini", "--"]
    
    CMD ["node", "./bin/wwww"]
```
* Use JS snippet to properly capture signals (production solution)
* ./sample-graceful-shutdown/sample.js

### Assigment: Node Dockerfiles
* Make a Dockerfile for existing Node app
* use ./assigment-dockerfile/Dockerfile
* Start with node 10.15 on alpine
* Install tini, start node with tini
* Copy package/lock files first, then npm, then copy

### In order to build image and run container
```
    docker build -t assignment1 .
    docker run -p 80:3000 assignment1
```