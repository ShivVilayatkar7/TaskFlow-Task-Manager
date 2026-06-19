# TaskFlow

A modern full-stack task management application built with the MERN stack. TaskFlow helps users organize tasks, manage projects, track progress, and improve productivity through an intuitive dashboard and Kanban board interface.

## Features

### Authentication

* User Registration
* User Login
* Protected Routes
* Secure JWT Authentication
* Logout Functionality

### Dashboard

* Task Overview
* Total Tasks Statistics
* Pending Tasks Count
* In Progress Tasks Count
* Completed Tasks Count
* Upcoming Tasks Section
* Activity Summary
* Priority Distribution
* Quick Actions Panel

### Kanban Board

* To Do Column
* In Progress Column
* Done Column
* Create New Tasks
* Move Tasks Between Columns
* Delete Tasks
* Responsive Mobile Layout

### Settings

* User Profile Information
* Account Details
* Preferences Section
* Quick Navigation
* Secure Logout

### Responsive Design

* Mobile Friendly
* Tablet Friendly
* Desktop Optimized
* Responsive Sidebar Navigation
* Mobile Hamburger Menu

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Lucide React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

```bash
TaskFlow/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layout/
│   │   ├── services/
│   │   ├── context/
│   │   └── assets/
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/ShivVilayatkar7/TaskFlow-Task-Manager.git
cd taskflow
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

## Future Improvements

* Drag and Drop Kanban Tasks
* Task Categories
* Team Collaboration
* Dark Mode
* Email Notifications
* Due Date Reminders
* Task Attachments

---

## Author

**Shiv Vilayatkar**

Built as a portfolio project to demonstrate full-stack web development skills using the MERN stack.

---

## License

This project is licensed under the MIT License.
