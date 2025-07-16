# 📚 ByteBooks — Minimal Library Management System

ByteBooks is a **minimalist library management system** built using **React**, **TypeScript**, **RTK Query**, and **Tailwind CSS**. It allows users to perform basic book management and borrowing operations through a simple, elegant interface—**no authentication or categories required**.

---

## 🚀 Live Demo

🔗 [Frontend Deployment](https://byte-books-client-site-a759.vercel.app/)  
🔗 [Backend Deployment](https://mongoose-assignment3-server.vercel.app/)  
🔗 [Frontend GitHub Repo](https://github.com/yeaminfoysal/ByteBooks-ClientSite)  
🔗 [Backend GitHub Repo](https://github.com/yeaminfoysal/Express_Mongoose_Assignment3)  

---

## 🧩 Features

### ✅ Public Access
- All features are accessible without logging in.

### 📘 Book Management
- View a list of all books
- Add, edit, delete, and borrow books
- Responsive, searchable, and clean book table with:
  - **Title**, **Author**, **Genre**, **ISBN**, **Copies**, **Availability**, and **Actions**

### 📤 Borrow Book
- Simple form with `Quantity` and `Due Date`
- Prevent borrowing more than available copies
- Update availability automatically

### 📊 Borrow Summary
- Aggregated table showing:
  - **Book Title**
  - **ISBN**
  - **Total Quantity Borrowed**

### 💅 Modern UI
- Fully responsive and minimalistic interface
- Built using Tailwind CSS, Radix UI, Shadcn and Lucide icons
- Toast notifications for actions via Sonner & SweetAlert2

---

## 🧱 Pages & Routes

| Page                | Path                | Description                                      |
|---------------------|---------------------|--------------------------------------------------|
| 📚 All Books        | `/books`            | Lists all books with full actions                |
| ➕ Add Book         | `/create-book`      | Add a new book                                   |
| 🧾 Book Details     | `/books/:id`        | Detailed view of a specific book                 |
| ✏️ Edit Book        | `/edit-book/:id`    | Edit a book’s details                            |
| 📥 Borrow Book      | `/borrow/:bookId`   | Borrow form with validation                      |
| 📈 Borrow Summary   | `/borrow-summary`   | Aggregated report of all borrowed books          |

---

## 🖼️ UI Components

- **Navbar**: Navigation between book list, add book, and summary.
- **Book Table**: Core component for displaying books and actions.
- **Borrow Modal**: Popover/dialog-based borrow interface.
- **Forms**: Type-safe, schema-validated forms using `react-hook-form` and `zod`.
- **Footer**: Simple site footer.

---

## 🧠 Business Logic Highlights

- If `copies = 0`, mark book as unavailable
- Borrow quantity must not exceed available copies
- Auto-refresh list and optimistic UI updates after any CRUD operation

---

## 🔧 Tech Stack

| Layer            | Tech                          |
|------------------|-------------------------------|
| Frontend         | React, TypeScript, Vite       |
| State Management | Redux Toolkit + RTK Query     |
| Forms            | React Hook Form + Zod         |
| Styling          | Tailwind CSS + Radix UI       |
| Icons            | Lucide-react                  |
| Date Handling    | date-fns                      |
| Backend          | Node.js + Express (suggested) |
| Database         | MongoDB + Mongoose            |

---

## 📦 Dependencies

### Main Dependencies
```bash
@hookform/resolvers
@radix-ui/react-*
@reduxjs/toolkit
@tailwindcss/vite
@tanstack/react-table
class-variance-authority
clsx
date-fns
lucide-react
next-themes
react / react-dom
react-day-picker
react-hook-form
react-redux
react-router
sweetalert2
tailwind-merge
tailwindcss
zod
```

### Dev Dependencies

```bash
@vitejs/plugin-react
@eslint/js
eslint / eslint-plugin-react-refresh
typescript / typescript-eslint
@types/react / @types/node
tw-animate-css
vite
```

## 🏗️ Project Structure

```bash

src/
│
├── components/ # Reusable components (forms, modals, table)
├── pages/ # Page components for each route
├── redux/ # API setup and RTK slices
├── routes/ # react-router
├── utils/ # Utility functions (date formatters, etc.)
├── types/ # TypeScript interfaces & types
├── App.tsx
└── main.tsx
└── index.css

```