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
Go to /server and create a file: ./env, then paste the following configuration to the file:
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
