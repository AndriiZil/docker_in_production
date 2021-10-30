### Best practices in order to write Dockerfile

```
    COPY, not ADD
    npm/yarn install during build
    CMD node, not npm
    WORKDIR not RUN mkdir
```

### Rules
```
    - requires another application to run
    - not as literal in Dockerfile
    - doesn't work well as an init or PID process
```

### Best image guidelines
1. Stick to even numbered major releases
2. Don't use :latest tag
3. Start with Debian if migrating
4. Move to Alpine later
5. Don't use :slim
6. Don't use :onbuild

### When to use Alpine Images
1. Alpine is "small" and "sec focused"
2. But Debian/Ubuntu are smaller now too
3. ~100MB space saveng isn't significant
4. Alpine has its own issues
5. Alpine CVE scanning fails
6. Enterprices may require CentOS or Ubuntu/Debian
