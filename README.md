# Services Application

## Project Overview
This is a React-based web application for displaying and managing available services. Users can browse a list of services, search for specific services by title, and view detailed information about each service.

## Live URL
[Live Demo](https://assignment-11-2c226.web.app/)

## Purpose
The purpose of this application is to demonstrate a dynamic and interactive interface for showcasing services, allowing users to explore, search, and view detailed information about available options.

## Key Features
- **Dynamic Service List**: Fetches and displays a list of services from an API.
- **Search Functionality**: Allows users to search for services by title.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **Service Details Page**: Redirects users to a detailed view of each service when clicking the "See Details" button.
- **Animation**: Utilizes Framer Motion for smooth animations.

## Technologies Used
- **React**: For building the user interface.
- **React Router DOM**: For client-side routing.
- **Framer Motion**: For animations.
- **Tailwind CSS**: For styling the application.
- **Node.js and Express**: Backend API for fetching services.
- **MongoDB**: Database for storing service data.
- **Vercel**: Hosting platform for both client and server.

## NPM Packages Used
- `react`
- `react-router-dom`
- `framer-motion`
- `tailwindcss`
- `cors`
- `express`
- `dotenv`
- `mongodb`

## Installation and Setup
To run this project locally:

1. Clone the repository:
   ```bash
   https://github.com/programming-hero-web-course2/b10a11-client-side-Somaptiahmed
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of your server directory and add the following:
   ```env
   DB_USER=yourDatabaseUsername
   DB_PASS=yourDatabasePassword
   PORT=5000
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

6. Start the React development server:
   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `https://assignment-11-2c226.web.app/`.

## Folder Structure
```
project
├── public
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   ├── pages
│   │   ├── Services.jsx
│   └── App.jsx
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```


