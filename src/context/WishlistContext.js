import {createContext, useState, useEffect} from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState(() => {

      const savedWishlist = localStorage.getItem('wishlist');

      return savedWishlist ? JSON.parse(savedWishlist): [];

    });

  useEffect(() => {localStorage.setItem('wishlist', JSON.stringify(wishlistItems));}, [wishlistItems]);

  return (
    <WishlistContext.Provider value={{wishlistItems, setWishlistItems}}>{children}</WishlistContext.Provider>
  );
}

export default WishlistContext;