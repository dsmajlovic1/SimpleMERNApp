# Simple React app

This is a simple web application using Facebook Graph API to get personal information, store that information locally and enable local editting.

## Description

The project uses the react-facebook-login library that provides the Facebook login button, React framework was used to create the frontend part of the application and Node and Express were used for backend.

The frontend part of the application fetches the data from the API and passes it to the backend that stores the received data locally. After the data is fetched the page is redirected to the "edit" page that loads the local data and saves the changes locally. The saved data is located at /backend/person.json

## How to start the project

### Step 1 - Getting an App ID

In order to start the project you need a Graph API App ID because only the developers and a predefined set of users can use a developers App ID. 

First you need to have a Facebook developer account and create an app for your account at https://developers.facebook.com. The application can be a general purpose application ("For everything else") with a display name of your choice. After creating the application you should add "Facebook Login" as a product in the application, setup the login for web and add `http://localhost:3000/` as the site URL.

The App ID provided should be stored in the project directory .env file under REACT_APP_ID

### Step 2 - Install dependencies

You should have Node installed in order to start this project. You can check your node version by running `npm -v` in command line. You can get a Node installation on https://www.npmjs.com/get-npm

Install the needed dependencies by running the following command in the project directory and the /backend/ directory

`npm install`

### Step 3 - Run the app

Run the app by executing the following commands:

`node server` - in the /backend/ directory and 

`npm start` - in the project directory

The backend server runs on the port 5000 and the frontend on the port 3000 and assumes that the ports aren't running other processes.

The application will be run in your default browser at http://localhost:3000/

