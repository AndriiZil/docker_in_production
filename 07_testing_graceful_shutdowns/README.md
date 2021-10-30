### Testing Graceful Shutdowns
* ./assigment-dockerfile
* Run with tini build in, try to ctrl-c
* Run with tini build in, try to stop
* Remove ENTRYPOINT, rebuild
* Add --init to run command, ctrl-c/stop
* Bonus: add signal watch code

### Docker build image and run container
```
    docker build -t assignment1 .
    docker run -p 8080:3000 assignment1
    docker run -d -p 8080:3000 assignment1
    docker build -t assignment1:notini .
```

### Type docker top `8a` - (the first letter of container)
```
    docker top 8a
```
### Create one more process
```
    docker run -d assignment1
```
