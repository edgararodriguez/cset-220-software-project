# BattleshipChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Background

For my software project for this semester I was assigned to make a application with requirements. I started with a Pusher tutorial and later went on to another pusher tutorial. I later then implemented a angular login and api for the users. Sounds easy at first but this journey was a learning experience with a lot of troubleshooting.

## Requirements

1. Create a database with tables to store your data structure
2. Create a well structured web interface and backend api to power your project
3. Frontend component
4. Backend component
5. Administration Portal
6. Data Analysis & visualizations
7. API Implementation
8. Data Architecture

## Approach

This project was written in Node.Js and angular-CLI. The reason I chose angular is because I wanted to expand my knowledge. I was a complete stranger to angular and I felt that it would be a good challenge for me to test myself with a hefty project done with angular. This project was dependent on a lot of modules. It was dependent on things such as angular, axios, body-parser, bootstrap, bulma, core-js, cors, dotenv, express, jquery, ngx-toastr, pusher, pusher-js, rxjs, rxjs-compat, shortid, toastr, zone.js, typescript, protractor, codelyzer, and karma for unit testing. These dependencies were used to layout my front end and to allow my backend to bring things together so they can be displayed in the front end. I used mongodb and Node.JS for my api. Most of my styles were done using bootstrap, I was going for more of a simplistic view for my project.

## Process

1. I started the project by following the pusher tutorial for the battleship game. The project was ran an older version of angular.
2. Once I finished the game I started to create a log in with Node.JS. I followed a video tutorial. Following a video tutorial was one of my mistakes. It occupied time and the tutorial ended up being outdated. I did not find this out until later into the project. I had mysql as my database.
3. The tutorial ended up not working. I started following a different one for my login. This one ended up working it was done in Node.JS as well. I used the same database because it fit what I wanted to do. The database was still mysql.
4. After creating the login. I started to create the chat using pusher. I created the chat separately from the rest of my projects to see what does what and how everything works together.
5. Once my chat was finished I added a bot to the chat using dialogflow. I found some cool add ons that I could add onto it but they were not necessary for this project.
6. Once the Chat was finished I started to put my game and chat together. It took me a while to get these together. I did not want them as separate components so I had to combine them together as one app. I had to make sure certain code did not overlap other code. I created code under my server.js file so it would run both the game and the chat under one localhost in order to avoid deploying multiple projects into heroku.
7. The chat and the game were now linked together. Now it was time to add on the login into it. This is where I found out that mysql will not work with angular. I had to scrap my authentication once again. I created the login component along with the register, models, components, services, details, and fake backend. I had the routes created to connect all these components together but not the game.
8. Now that the login was created I needed to create an api that allowed me to have user data along with token hashing. I used Mongodb and Node.JS to create api. I then deployed it to heroku to be safe. I downloaded and used postman to test my api to see if it works correctly.
9. Now that I had my login it was time to combine it into the game I struggled for a bit to get the files to link together. I had to move my battleship game from being created on the app component to it to become its own component. Once I did this I exported the component so it can be used along with the other routes. I double checked that all the modules were correct. I then deployed it to heroku. Once it was deployed I connected it to my API that was also already deployed to heroku. The Project was now finished.

## Data Analysis Life Cycle

1. Discovery / Requirements:I wanted to create a graph showing how many new users were created overtime in a whole year.
2. Collection:For this I would gather my data such as the id and when they were created.
3. DataPrep: In this I prepared my data by cleaning it up and getting rid of users who were created to test the application.
4. Exploration: This is when I started to think on how I wanted to display my graph I decided I wanted to use a line graph to display every user created.
5. Modeling: This is where I stopped due to my crunch for time. For this step I would use math functions to help setup a certain display.
6. Automation: For this step I would create code for my graph to display the users created over time.
7. Findings/Review: This is the step where I would find out what to do next with the data and get results from the data analysis.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
