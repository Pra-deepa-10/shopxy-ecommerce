import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem('cart');
        return savedCart
          ? JSON.parse(savedCart)
          : [];
  });

  useEffect(() => {localStorage.setItem('cart', JSON.stringify(cartItems));}, [cartItems]);
        

  return (
    <>
      <Navbar cartItems={cartItems} />

      <Routes>

        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems}/>} />

        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />

        <Route path="/" element={<ProductSection />} />

        <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>

      </Routes>
    </>
  );
}

export default App;