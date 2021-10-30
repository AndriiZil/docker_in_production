### About Compose YAML v2 vs v3

1. If not using Swarm/ Kubernetes, stick to v2
2. v2 Focus single-node dev/test
3. v3 Focus multi-node orchestration
4. If not using Swarm/ Kubernetes, stick to v2

### docker-compose ...
1. `build` just build/rebuild image(s)
2. `stop` just stop containers don't delete
3. `ps list` "services"
4. `push` images to registry
5. `logs` same as docker CLI
6. `exec` same as docker CLI

### Commands
```
    cd sample-02
    docker-compose up
    ctrl-c (same as docker-compsoe stop)
    docker-compose down
    docker-compose up -d
    docker-compose ps
    docker-compose logs
```
### While app is running detached...
```
    docker-compsoe exec web sh
    curl localhost
    exit
```
* edit Dockerfile, add curl with apk
```
    RUN apk add --update curl
    docker-compose up -d
```
* NOtice it didn't build so force it
```
    docker-compsoe up -d --build
```
* Now try curl again
```
    docker-compose exec web sh
    curl localhost
    exit
```
