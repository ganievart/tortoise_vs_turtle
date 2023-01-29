# Tortoise vs Turtle

## About

**Tortoise vs Turtle** is a hobby project that allows users to test their knowledge of the differences between tortoises and turtles. It obtains free random images from Pixabay and then uses Bing to determine if the image depicts a turtle or a tortoise.

## Demo
https://tortoise-vs-turtle-container-app.redisland-1467387b.northeurope.azurecontainerapps.io/

## Pipeline
https://github.com/ganievart/tortoise_vs_turtle/actions

## Contribution
### Prerequisites

The project requires `docker` to be installed on your local machine.

### How to start

1. Request the tokens for Pixabay and Azure Bing from Artur.
1. Create a file named `.env` in the `api` folder, and add provided keys to it.
```
pixabaykey=<PUT_PIXABAY_KEY_HERE>
bingkey=<PUT_BING_KEY_HERE>
```
1. Build and run app with docker-compose `docker-compose --env-file api/.env up`.

To rebuild container after stopping use `docker-compose --env-file api/.env up --build`

### Run Client (UI) only
Node 16.13.1 si required.
1. Run `npm install`
1. Run `npm run start`

### Run API only
#### Docker
1. Build `docker build -f Dockerfile.api -t api .`
1. Run `docker run --rm -p 5000:5000 --env-file api/.env api`
Application is accessible on `localhost:5000`

#### Flask
Python 3.7 is required.
1. Run `flask run` inside `api` folder

### Cleanup
#### To remove all containers:
`docker rm -f $(docker ps -aq)`

#### To remove all images:
`docker rmi -f $(docker images -q)`
Please note that these commands will remove all running and stopped containers and all images from your system. If you want to keep some images or containers, you can list them and exclude them from the command.