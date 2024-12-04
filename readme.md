# IronHub - Backend

This repository contains the backend code for **IronHub**, a forum and collaboration platform for Ironhack students. The backend is built using **Node.js**, **Express**, and **MongoDB**, following a REST API architecture to support the frontend client.

---

## Features

- **User Authentication**:
  - Sign-up, log-in, and log-out with encrypted passwords using JWT.
  - Authentication middleware to protect routes.

- **Post Management**:
  - Create, read, update, and delete user-generated posts.
  - Search posts by title.
  - Filter posts by course or category.
  - Sort posts by date or relevance.

- **User Profiles**:
  - Retrieve and update user profile details.
  - Display posts by a specific user.

- **Filtering and Sorting**:
  - Retrieve posts with options for filtering (e.g., by category) and sorting (e.g., by date).

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: Database for storing user and post data.
- **Mongoose**: ODM for MongoDB to define and interact with data models.
- **JWT**: Secure user authentication.
- **bcrypt**: For password hashing.
- **dotenv**: For environment variable management.

---

## API Endpoints

### Home
| Method | Endpoint    | Description                    |
|--------|-------------|--------------------------------|
| GET    | `/`         | Homepage                      |

---

### Authentication
| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| POST   | `/auth/signup`    | Register a new user                 |
| POST   | `/auth/login`     | Log in an existing user             |
| GET    | `/auth/verify`    | Verify user authentication status   |

---

### Users
| Method | Endpoint                | Description                                     |
|--------|-------------------------|-------------------------------------------------|
| GET    | `/users/:userId`        | Retrieve a user's profile                      |
| PUT    | `/users/:userId`        | Update a user's profile                        |
| GET    | `/users/:postId`        | Retrieve all posts created by a specific user  |

---

### Posts
| Method | Endpoint          | Description                           |
|--------|-------------------|---------------------------------------|
| GET    | `/posts`          | Retrieve all posts (supports filters and sorting) |
| POST   | `/posts`          | Create a new post                    |
| GET    | `/posts/:id`      | Retrieve a single post by ID         |
| PUT    | `/posts/:id`      | Update a post by ID                  |
| DELETE | `/posts/:id`      | Delete a post by ID                  |
| GET    | `/posts/search`   | Search for posts by title            |

---