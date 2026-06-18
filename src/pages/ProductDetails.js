import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { toast } from 'react-toastify';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const product = products.find(
    (p) => p.id === Number(id)
  );

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id).slice(0, 3);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function addToCart() {
    setCartItems((prev) => {
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
      toast.success(`${product.title} added to cart`);
    });
  }

  return (
    <div className="product-details">
     
     <div className="product-image">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <img src={product.image} alt={product.title} /></div>
     
     <div className="product-info">
      <h1>{product.title}</h1>

      <p className="price">₹{product.price}</p>

      <p>{product.category}</p><span>Brand: {product.brand}</span>


      <p>{product.description}</p>
      <p className="in-stock">✅ In Stock ({product.stock} available)</p>

      <p>⭐ {product.rating}/5</p>
      <button onClick={addToCart}> Add to Cart</button></div>

    {relatedProducts.length > 0 && (
      <div className="related-products">

        <h2>Related Products</h2>

        <div className="related-grid">
        {relatedProducts.map(item => (

            <div key={item.id} className="related-card">
                <img src={item.image} alt={item.title}/>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
            </div>

            ))}    
        </div>

      </div> )}

</div> )};

export default ProductDetails;