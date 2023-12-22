# My CMS App

This is a CMS application built with Node.js, Express, MySQL, and JWT for authentication. 

## Features

- User registration and login
- JWT authentication
- CRUD operations for cards
- MySQL for data storage

## Models

- User: Contains fields like username, password.
- Card: Contains fields like content, creation date, owner, and type.

## API Endpoints

- Register: `POST /register`
- Login: `POST /login`
- New Card: `POST /cards`
- Delete Card: `DELETE /cards/:id`

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your MySQL database and update the connection string in the `.env` file
4. Run the server with `npm start`

## Note

This is a basic CMS application and does not include advanced features like password hashing, input validation, error handling, etc. Always remember to add these features in a production-level application.