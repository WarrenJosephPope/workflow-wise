FROM node:alpine

ARG PORT
RUN apk update && apk add bash

WORKDIR /usr/app/frontend

COPY package*.json ./
EXPOSE ${PORT}

RUN npm install

COPY . .

CMD npm start