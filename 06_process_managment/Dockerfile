FROM node:16.12.0-alpine

EXPOSE 3000

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json pakcage-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "app.js"]
