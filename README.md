### How to delete all unused docker objects
* REMOVE
- all stopped containers
- all networks not used by at least one container
- all dangling images
- all build cache
```
    docker system prune
```
* REMOVE
- all stopped containers
- all networks not used by at least one container
- all volumes not used by at least one container
- all dangling images
- all build cache
```
    docker system prune --volumes
```

### Removed all stopped containers
```
    docker container prune
```
