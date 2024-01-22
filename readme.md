# Express MySQL Project

This is a simple Express.js server project that connects to a MySQL database. It exposes a single POST route /mysql that executes SQL queries on the MySQL database.

## Features

- MySQL Connection: The server connects to a MySQL database using the [mysql2](https://www.npmjs.com/package/mysql2)/promise library. The database URL is obtained from the DATABASE_URL environment variable.

- POST `/mysql` Route: This route accepts two query parameters: accessKey and sql. **accessKey** is a secret key for authentication and **sql** is the SQL query to be executed. If the access key is invalid or the SQL query is not provided, the route will return an error.

- Authentication: The `/mysql` route requires an access key for authentication. The access key is compared with the SECRET_KEY environment variable.

- Error Handling: If an error occurs during the execution of the SQL query, the server will return a 500 error and log the error to the console.

- Configurable Port: The port the server is listening on can be configured through the PORT environment variable. If PORT is not set, the server will listen on port 3000.

This project is ideal for scenarios where you need a simple server to execute SQL queries on a MySQL database.
