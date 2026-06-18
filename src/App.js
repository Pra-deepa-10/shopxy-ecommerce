import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Wishlist from './pages/Wishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";

import Signup from "./pages/Signup";

function App() {
        

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>}/>        
        <Route path="/" element={<ProductSection />} />
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/wishlist" element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>

      <ToastContainer position="top-right" autoClose={1500}/>

    </>
  );
}

export default App;