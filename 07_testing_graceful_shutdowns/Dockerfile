FROM node:16.12.0-alpine

EXPOSE 3000

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

#ENTRYPOINT ["tini", "--"]

CMD ["node", "app.js"]
