
  ![logologo](https://github.com/user-attachments/assets/6565275e-f9f2-4b22-a16e-140d41df60c2)

  
## IronHub - Backend

<summary>

This repository contains the backend code for **IronHub**, a forum and collaboration platform for Ironhack students. The backend is built using **Node.js**, **Express**, and **MongoDB**, following a REST API architecture to support the frontend client.

**Link to the frontend-repository**:
https://github.com/didonatodani/ironhub-front

</summary> 

<details>

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

## Justification for Features

The features included in IronHub were carefully selected to meet the needs of Ironhack students:

- **User Authentication** 
  - ensures that only verified users can access and post content, maintaining a secure environment for collaboration.

- **Post Management**:
  - allows users to share insights, seek help, and contribute to discussions, creating a sense of community.

- **User Profiles**:
  - Enhances personalization and gives students the opportunity to connect more.

- **Filtering and Sorting**:
  -  help users quickly find relevant content, improving usability and engagement.

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

## Configuration and Setup

- **Prerequisites**:
  - Node.js (version 14.x or higher)
  - MongoDB (local or cloud database)
  - A .env file containing:
    - PORT=3000
    - MONGO_URI=<Your MongoDB connection string>
    - JWT_SECRET=<Your JWT secret>

**Installation**:
- **Clone the repository**:
  - git clone https://github.com/your-username/ironhub-backend.git
  - cd ironhub-backend

- **Install dependencies**:
  - npm install
  - Run the development server:
  - npm start
  - Access the application on http://localhost:3000.


## Credits
- **IronHub was developed by**:
  - **Dani Di Donato**:
    - Github-link: https://github.com/didonatodani/
    - Linkedin-link: https://www.linkedin.com/in/dani-di-donato-web-dev/
  - **Nigel Ferreres**
    - Github-link: https://github.com/NigelFerrefe
    - Linkedin-link: https://www.linkedin.com/in/nigel-ferreres-felix 
  - **Piet-Hein Schouten**
    - Github-link: https://github.com/phsworks 
    - Linkedin-link: https://www.linkedin.com/in/piet-hein-schouten-4a2b451bb/
    
Special thanks to:

Ironhack Instructor: Marcel Bosch.

</details>

---










