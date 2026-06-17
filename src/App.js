import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./pages/ProductDetails";

function App() {
        

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<ProductSection />} />

        <Route path="/product/:id" element={<ProductDetails />}/>

      </Routes>
    </>
  );
}

export default App;