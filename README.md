 # My Nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
   
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Endpoints API

GET http://localhost:3007/users

GET http://localhost:3007/users/posts

GET http://localhost:3007/users/posts/comments

POST http://localhost:3007/users

POST http://127.0.0.1:3007/users/create

## We created: users - entity

Module and Controller

## API postman or cURL

### POST:

curl --location --request POST 'http://127.0.0.1:3007/users' \
--header 'Content-Type: application/json' \
--data '{
    "username": "Alessandro",
    "email": "alessandro@gmail.com"
}'

curl --location --request POST 'http://127.0.0.1:3007/users' \
--data ''

### GET:

curl --location --request GET 'http://127.0.0.1:3007/users' \
--data ''
