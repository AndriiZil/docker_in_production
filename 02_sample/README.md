### See logs of web application
```
    docker-compose logs web
```
### Go to container
```
    docker-compose exec web sh
```

### Alpine version has `apk` manager
```
    apk add --update curl
```

### In order to run another container type
```
    docker-compose up -d --build
```