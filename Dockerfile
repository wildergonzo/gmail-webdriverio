FROM node:10.15.0-alpine

ENV PATH $PATH:/code/node_modules/.bin/

ADD . /code

WORKDIR /code

RUN npm install
