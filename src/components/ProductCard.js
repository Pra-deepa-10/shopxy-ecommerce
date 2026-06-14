import './ProductCard.css';

function ProductCard(props) {
  
 function handleClick() {
  props.addToCart();
}

   

  return (
    <div className="product-card">

      <img
        src={props.image}
        alt={props.title}
      />

      <h3>{props.title}</h3>

      <p>₹{props.price}</p>

      <button onClick={handleClick}> Add to Cart </button>

    </div>
  );
}

export default ProductCard;