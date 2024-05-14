# Task Management App

Task Management App is a web application built with NestJS and MySQL, providing functionalities for user registration, login, user management, user profiles, and task management.

## Features

- **User Registration:** Users can register with their email, phone number, username, and password. Passwords must meet specific criteria.
- **User Login:** Registered users can log in with their username and password.
- **User Management:** Admin users can manage other users, including viewing user lists, updating user information, assigning roles, and deleting users.
- **User Profile:** Users can update their profiles, including uploading profile pictures.
- **Task Management:** Users can create, read, update, and delete tasks, including specifying task name, description, and attachment.

## Installation

1. Clone the repository:

```

git clone https://github.com/your-username/task-management-app.git

```

2. Install dependencies:

```
cd task-management-app

npm install

```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     ```
     DB_HOST=your_mysql_host
     DB_PORT=your_mysql_port
     DB_USERNAME=your_mysql_username
     DB_PASSWORD=your_mysql_password
     DB_NAME=your_mysql_database_name
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the server:

```

npm start

```

5. Access the application at `http://localhost:3000`.

## API Endpoints

- **User Registration:**
  - `POST /auth/register`
- **User Login:**
  - `POST /auth/login`
- **User Management:**
  - `GET /users` (Admin Only)
  - `PUT /users/:id` (Admin Only)
  - `DELETE /users/:id` (Admin Only)
  - `PUT /users/:id/role` (Admin Only)
- **User Profile:**
  - `PUT /profile`
  - `POST /profile/picture`
- **Task Management:**
  - `POST /tasks`
  - `PUT /tasks/:id`
  - `DELETE /tasks/:id`
  - `GET /tasks`
  - `GET /tasks/:id`

## Technologies Used

- NestJS
- MySQL
- TypeORM
- JWT (JSON Web Tokens)
- bcrypt.js

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
