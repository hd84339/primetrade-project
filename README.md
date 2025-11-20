# Primetrade.ai Full-Stack Task Manager

A full-stack MERN-style task management application built with **React (client)** and **Node.js + Express.js (server)**. Users can **sign up, login, add tasks, delete tasks, view dashboard**, and stay authenticated using JWT.

---

## 🚀 Tech Stack

### **Frontend (Client)**

* React (Vite)
* Axios (API calls)
* React Router

### **Backend (Server)**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt Password Hashing
* dotenv for env variables

---

## 📁 Folder Structure

```
project-root/
│
├─ client/                 # React frontend
│  ├─ src/
│  │  ├─ pages/
│  │  ├─ components/
│  │  ├─ services/        # Axios API calls
│  │  └─ App.jsx
│  └─ tailwind.config.js
│
├─ server/                 # Node backend
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ middleware/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ server.js
│  └─ package.json
│
└─ .gitignore
```

---

## 🔒 Environment Variables

Your server uses a `.env` file. Make sure `.env` is **NOT uploaded to GitHub**.

Add this in `.gitignore`:

```
.env
```

Example `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
```

---

## 🖥 Setup Instructions

### **1️⃣ Install server packages**

```
cd server
npm install
npm start
```

Server will run on: `http://localhost:5000`

### **2️⃣ Install client packages**

```
cd client
npm install
npm run dev
```

Client will run on: `http://localhost:5173`

---

## 📝 API Endpoints

### **Auth Routes**

```
POST /api/auth/signup
POST /api/auth/login
GET  /api/users/me    (protected)
```

### **Task Routes**

```
POST   /api/tasks        (create task)
GET    /api/tasks        (get all tasks)
DELETE /api/tasks/:id    (delete task)
```

---

## 🔐 Protected Routes (Frontend)

`ProtectedRoute.jsx` ensures only logged‑in users can access dashboard:

```jsx
const token = localStorage.getItem('token');
if (!token) return <Navigate to="/login" replace />;
return children;
```

---


## ⭐ Features

* User registration & login
* JWT authentication
* Add tasks
* Delete tasks
* View user profile
* Navbar showing logged‑in username (`Hello, Harsh`)
* Fully responsive UI

---

## 👤 Author

**Harsh Dubey** – Web Developer (HTML, CSS, JS, React, Node.js)

---
