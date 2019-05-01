### Requirements

* [nodejs v10.x](https://nodejs.org/en/)
* [docker](https://www.docker.com/community-edition#/overview)
* [docker-compose](https://docs.docker.com/compose/install/)


### Setup

- Rename `config/config.template.json` to `config/config.json` and set valid credentials (email/password)

- Set the [docker-selenium](https://github.com/SeleniumHQ/docker-selenium/releases) image version to use in `.env` file.
e.g: TAG=3.141.59-neon.

### Execute Tests (local)

`npm install`

`npm run test:local`

##### Execute single spec

`npm run test:local -- --spec /path/to/spec`

### Execute Tests (docker selenium grid)

`docker-compose up --build --abort-on-container-exit`
