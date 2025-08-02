# Calender Integration App

## Overview
This project helps users manage and organize their schedules efficiently, allowing them to create events, set reminders, and view their commitments in a clear, intuitive interface.

## Features
- Event Creation: Easily add new events with details like title, date, time, and description.
- Calendar View: Visualize your schedule with daily, weekly, and monthly calendar views.
- User Authentication: Secure user login and registration using Google OAuth2.0.
- Responsive Design: Access your schedule seamlessly across various devices.

## Setup Instructions
### Prerequisites
- Node.js 
- A JS package manager
- NOTE: nodemon is used to start the server in the makefile to automatically restart the server whenever changes are detected in your backend files. If you encounter issues with running the backend, please ensure nodemon is installed. You can find documentation [here](https://www.npmjs.com/package/concurrently#installation).

### Installation
1. Clone the repository and install dependencies:
   ```sh
   make install
   ```

## Running the Project 

### Creating your Environment Variables
1. Navigate to the backend directory and copy the example:
    ```sh
    cp .env.example .env
   ```
2. Open the newly created .env file and fill in the required values. Here's an example of what you might see:

    URL="your mongodb or other db uri"
    JWT_SECRET="your_super_secret_jwt_key"
    PORT=3000

3. Now, navigate to the frontend directory and copy the sample just as in the backend. Fill in the required value(s) aswell.

### Running the Backend
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Start the backend server:
   ```sh
   node server.js # or npm start, depending on your setup.
   ```

   OR

1. Run with the make file:
    ```sh
   make run-backend
    ```

### Running the Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Build the frontend (can skip this is you just want to preview the frontend):
   ```sh
   npm run build
   ```
3. Start the frontend:
   ```sh
   npm run start
   ```

   OR

1. Use the make file to start the frontend:
   ```sh
   make run-frontend
   ```

### Running both at the same time (requires you to have [concurrently](https://www.npmjs.com/package/concurrently#installation) installed )
1. In the root directory, run:
   ```sh
   make start
   ```