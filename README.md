this is the Backend Repository link: https://github.com/Wanjira-Faith/Occasional-sync-backend

## EventHub - Event Management Application
EventHub is a web-based event management application that allows users to create, manage, and attend events. This application is built using React for the frontend and Node.js for the backend. It provides features for user registration, event creation, event browsing, and user authentication.

## Table of Contents
Features
Prerequisites
Getting Started
Usage
Contributing
License
Features
## EventHub offers the following features:

User Registration: Users can create an account by providing a username, email, and password. Account registration is validated to ensure that usernames and emails are unique.

User Authentication: Registered users can log in with their username and password, and their credentials are verified against the database. Upon successful login, users receive an access token for secure authentication.

Event Creation: Users can create new events by providing details such as the event name, date, time, location, and a description. The creator of the event becomes the event organizer.

Event Browsing: Users can browse a list of available events, view event details, and RSVP to events they are interested in attending.

## Prerequisites
Before you start using EventHub, you need to have the following software and tools installed:

Node.js and npm: Node.js is used for running the application's server and npm is used for managing dependencies.
Getting Started
Follow these steps to get EventHub up and running:

## Clone the repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/eventhub.git
Navigate to the project directory.

bash
Copy code
cd eventhub
## Install the project dependencies for both the client and server.

bash
Copy code
cd client
npm install
cd ../server
npm install
## Start the server. This will launch the backend of the application.

bash
Copy code
cd server
npm start
## Start the client. This will launch the React frontend.

bash
Copy code
cd client
npm start
## Open your web browser and access the application at http://localhost:3000.

## Usage
# User Registration:

Navigate to the registration page by clicking "Sign up" on the login page or visiting /register directly.
Provide a unique username, a valid email address, and a password.
Click the "Sign Up" button to create your account.
User Login:

Go to the login page by clicking "Log In" on the registration page or visiting /login directly.
Enter your username and password.
Click the "Log In" button to access your account.
Event Creation:

After logging in, navigate to the event creation page by clicking "Create Event" or visiting /create-events.
Fill in event details, such as the event name, date, time, location, and description.
Click the "Create Event" button to create your event.
Event Browsing:

From the home page or by visiting /, you can browse available events.
Click on an event to view its details and RSVP if interested.

## AUTHORS
Letia Kiok
Mark Kimani
Faith Njuguna







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


