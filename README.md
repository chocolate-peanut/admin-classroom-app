# Private Education Admin System

- **Frontend:** React (Vite) + Bootstrap + Ant Design
- **Backend:** Node.js (Express) + PostgreSQL
- **Language:** JavaScript

## Make Sure You Have:
[]: The specs that I use for the development
- [Node.js](https://nodejs.org/) (v18+ recommended) [v23.10.0]
- [npm](https://www.npmjs.com/) (comes with Node) [v23.10.0]
- [PostgreSQL](https://www.postgresql.org/) (local or via Docker) [local]

## Quick Start

### Clone the Repository
Copy my repository link and git clone to your own PC

### Setup the Database
(Local)
1. Open up your terminal and run: createdb admin_classroom
2. Connect to the database using psql or any tools like pgAdmin4 or others
3. Create tables using the commands below:

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

### Setup Backend Environment
1. Go to /server and create a file: ./env, then paste the following configuration to the file:
(If your local database has only username, then use the first configuration)
DATABASE_URL=postgresql://YOUR_USERNAME@localhost:5432/admin_classroom
or
DATABASE_URL=postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/admin_classroom
PORT=8080
3. Install the dependencies and run the server:
cd server
npm install
node server.js

### Run the Frontend
1. Go to /client and install dependencies in order to open the website:
cd client
npm install
npm run dev
