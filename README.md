# React Multi-Page Website

A responsive multi-page website built with **React** and **Vite**, featuring client-side routing, dynamic product pages, form validation, and an interactive dashboard with statistics and charts.

## Features

- **Home Page:** Landing page of the website.
- **About Page:** Information about the website.
- **Products Page:** Displays a list of available products.
- **Product Details:** Dynamic routing to display individual product information.
- **Login Page:** Login form with input validation and error handling.
- **Dashboard:**
  - Overview with statistical cards.
  - Recent activities section.
  - Sales chart.
  - Users chart.
  - Profile page.
  - Settings page.
  - Nested routing with a shared dashboard layout.
- **404 Page:** Custom page for invalid routes.
- **Responsive Navigation:** Client-side navigation between application pages using React Router.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router
- Tailwind CSS
- Recharts
- Lucide React
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
│   ├── Navbar.jsx
│   ├── StatCard.jsx
│   ├── RecentActivities.jsx
│   ├── SalesChart.jsx
│   └── UsersChart.jsx
├── data/
│   ├── products.js
│   ├── users.js
│   ├── activities.js
│   ├── salesData.js
│   └── usersData.js
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