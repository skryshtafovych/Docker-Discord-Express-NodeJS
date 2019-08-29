FROM node:8.9.3-alpine
RUN mkdir -p /usr/src/app
COPY ./app/* /usr/src/app/
COPY ./app/public/* /usr/src/app/public/

WORKDIR /usr/src/app

EXPOSE 8080
EXPOSE 80

RUN npm install
CMD node /usr/src/app/index.js
