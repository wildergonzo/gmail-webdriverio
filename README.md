### Requirements

* [node](https://nodejs.org/en/)
* [docker](https://www.docker.com/community-edition#/overview)
* [docker-compose](https://docs.docker.com/compose/install/)


### Setup

- Rename `config/config.template.json` to `config/config.json` and set valid credentials (email/password)

- Set the [docker-selenium](https://github.com/SeleniumHQ/docker-selenium/releases) image version to use in `.env` file.
e.g: TAG=3.141.59-gold.

### Execute Tests (local)

`npm insall`

`npm test`

### Execute Tests (docker selenium grid)

`docker-compose up --build --abort-on-container-exit`
