# 📒 Note Keeper API

A simple **Note Keeping REST API** built with **Node.js, Express.js, and MongoDB**.
It allows users to perform CRUD operations on notes with support for **search** and **pagination**.

---

## 🗂️ Project Structure

```
src/
├── routes/
│   └── notes.js         
├── controllers/
│   └── noteController.js
├── models/
│   └── Note.js
├── config/
│   └── database.js
├── middleware/
│   └── errorHandler.js
└── app.js
```

---

## 🚀 Features

* Create, Read, Update, and Delete notes
* Each note contains:

  * `title`
  * `content`
  * `createdAt` (auto-generated)
* Search notes by title or content
* Pagination support for listing notes
* Error handling with descriptive messages

---

## 📂 API Endpoints (Abbreviated)

* `GET /notes` → Get all notes (supports pagination)
* `POST /notes` → Create a new note
* `PUT /notes/:id` → Update a note
* `DELETE /notes/:id` → Delete a note
* `GET /notes/search?query=keyword` → Search notes

> Full request/response examples are available in the Postman collection below.

---

## 📬 Postman Collection

You can test all endpoints easily using the provided Postman collection:

👉 [Download Note Keeper API Postman Collection](./docs/postman_collection.json)

*(Save the exported Postman collection JSON in your `/docs` folder)*

---

## ⚙️ Installation & Setup

### 1. Clone repo

```bash
git clone https://github.com/MayarQasrawi/note-keeper-api.git
cd note-keeper-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run server

```bash
npm start
```

API runs at 👉 `http://localhost:3000`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**

---

## ✅ Bonus Features

* Full-text search on notes (`title` & `content`)
* Paginated notes listing

---

## 📜 License

MIT License © 2025 [Mayar Qasrawi](https://github.com/MayarQasrawi)
