# 📚 Study Alliance

## Overview
Study Alliance is a full-featured educational platform with distinct user roles—Students, Tutors, and Admins. It allows students to create and manage notes, book sessions (paid or free), and learn from tutors who host sessions and provide study materials. Admins oversee session approval and user role management.

### Admin username: Kalpana Khan
### Admin Email: kalpanakhan@gmail.com

### Live Site URL: https://study-alliance-83c26.web.app

## Technologies Used 

This project is built using the following technologies:

- **[React.js](https://react.dev/)** – A JavaScript library for building interactive user interfaces.  
- **JavaScript (ES6+)** – The core programming language used for development.  
- **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for fast and responsive UI design.  
- **[Firebase](https://firebase.google.com/)** – Used for authentication, real-time database, and cloud storage.  
- **[MongoDB](https://www.mongodb.com/)** – A NoSQL database for storing and managing data efficiently.  
- **[Node.js](https://nodejs.org/)** – A runtime environment for executing JavaScript code on the server.  
- **[JWT (JSON Web Token)](https://jwt.io/)** – Used for authentication and secure user sessions.

  To set up and run the project, check the [Installation](#installation) section.

## Core Features

- Three user roles: Student, Tutor, and Admin.
- Student dashboard:
  - Create, manage, and delete notes.
  - Book both paid and unpaid sessions.
- Tutor dashboard:
  - Create and offer educational sessions.
  - Upload study material for sessions.
- Admin controls:
  - Approve or reject session submissions.
  - Modify user roles.
- Session types:
  - Sessions can be either paid or unpaid.
  - Stripe integration for processing payments on paid sessions.
- JWT-based authentication for secure access control.
- Firebase backend for real-time updates and data storage.
- Responsive UI with interactive elements and animations (via Lottie).
- Tooltip, date-picker, and alert support for an intuitive UX.

## Screenshot 
Home Page

![App Screenshot](https://github.com/Sadia0920/study-alliance/blob/main/pic1.png)

Login Page

![App Screenshot](https://github.com/Sadia0920/study-alliance/blob/main/pic2.png)

Dashboard Page

![App Screenshot](https://github.com/Sadia0920/study-alliance/blob/main/pic3.png)

Payment Page

![App Screenshot](https://github.com/Sadia0920/study-alliance/blob/main/pic4.png)

## Dependencies

This project relies on the following npm packages:

| Package | Version | Description |
|---------|---------|-------------|
| [@stripe/react-stripe-js](https://github.com/stripe/react-stripe-js) | ^3.1.1 | React components for Stripe.js and Elements for payment integration |
| [@stripe/stripe-js](https://github.com/stripe/stripe-js) | ^5.5.0 | Stripe.js library for secure payment handling in the browser |
| [@tanstack/react-query](https://tanstack.com/query/latest) | ^5.64.1 | Powerful data-fetching and caching library for React |
| [axios](https://github.com/axios/axios) | ^1.7.9 | Promise-based HTTP client for making API requests |
| [firebase](https://firebase.google.com/docs/web/setup) | ^11.1.0 | Google Firebase SDK for authentication, database, and storage |
| [localforage](https://localforage.github.io/localForage/) | ^1.10.0 | Library for offline storage using IndexedDB, WebSQL, or localStorage |
| [lottie-react](https://github.com/Gamote/lottie-react) | ^2.4.0 | React component for rendering Lottie animations |
| [match-sorter](https://github.com/kentcdodds/match-sorter) | ^8.0.0 | Utility for ranking and sorting items based on search terms |
| [react](https://react.dev/) | ^18.3.1 | JavaScript library for building user interfaces |
| [react-datepicker](https://reactdatepicker.com/) | ^7.6.0 | A flexible and customizable date picker component for React |
| [react-dom](https://react.dev/) | ^18.3.1 | React package for DOM rendering |
| [react-helmet](https://github.com/nfl/react-helmet) | ^6.1.0 | Manage changes to document head, like title and meta tags |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | ^2.0.5 | Manage document head meta tags in React asynchronously |
| [react-hook-form](https://react-hook-form.com/) | ^7.54.2 | Performant, flexible form handling for React |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.4.0 | A library for using popular icon packs in React |
| [react-router-dom](https://reactrouter.com/) | ^7.1.1 | Declarative routing for React applications |
| [react-tooltip](https://react-tooltip.com/) | ^5.28.0 | A customizable tooltip component for React |
| [sort-by](https://www.npmjs.com/package/sort-by) | ^1.2.0 | Utility for sorting arrays of objects by property values |
| [sweetalert2](https://sweetalert2.github.io/) | ^11.15.10 | A modern replacement for JavaScript’s alert, confirm, and prompt dialogs |

To install these dependencies, run:

```sh
npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sadia0920/study-alliance.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm run dev
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=your_firebase_api_key`
`VITE_AUTH_DOMAIN=your_firebase_auth_domain`
`VITE_PROJECT_ID=your_firebase_project_id`
`VITE_STORAGE_BUCKET=your_firebase_storage_bucket`
`VITE_MESSAGING_SENDER_ID=your_firebase_sender_id`
`VITE_APP_ID=your_firebase_app_id`
`VITE_SERVER_URL=your_backend_server_url`
