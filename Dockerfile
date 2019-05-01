FROM node:10.15.0-alpine
ENV PATH $PATH:/code/node_modules/.bin/

RUN apk --no-cache add curl jq yarn

WORKDIR /code

# copy dependencies list
COPY package.json package.json
COPY yarn.lock yarn.lock

# install dependencies
RUN yarn install --production

# copy project files
ADD . /code