<div align="center">

# 🌐 VeritasSphere

### *Where Ideas Meet the World*

**A full-stack blogging platform built with React 19, Redux Toolkit, and Appwrite BaaS — featuring rich-text authoring, secure authentication, and a clean, responsive UI.**

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-veritas--sphere.vercel.app-6366f1?style=for-the-badge)](https://megablog-nu.vercel.app/login)
[![GitHub Repo](https://img.shields.io/badge/GitHub-devu0508%2FVeritasSphere-181717?style=for-the-badge&logo=github)](https://github.com/devu0508/VeritasSphere)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🔍 Overview

**VeritasSphere** is a production-ready blogging web application that empowers users to publish, edit, and manage blog posts through a rich text interface. It demonstrates real-world skills in frontend architecture, state management, backend-as-a-service integration, and secure user authentication — all deployed on Vercel.

> Built to showcase proficiency in the modern React ecosystem with a focus on clean code, component reusability, and scalable state management.

---

## 🚀 Live Demo

🌐 **[https://megablog-nu.vercel.app/login](https://megablog-nu.vercel.app/login)**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Secure Auth** | User registration, login, and session management via Appwrite |
| 📝 **Rich Text Editor** | TinyMCE-powered WYSIWYG editor for full blog composition |
| 🗂️ **Post Management** | Create, read, update, and delete blog posts |
| 🌍 **Public / Private Posts** | Control post visibility — publish or keep as draft |
| 🔄 **Global State** | Redux Toolkit for predictable, scalable state management |
| 📱 **Responsive UI** | Fully responsive layout with Tailwind CSS v4 |
| ⚡ **Fast Loading** | Vite-powered build with HMR for sub-second dev refresh |
| 🧹 **Form Validation** | React Hook Form for clean, performant form handling |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — Latest concurrent features and modern hooks
- **Redux Toolkit** — Centralized state management with slices
- **React Router DOM v7** — Client-side routing and navigation
- **Tailwind CSS v4** — Utility-first, responsive styling
- **TinyMCE / tinymce-react** — Rich text editing integration
- **React Hook Form** — Lightweight form state & validation
- **html-react-parser** — Safe rendering of HTML blog content

### Backend / Infrastructure
- **Appwrite BaaS** — Authentication, database, and file storage
- **Vite 7** — Ultra-fast build tool and dev server
- **Vercel** — Deployment and hosting (CI/CD via GitHub)

---

## 🏗️ Architecture

```
VeritasSphere
├── Presentation Layer     → React components, TinyMCE editor, Tailwind UI
├── State Management       → Redux Toolkit (auth slice, post slice)
├── Routing                → React Router DOM v7 (protected routes)
├── Service Layer          → Appwrite SDK abstraction (auth, db, storage)
└── Backend (BaaS)         → Appwrite — handles users, documents, files
```

**Key design decisions:**
- **Service abstraction**: Appwrite SDK calls are wrapped in a dedicated service layer, keeping components decoupled from backend details.
- **Protected routes**: Unauthenticated users are redirected away from dashboard/editor pages using Redux auth state.
- **Optimistic UI**: Post list updates instantly in the Redux store before backend confirmation.

---

## 🚦 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- An [Appwrite](https://appwrite.io) project (Cloud or self-hosted)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/devu0508/VeritasSphere.git
cd VeritasSphere

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.sample .env
# → Fill in your Appwrite credentials (see below)

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env` file at the project root (refer to `.env.sample`):

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

> ⚠️ Never commit `.env` to version control. It is already listed in `.gitignore`.

---

## 📁 Project Structure

```
VeritasSphere/
├── public/                  # Static assets
├── src/
│   ├── appwrite/            # Appwrite service abstraction (auth, db, storage)
│   ├── components/          # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PostCard/
│   │   ├── RTE/             # TinyMCE rich text editor wrapper
│   │   └── ...
│   ├── pages/               # Route-level page components
│   ├── store/               # Redux store, slices (auth, post)
│   ├── App.jsx              # App root, routing setup
│   └── main.jsx             # React entry point
├── .env.sample              # Environment variable template
├── index.html
├── vite.config.js
└── package.json
```

## 🗺️ Roadmap

- [ ] Comment system on blog posts
- [ ] Author profile pages
- [ ] Post categories and tags
- [ ] Search and filter functionality
- [ ] Dark mode toggle
- [ ] Markdown support alongside TinyMCE

---

## 👨‍💻 Author

**Divyansh** — Fresher Software Engineer | React · Node.js · Appwrite · Redux

[![GitHub](https://img.shields.io/badge/GitHub-devu0508-181717?style=flat-square&logo=github)](https://github.com/devu0508)

---

<div align="center">

⭐ **If you found this project useful, consider giving it a star!**

</div>
