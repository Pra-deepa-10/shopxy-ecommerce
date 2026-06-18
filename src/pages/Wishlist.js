import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";

function Wishlist() {

  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();

  function removeWishlist(id) {setWishlistItems(prev => prev.filter(item => item.id !== id));}


  return (
    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <h2>No wishlist items yet</h2>
      ) : (

        <div className="wishlist-grid">

          {wishlistItems.map(item => (

            <div key={item.id} className="wishlist-card" onClick={() => navigate(`/product/${item.id}`)}>

              <img src={item.image} alt={item.title}/>

              <h3>{item.title}</h3>

              <p>₹{item.price}</p>

              <button onClick={(e) => {e.stopPropagation();
                removeWishlist(item.id);}}>Remove</button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;