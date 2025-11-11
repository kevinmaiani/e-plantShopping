# E-Plant Shopping 🌱

A modern e-commerce plant shopping application built with React, Redux Toolkit, and Vite. Browse through various categories of plants, add them to your cart, and manage your selections with a responsive interface.

## 🌐 Live Demo

Visit the website: [https://kevinmaiani.github.io/e-plantShopping/](https://kevinmaiani.github.io/e-plantShopping/)

## ✨ Features

- **Product Categories**: Browse plants organized by categories (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- **Shopping Cart**: Add items to cart with real-time quantity updates
- **Redux State Management**: Centralized state management using Redux Toolkit
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: 
  - Increment/decrement item quantities
  - Remove items from cart
  - Dynamic cart total calculation
  - Visual feedback for added items (button state changes)
  - Cart badge showing total item count

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/kevinmaiani/e-plantShopping.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd e-plantShopping
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   The application will start running on `http://localhost:5173`

6. **Stop the server**
   
   Press `Ctrl + C` in the terminal

> **Note**: After making code changes, the Vite dev server will automatically reload. If using `npm run preview`, you must restart the server to see changes.

## 🛠️ Built With

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling

## 📦 Available Scripts

- `npm run dev` - Starts development server on port 5173
- `npm run build` - Builds the app for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploys to GitHub Pages

## 🚢 Deployment

To deploy your changes to GitHub Pages:

1. **Ensure all dependencies are installed**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

This command will:
- Build the production version of your app
- Push the built files to the `gh-pages` branch
- Update the live website automatically

A success message will appear in the terminal when deployment is complete.

## 📁 Project Structure

```
e-plantShopping/
├── src/
│   ├── App.jsx              # Main application component
│   ├── ProductList.jsx      # Product listing and cart display
│   ├── CartItem.jsx         # Shopping cart component
│   ├── CartSlice.jsx        # Redux cart state management
│   ├── store.js             # Redux store configuration
│   └── *.css                # Component styles
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies and scripts
```

## 🎯 Key Components

### Redux Store (CartSlice)
Manages cart state with three main actions:
- `addItem` - Adds new item or increments quantity
- `removeItem` - Removes item from cart
- `updateQuantity` - Updates item quantity

### ProductList Component
- Displays categorized plant products
- Handles adding items to cart
- Shows cart badge with total quantity
- Toggles between product view and cart view

### CartItem Component
- Displays cart items with quantities
- Increment/decrement controls
- Remove item functionality
- Total cost calculation

## 📧 Contact

If you have any questions, please feel free to reach out via email: kevin.maiani@gmail.com

---

⬆️ [Back to top](#e-plant-shopping-)
