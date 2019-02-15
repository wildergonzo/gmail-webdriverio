FROM node:10.15.0-alpine
ENV PATH $PATH:/code/node_modules/.bin/

RUN apk --no-cache add curl jq

ADD . /code

WORKDIR /code

RUN npm install