# Contacts Manager

This project is a Voting application built with MEAN Stack. It includes various middlewares for security, logging, and compression, as well as SPA. The project also uses Bootstrap for styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lamiaaselim/
   ```

- **1. Server Side**:

1. Navigate to the project directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

- **2. Client Side**:

1. Navigate to the project directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

- **1. Server Side**:

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and go to `http://localhost:8080` to see the application in action.

- **2. Client Side**:

1. Navigate to the src directory:
   ```sh
   cd src
   ```
1. Start the development server:
   ```sh
   ng serve
   ```
1. Open your browser and go to `http://localhost:4200` to see the application in action.

## Features

- **ExpressJS**: Utilizes the lightweight and flexible Express framework.
- **API Integration**: Fetches data from external APIs and renders it on the server.
- **Bootstrap**: Bootstrap for styling.
- **MVC Architecture For Server Side**:

```sh
APP/
├──
server/
│
├── controllers/
│   ├── authController.js     # Handle login and registration
│   ├── topicController.js    # Handle (CRUD) for the topics
│   └── voteController.js     # Handle (CRUD) for the votes
│
├── middleware/
│   └── authMiddleware.js     # authentication middleware
│
├── models/
│   ├── Topic.js              # Mongoose ODM Schema for topics collection
│   ├── User.js               # Mongoose ODM Schema for users collection
│   └── Vote.js               # Mongoose ODM Schema for votes collection
│
├── routes/
│   ├── auth.js               # Auth routes for (Registered user and logged in user)
│   ├── topics.js             # topics routes
│   └── votes.js              # votes routes
│
├── app.js                    # Entry File
└── package.json              # npm for managing package

```

- **LIFT principle Architecture For client Side**:

```sh
APP
├──
 client/
 ├──
src/
│
├── app/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── topic-management/
│   │   │   │   ├── topic-list/
│   │   │   │   │   └── topic-list.component.ts
│   │   │   │   │   └── topic-list.component.html
│   │   │   │   └── topic-detail/
│   │   │   │       └── topic-detail.component.ts
│   │   │   │       └── topic-detail.component.html
│   │   │   └── admin-dashboard/
│   │   │       └── admin-dashboard.component.ts
│   │   │       └── admin-dashboard.component.html
│   │   ├── user/
│   │   │   ├── voting/
│   │   │   │   └── voting.component.ts
│   │   │   │   └── voting.component.html
│   │   │   ├── topic-results/
│   │   │   │   └── topic-results.component.ts
│   │   │   │   └── topic-results.component.html
│   │   │   └── user-dashboard/
│   │   │       └── user-dashboard.component.ts
│   │   │       └── user-dashboard.component.html
│   ├── services/
│   │   ├── topic.service.ts
│   │   └── auth.service.ts
│   ├── interfaces/
│   │   └── topic.model.ts
│   │   └── user.model.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
└── assets/
```

- **MongoDB**: MongoDB for the database.
- **Security and Performance Includes**:

  - Morgan for HTTP request logging.
  - Compression for response compression.
  - Error handling and 404 middlewares.

- **Enviroment Variables**: to test our app, you need our .env file that contains:
  -Set the environment to development or production
  NODE_ENV="development"

  -Server configuration
  PORT = 8080

  -Database configuration
  DB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/votingApp'

  -JWT configuration
  JWT_SECRET='jwtSecret'
