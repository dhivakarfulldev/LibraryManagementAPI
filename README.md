# 📚 Library Management API

A RESTful **Library Management API** built using **Node.js** and **Express.js**.

This project allows users to manage books, library members, and book borrowing and returning operations through REST API endpoints.


---

## 📌 Project Overview

The Library Management API is a backend application designed to manage basic library operations.

The API provides endpoints to:

- Add new books
- Register new library members
- Borrow books
- Return books
- View all books
- View all registered members
- View all borrowed books
- Validate input data
- Handle errors
- Manage book availability



---

# 🎯 Project Objective

The objective of this project is to build a Library Management API using:

- Node.js
- Express.js
- JavaScript



 all application data is stored in local JavaScript variables:

```javascript
const books = [];
const members = [];
const borrowRecords = [];
```

# API Base URL

  [https://librarymanagementapi-2u81.onrender.com]

## API Endpoints

| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| `POST` | `/api/library/books`            | Add a new book         |
| `POST` | `/api/library/members`          | Register a new member  |
| `POST` | `/api/library/borrow/:bookId`   | Borrow a book          |
| `PUT`  | `/api/library/return/:borrowId` | Return a book          |
| `GET`  | `/api/library/books`            | Get all books          |
| `GET`  | `/api/library/borrowed`         | Get all borrowed books |
| `GET`  | `/api/library/members`          | Get all members        |


## 🔗 Connect With Me

💼 **LinkedIn:** [Dhivakar R](https://www.linkedin.com/in/dhivakar--r/)