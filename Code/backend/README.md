README
Introduction
This repository contains a simple Node.js server and route controllers built using Express.js for handling HTTP requests. The server is designed to handle basic GET and POST requests and provides basic error handling.

Installation
Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install dependencies.
Usage
Ensure MongoDB is installed and running.
Set up environment variables by creating a .env file and defining PORT and any other required variables.
Start the server by running node server.js or npm start.
The server will run on the specified port, and you can access it through http://localhost:<PORT>.
Server.js
The server.js file contains the main server setup, including middleware, routing, error handling, and server startup logic.

RouteControllers
The routeController.js file contains route handling logic, including basic MongoDB schema setup, GET, and POST request handlers.

Routes
GET /api/: Handles GET requests.
POST /api/: Handles POST requests.
Error Handling
Custom error handling for 404 Not Found errors.
General error handling for internal server errors (500).