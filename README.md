# Placement Cell - Full Stack Web Application

A full-stack placement management portal built using Node.js, Express.js, MongoDB, and EJS.
The application helps manage students, interviews, company allocations, and placement activities efficiently.

---

## Features

* Employee/Admin Authentication
* Student Registration & Management
* Interview Scheduling System
* Company Allocation Tracking
* Placement Status Tracking
* Protected Routes & Session Handling
* Dynamic Server-Side Rendering using EJS
* CSV Report Download
* Full CRUD Functionality
* MVC Architecture Implementation

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* EJS
* CSS
* JavaScript

### Architecture

* MVC Architecture

---

## Project Structure

```bash
Placement-Cell-Project/
│
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── index.js
├── package.json
```

---

## Authentication Features

* Secure employee registration and login
* Password-based authentication
* Protected routes using middleware
* Session handling for authorized access

---

## Database Design

MongoDB schemas were designed for:

* Students
* Employees/Admins
* Interviews
* Company Allocations
* Placement Results

---

## Functionalities

### Student Management

* Add students
* Update student details
* Delete students
* Track placement status

### Interview Management

* Schedule interviews
* Allocate companies
* Update interview results

### Reports

* Download placement data in CSV format

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd Placement-Cell-Project
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### Run Application

```bash
npm start
```

---

## Future Improvements

* Role-based access control
* Email notifications
* Resume upload feature
* Dashboard analytics
* REST API integration

---

## Learning Outcomes

* Built scalable backend architecture using MVC pattern
* Implemented authentication and protected routing
* Worked with MongoDB schema relationships
* Developed dynamic server-rendered applications using EJS
* Managed CRUD operations and report generation

---

## Author

Shashank Pandey
