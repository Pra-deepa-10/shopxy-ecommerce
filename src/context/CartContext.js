import {createContext, useState, useEffect} from 'react';
const CartContext = createContext();


export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart? JSON.parse(savedCart): []; 
  });

  useEffect(() => {localStorage.setItem('cart',JSON.stringify(cartItems));}, [cartItems]);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>{children}</CartContext.Provider>);
    
}

export default CartContext;