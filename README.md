# Tortoise vs Turtle

## About

**Tortoise vs Turtle** is a hobby project that allows users to test their knowledge of the differences between tortoises and turtles. It obtains free random images from Pixabay and then uses Bing to determine if the image depicts a turtle or a tortoise.

## Demo
https://tortoisevsturtlewebapp.azurewebsites.net/

## Pipeline
https://github.com/ganievart/tortoise_vs_turtle/actions

## Contribution
### Prerequisites

The project requires `docker` to be installed on your local machine.

### How to start

1. Request the tokens for Pixabay and Azure Bing from Artur.
2. Create a file named `.env` in the root directory, and add provided keys to it.
```
pixabaykey=<PUT_PIXABAY_KEY_HERE>
bingkey=<PUT_BING_KEY_HERE>
```
3. Build with docker `docker build -f Dockerfile -t app .`.
4. Run `docker run -p 80:5000 --env-file .env app`

Application is avaliable on `http://localhost/`

### Run Client (UI) only
Node 16.13.1 si required.
1. Go to `client` folder.
1. Run `npm install`
1. Run `npm run start`

UI is avaliable on `http://localhost:30000/`

### Run API only
Python 3.7 is required.
1. Run `flask run`

API is avaliable on `http://localhost:50000/`

### Cleanup
#### To remove all containers:
`docker rm -f $(docker ps -aq)`

#### To remove all images:
`docker rm -f $(docker ps -aq)`

Please note that these commands will remove all running and stopped containers and all images from your system. If you want to keep some images or containers, you can list them and exclude them from the command.
