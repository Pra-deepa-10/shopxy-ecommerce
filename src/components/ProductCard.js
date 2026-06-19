import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import WishlistContext from '../context/WishlistContext';
import { toast } from 'react-toastify';

function ProductCard({id, title, price, image, addToCart}){
  const navigate = useNavigate();
  const {wishlistItems, setWishlistItems} = useContext(WishlistContext);
  const isWishlisted = wishlistItems.some(item => item.id === id);

  function toggleWishlist(e) {
  e.stopPropagation();
  if (isWishlisted) {
    setWishlistItems(prev => prev.filter( item => item.id !== id));
    toast.info(`Item removed from wishlist`); 
  } 
  else {
    setWishlistItems(prev => [...prev,{
        id,
        title,
        price,
        image
      }
    ]);
    toast.success(`Item added to wishlist`);

  }
}
  

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <button className="wishlist-btn" onClick={toggleWishlist}>{isWishlisted ? '❤️' : '🤍'}</button>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹{price}</p>

      <button className="add-cart-btn"
        onClick={(e) => {
          e.stopPropagation();
          addToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
