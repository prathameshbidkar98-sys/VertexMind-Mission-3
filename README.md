# Mission 3 - Authentication & Advanced Features API

A secure REST API built using Node.js, Express.js, MongoDB and JWT authentication.

This project implements user authentication, protected routes and advanced API features.

---

## 🚀 Features

✅ User Registration  
✅ User Login  
✅ JWT Token Authentication  
✅ Password Hashing using bcrypt  
✅ Protected Routes  
✅ CRUD Operations  
✅ Search Functionality  
✅ Pagination  
✅ MongoDB Database Integration  

---

## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Security**
- JWT
- bcryptjs

**Testing**
- Postman

---

## 📂 Project Structure

```
mission-3-auth-api/

├── server.js

├── config/
│   └── db.js

├── models/
│   ├── User.js
│   └── Task.js

├── controllers/
│   ├── authController.js
│   └── taskController.js

├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js

├── middleware/
│   └── authMiddleware.js

├── utils/
│   └── generateToken.js

└── screenshots/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go inside project:

```bash
cd mission-3-auth-api
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
PORT=5000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Run Project

Development mode:

```bash
npm run dev
```

Server will start:

```
Server running on 5000
Database Connected
```

---

## 🔗 API Endpoints

### Authentication

### Register User

```
POST /api/auth/register
```

Body:

```json
{
"name":"User",
"email":"user@gmail.com",
"password":"123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Returns JWT token.

---

# Tasks API

All task routes require:

```
Authorization: Bearer TOKEN
```

---

### Create Task

```
POST /api/tasks
```

---

### Get Tasks

```
GET /api/tasks
```

---

### Search Tasks

```
GET /api/tasks?keyword=value
```

---

### Pagination

```
GET /api/tasks?page=1
```

---

### Update Task

```
PUT /api/tasks/:id
```

---

### Delete Task

```
DELETE /api/tasks/:id
```

---

## 📸 API Testing Screenshots

Screenshots of Postman testing are available in:

```
screenshots/
```

---

## 👨‍💻 Author

Prathamesh Bidkar

Full Stack Development Internship - VertexMind
