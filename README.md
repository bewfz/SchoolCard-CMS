# Headless CMS

This project is a headless CMS with user authentication and content management features. It uses MariaDB for data storage and token-based authentication for user sessions.

## Features

- User registration, login, and logout
- Token-based authentication
- Posting and deleting content in JSON format

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your MariaDB database and update the connection details in `src/config/db.js`
4. Start the server with `npm start`

## Usage

### User Registration

Send a POST request to `/register` with a JSON body containing `username` and `password`.

### User Login

Send a POST request to `/login` with a JSON body containing `username` and `password`. On successful login, you will receive an access token.

### User Logout

Send a POST request to `/logout` with the access token in the Authorization header.

### Posting Content

Send a POST request to `/content` with the access token in the Authorization header and a JSON body containing your content.

### Deleting Content

Send a DELETE request to `/content/:id` with the access token in the Authorization header.

## Note

This is a basic implementation and does not include advanced features like refresh tokens, role-based access control, or content versioning.