# 🎫 Ticket Management System (Full-Stack)

A comprehensive, end-to-end solution designed to bridge the gap between customer queries and technical support resolution. 

## 🏗️ System Architecture
The application follows a client-server architecture to ensure a clear separation of concerns and high maintainability.



## ✨ Key Features
- **Dual Dashboard:** Separate interfaces for Customers (to submit/track) and Agents (to assign/resolve).
- **Real-time Status Tracking:** Dynamic UI updates reflecting ticket lifecycle (Pending -> In Progress -> Resolved).
- **RESTful API Integration:** Custom-built endpoints for reliable data flow, thoroughly tested with Postman.
- **Hybrid Data Storage:** Utilized SQL for structured user data and a MongoDB prototype for flexible ticket metadata.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express, PHP
- **Database:** MySQL, MongoDB
- **Testing:** Postman

## 🚀 Impact & Optimization
- **Performance:** Optimized React components to reduce re-renders, resulting in a faster, smoother UI experience.
- **Scalability:** Designed the backend logic to handle concurrent ticket submissions without data collisions.
- **Responsiveness:** Used a mobile-first approach with Tailwind CSS to ensure accessibility across all devices.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
