### Multi stage Builds

* New features in 17.06 (mid-2017)
* Build multiple images from one file
* Those images can FROM each other
* COPY files between them
* Space + security benefits
* Great for "artifact only"
* Great for dev + test + prod

### More Multi-stage
* Add a test stage that runs npm test
* Have CI build --target test stage before building prod
* Add npm install --only=development to dev stage
* Don't COPY code into dev stage

### Building A 3-Stage Dockerfile
* Create a Dockerfile from './sample-multi-stage'
* Create three stages for prod, dev, and test
* Prod has no devDependencies and runs node
* Dev includes devDep, runs nodemon
* Test has devDep, runs npm test
* Build all three stages with unique tags
* Goal don't repeat lines

### In order to build container type
```
    docker build -t multistage --target prod .
```
### Build image and run container for prod
```
    docker build -t multistage --target prod . && docker run multistage
```
### Build image and run container for development
```
    docker build -t multistage:dev --target dev . && docker run --init -p 3000:3000 multistage:dev
```
### Build image and run container for development
```
    docker build -t multistage:test --target test . && docker run --init multistage:test
```