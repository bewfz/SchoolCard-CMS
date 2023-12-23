# SchoolCard Simple CMS

This is a CMS application built with Node.js, Express, MySQL, and JWT for authentication. 

## Features

- User registration and login
- JWT authentication
- CRUD operations for cards
- MySQL for data storage
- 3 Card Type, including Lost&Found, Friend Making, Normal

## Models

- User: Contains fields like username, password.
- Card: Contains fields like content, creation date, owner, and type.

## API Endpoints

- Register: `POST /api/register`
- Login: `POST /api/login`
- New Card: `POST /api/cards`
- Delete Card: `DELETE /api/cards/:id`
- Card Query: `GET /api/public/card`
- API Example: 

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your MySQL database and update the connection string in the `.env` file
4. Run the server with `npm start`
