### Least Privilege: Using node User
* Official node images have a node user
* But it's not used by default
* Do this after apt/apk and npm i -g
* Do this before npm i
* May cause persmissions issues with write access
* May require chrown node:node

### Change user from root to node
```
    USER node
```
* Set permissions on app dir
```
    RUN mkdir app && chrown -R node:node .
```
* RUN a command as root in container
```
    docker-compose exec -u root
```

* RUN
* ENTRYPOINT
* CMD
```
    docker build -t usernode
    docker run -it usernode bash
    ls -al
    
```