import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  title,
  price,
  image,
  addToCart
}) 

{const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${id}`)}
    >
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹{price}</p>

      <button
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
