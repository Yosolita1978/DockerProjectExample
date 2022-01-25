# Intro to the Basic Setup for a PERN Project

Welcome to the Guide of a Basic Setup for a PERN Project!

With this guide of instructions you will learn how to setup the basic of a PERN Project using Docker and publishing on Heroku.

You'll work on this guide project over the next several days. The setup that we propose here is the "bare-bones" of a PERN project. It's a good starting point for each of your next Projects and you will need this setup for your final project. We propose the basic structure but you - hopefully - will create something more robust for your final project. 

By the end of this guide you'll have built a full-stack web app with Node, Express and PSQL in the backend and REACT in the frontend.

## Project Arcthitecture

We will follow this Architecture for a PERN Project:
![ScreenShoot Architecture](https://github.com/Yosolita1978/screenshoots/blob/main/2022/FinalProject/FlowchartArchitecture.png?raw=true)

### Technology
- create-react-app
- React
- JavaScript / NodeJs
- Express
- Postgres
- Cors
- Docker / Kubernetes

### First Steps - In your folders

Inside your main folder for the project you should have this directory distribution:
```
   $users/code/FinalProject
      /client
      /server
   ```

Next you need to configure the dependencies inside your package.json in your server directory. Here's an example of what that `package.json` should look like:

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.3",
    "pg":"8.0.3",
    "cors":"2.8.5",
    "nodemon": "2.0.15",
    "body-parser": "*"
  }, 
  "scripts":{
    "dev": "nodemon",
    "start": "node index.js"
  }
}
```
After copy the dependencies in your file, please run `npm install` in your terminal so Node can install all the packages. 
