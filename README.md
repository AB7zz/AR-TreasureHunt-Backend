# AR-Backend

## Overview
This is a brief overview of the folders and files present in this project

### Folders

#### 1. config
The 'config' folder stores configuration files for various environment keys and initializing the Firebase instance

#### 2. controllers
The 'controllers' folder contains the logic for handling different API routes and their corresponding logic.

#### 3. middleware
The 'middleware' folder includes reusable middleware functions that can be used in different routes for tasks like authentication, logging, error handling, etc.
Right now we have only one middleware, that's for authentication.

#### 4. routes
The 'routes' folder defines the different API routes and links them to their respective controller functions.


### Files

#### 2. .gitignore
The '.gitignore' file specifies intentionally untracked files that Git should ignore, such as logs, dependencies, and sensitive information.

#### 3. index.js
The 'index.js' file serves as the entry point of the application, where the Express server is initialized and middleware, routes, and other configurations are set up.

#### 4. package.json
The 'package.json' file is used to manage the project's dependencies and scripts, and it provides information about the project, such as its name, version, and dependencies.

## Applications you need to have installed

1. IDE like VSCode or Sublime Text
2. NodeJS
3. Postman for testing the API routes

## Getting Started
To get started with the project, follow the steps below:

1. Clone the repository.
2. Install dependencies using 'npm install'.
3. Set up the required environment variables in the '.env' file. (I've sent them to your email)
4. Run the application using 'npm run start'.

## Additional Information
For additional information or specific instructions on using the API, please refer to the documentation provided in each folder or file.
