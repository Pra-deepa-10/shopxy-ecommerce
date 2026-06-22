# 🛒 ShopXY - Modern React Ecommerce Store

A fully responsive Ecommerce Web Application built with React.js, Firebase Authentication, Context API, and FakeStore API. Users can browse products, view detailed product information, manage a wishlist and shopping cart, and securely access protected routes.

## 🌐 Live Demo

🔗 https://shopxy-ecommerce-klmxti7xq-pradeepa-dev.vercel.app

---

## 🚀 Features

### 🏠 Home Page
- Hero Section
- Featured Products
- Search Functionality
- Product Filtering
- Product Sorting
- Contact Section

### 🛍️ Products
- Product Listing using FakeStore API
- Dynamic Product Details Page
- Related Products Suggestions
- Product Ratings & Reviews
- Product Category Display

### ❤️ Wishlist
- Add Products to Wishlist
- Remove Products from Wishlist
- Wishlist Count in Navbar
- Protected Route Access

### 🛒 Shopping Cart
- Add Products to Cart
- Increase Quantity
- Decrease Quantity
- Remove Products
- Dynamic Total Calculation
- Cart Count in Navbar
- Protected Route Access

### 🔐 Authentication
- Firebase Authentication
- User Registration
- User Login
- Logout Functionality
- Protected Routes for Cart & Wishlist

### 📱 Responsive Design
- Mobile-Friendly Layout
- Responsive Navbar
- Responsive Product Cards
- Responsive Cart & Wishlist Pages
- Modern Dark Theme UI

### 🔔 Notifications
- React Toastify Integration
- Cart Notifications
- Wishlist Notifications
- Authentication Feedback

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Context API
- CSS3
- React Icons

### Authentication
- Firebase Authentication

### API
- FakeStore API

### Notifications
- React Toastify

### Deployment
- Vercel

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── ProductSection.js
│   └── ProtectedRoute.js
│
├── pages
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetails.js
│   ├── Cart.js
│   ├── Wishlist.js
│   ├── Login.js
│   ├── Signup.js
│   └── Contact.js
│
├── context
│   ├── CartContext.js
│   ├── WishlistContext.js
│   └── AuthContext.js
│
├── firebase
│   └── firebase.js
│
├── App.js
└── index.js
```

---

## ✨ Key Functionalities

### Product Search

- Search products instantly by name.
- Real-time filtering while typing.

### Product Filtering

- Filter products by category.
- Dynamic category support.

### Product Sorting

- Price: Low → High
- Price: High → Low

### Dynamic Routing

Implemented using React Router:

```text
/
 /products
 /product/:id
 /cart
 /wishlist
 /login
 /signup
 /contact
```

---

## 🔒 Authentication Flow

- Create Account
- Login
- Logout
- Protected Cart Access
- Protected Wishlist Access

Powered by Firebase Authentication.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Pra-deepa-10/shopxy-ecommerce.git
```

Navigate into project folder:

```bash
cd shopxy-ecommerce
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

---

## 📸 Screenshots

### Home Page

Add screenshot here

### Products Page

Add screenshot here

### Product Details Page

Add screenshot here

### Cart Page

Add screenshot here

### Wishlist Page

Add screenshot here

### Login Page

Add screenshot here

---

## 🎯 What I Learned

This project helped me strengthen my understanding of:

- React Components
- Props
- State Management
- Context API
- React Router
- Firebase Authentication
- API Integration
- Protected Routes
- Responsive Design
- Reusable Components
- Ecommerce Application Architecture

---

## 👨‍💻 Author

### Pradeepa S

Built as part of my React learning journey and frontend portfolio development.

---

⭐ If you like this project, consider giving it a star.
