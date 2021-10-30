FROM node:10-alpine

EXPOSE 3000

WORKDIR /user/src/app

COPY . .

RUN npm install && npm cache clean --force

CMD ["node", "/bin/www"]
