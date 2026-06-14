import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;