import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './context/CartContext';
import {WishlistProvider} from './context/WishlistContext';
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <AuthProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </AuthProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);