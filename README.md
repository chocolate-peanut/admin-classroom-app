## Private Education Admin System

**Frontend:** React (Vite) + Bootstrap + Ant Design  
**Backend:** Node.js (Express) + PostgreSQL  
**Language:** JavaScript

---

## Here’s what I used for development:

| Tool         | Version           |
|--------------|-------------------|
| Node.js      | v18+ (I used v23.10.0) |
| npm          | Comes with Node (I used v23.10.0) |
| PostgreSQL   | Local installation or Docker (I used local)|

---

## Quick Start

### Clone the Repository

Copy your repository link and run:

```bash
git clone REPO_LINK
cd YOUR_REPO
```

### Setup the Database
(Local)
- Create the database using your terminal: createdb admin_classroom
- Connect to the database using psql or any tools like pgAdmin4

Open up your terminal and run: createdb admin_classroom
Connect to the database using psql or any tools like pgAdmin4 or others
```
Create tables using the commands below:
-- Teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  contact_number TEXT NOT NULL
);

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
  id SERIAL PRIMARY KEY,
  level TEXT NOT NULL,
  name TEXT NOT NULL,
  teacher_id INTEGER UNIQUE REFERENCES teachers(id) ON DELETE SET NULL
);
```

### Setup Backend Environment
Go to /server and create a file: ./env, then paste the following configuration into the file:
```
(If your local DB does NOT require a password):
DATABASE_URL=postgresql://YOUR_USERNAME@localhost:5432/admin_classroom

(If your local DB requires a password):
DATABASE_URL=postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/admin_classroom

PORT=8080
```
Install the dependencies and run the server:
```
cd server
npm install
node server.js
```
> Your backend will run at: http://localhost:8080/api

### Run Frontend
Go to /client and install dependencies in order to open the website:
```
cd client
npm install / yarn install
npm run dev / yarn dev
```
> Your frontend will run at: http://localhost:5173

---

## Development Assumptions

- This project does **not** include user authentication — any admin can register teachers and classes.
- Each teacher’s `email` is unique in the system.
- A teacher can only be assigned as the form teacher for **one class**.
- Basic input validation is handled on both frontend and backend.
- The frontend and backend are designed for local development and testing only.

---

## Implemented Features

**Teachers**

- Add a new teacher with name, subject, email, and contact number.
- View a list of all registered teachers in a table.
- Form validates required fields and displays clear error messages.

**Classes**

- Add a new class with level, name, and assign a form teacher.
- View a list of all classes with their assigned form teachers.
- Class form prevents assigning the same teacher to multiple classes.

**API**

- Fully RESTful API for teachers and classes:
  - `POST /api/teachers` – Register a new teacher.
  - `GET /api/teachers` – Retrieve all teachers.
  - `POST /api/classes` – Register a new class with a teacher.
  - `GET /api/classes` – Retrieve all classes with form teachers.
- API error responses follow the spec: `{ "error": "Meaningful message" }`.

**Frontend**

- Responsive layout built with React (Vite) + Bootstrap + Ant Design.
- Navigation header to switch between Teachers and Classes.
- User-friendly form design with loaders during fetch, and alerts with proper messages.
