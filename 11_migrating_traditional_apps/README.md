### Migrating traditional apps

* Traditional App = Pre-Docker App
* Take a typical Node app and `migrate`
* Add Dockerignorefile
* Change Winston transport to Console

### MTA Requirements

* See README.md for app details
* Image shouldn't include in, out, node_modules or logs directories
* Change Winston to Console `winston.transports.Console`
* bind-mount `in` and `out` dirs
* Set CHARCOAL_FACTOR to 0.1

### MTA Outcomes
* Running container with ./in and ./out bond-mounts results in new chalk images in ./out on host
* Changing --env CHARCOAL_FACTOR changes look of image (test with 10)
* No .gif files in image
* docker logs shows Winston output
