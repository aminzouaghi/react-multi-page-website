# React Multi-Page Website

A responsive multi-page website built with **React** and **Vite**, featuring client-side routing, dynamic product pages, form validation, user authentication context, protected dashboard routes, and an interactive dashboard with statistics and charts.

## Features

- **Home Page:** Landing page of the website.
- **About Page:** Information about the website.
- **Products Page:** Displays a list of available products.
- **Product Details:** Dynamic routing to display individual product information.
- **Login Page:**
  - Login form with input validation and error handling.
  - User authentication using React Context.
  - Redirects users to the dashboard after successful login.
- **Dashboard:**
  - Overview with statistical cards.
  - Recent activities section.
  - Sales chart.
  - Users chart.
  - Profile page with personal information.
  - Edit profile functionality with form validation.
  - Logout functionality.
  - Settings page.
  - Nested routing with a shared dashboard layout.
- **Protected Routes:** Prevents unauthenticated users from accessing dashboard pages and redirects them to the login page.
- **Authentication Context:** Uses React Context API to share user authentication state across components.
- **404 Page:** Custom page for invalid routes.
- **Responsive Navigation:** Client-side navigation between application pages using React Router.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- React Router
- React Context API
- React Hooks (`useState`, `useEffect`, `useContext`)
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
│   ├── ProtectedRoute.jsx
│   ├── RecentActivities.jsx
│   ├── SalesChart.jsx
│   ├── StatCard.jsx
│   └── UsersChart.jsx
├── context/
│   └── AuthContext.jsx
├── data/
│   ├── activities.js
│   ├── products.js
│   ├── salesData.js
│   ├── users.js
│   └── usersData.js
├── pages/
│   ├── dashboard/
│   │   ├── DashboardHome.jsx
│   │   ├── DashboardLayout.jsx
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

The authentication functionality is implemented for demonstration and learning purposes only. It uses React Context API to manage the user's authentication state but does not include a backend authentication system.

Protected routes provide client-side access control only. A real-world application requires backend authentication and authorization for proper security.

## Author

[ Mohammed Amin Zouaghi ](https://github.com/aminzouaghi)
