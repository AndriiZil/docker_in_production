FROM node:16.10.0-alpine

EXPOSE 3000

RUN apt-get update && apt-get install curl

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

RUN apt-get install httping

COPY . .

CMD [ "node", "./bin/www" ]
