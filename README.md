# React Multi-Page Website

A multi-page website built with **React** and **Vite**, featuring client-side navigation, dynamic product pages, a login form, and a dashboard with nested routes.

## Features

- **Home Page:** Landing page of the website.
- **About Page:** Information about the website.
- **Products Page:** Displays a list of available products.
- **Product Details:** Dynamic routing to display individual product information.
- **Login Page:** Login form with input validation and error handling.
- **Dashboard:** A dashboard with nested routes:
  - Overview
  - Profile
  - Settings
- **404 Page:** Custom page for invalid routes.
- **Responsive Navigation:** Navigation between pages without full page reloads.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router
- Tailwind CSS
- HTML5

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aminzouaghi/react-multi-page-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-multi-page-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Project Structure

```text
src/
├── components/
│   └── Navbar.jsx
├── data/
│   ├── products.js
│   └── users.js
├── pages/
│   ├── dashboard/
│   │   ├── DashboardLayout.jsx
│   │   ├── DashboardHome.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   ├── About.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── ProductDetails.jsx
│   └── Products.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Important Note

The login functionality is for demonstration and learning purposes only. It does not use a backend authentication system.

## Author

[Mohammed Amin Zouaghi](https://github.com/aminzouaghi)
