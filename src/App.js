import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
        

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<ProductSection />} />

        <Route path="/product/:id" element={<ProductDetails />}/>

        <Route path="/wishlist" element={<Wishlist />}/>

      </Routes>
      
      <ToastContainer position="top-right" autoClose={2000}/>

    </>
  );
}

export default App;