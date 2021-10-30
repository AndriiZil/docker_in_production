FROM node:16.10.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --update curl

RUN npm install && npm cache clean --force

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "./bin/www" ]
