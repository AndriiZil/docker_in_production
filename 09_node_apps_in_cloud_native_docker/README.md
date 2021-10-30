### Cloud Native App Guidelines
* Follow 12factor.net principles, especially
* Use Environment Variables for config
* Log to stdout/stderr
* Pin all versions, even npm
* Graceful exit SIGTERM/INIT
* Create a .dockerignore (like .gitignore)

### 12 Factor Container Happiness
* Heroku wrote a highly respected guide to creating distributed apps
* Twelve factors to consider when developing or designing distributed apps
* Containers are almost always distributed apps
* Good news: You get many of these by using Docker
* Lets focus on a few for Node.js

### 12 Factor: Config
* 12factor.net/config
* Store environment config in Environment Variables (env vars)
* Docker & Compose are great at this with multiple options
* Old apps: Use CMD or ENTRYPOINT script with envsubst to pass env vars into conf files

### 12 Factor: logs
* Apps shouldn't route or transport logs to anything but stdout/stderr
* console.log() works
* Winston/Bunyan/Morgan: Use levels to control verbosity
* Winston transport: "Console"

### .dockerignore
* Prevent bloat and unneeded files
```
    .git
    node_modules/
    npm-debug
    docker-compose*.yml
```
