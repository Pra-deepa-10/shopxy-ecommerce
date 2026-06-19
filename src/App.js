import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Wishlist from './pages/Wishlist';
import { Routes, Route } from "react-router-dom";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
        

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>}/>    

        <Route path="/wishlist" element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>}/>

        <Route path="/product/:id" element={<ProductDetails />}/>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="*" element={<NotFound />} />
        

      </Routes>

      <ToastContainer position="top-right" autoClose={1500}/>

    </>
  );
}

export default App;