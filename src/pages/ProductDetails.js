import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
  async function fetchProduct() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  fetchProduct();
}, [id]);

useEffect(() => {
  if (!product?.category) return;

  async function fetchRelated() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );

      const data = await response.json();

      setRelatedProducts(
        data.filter(item => item.id !== product.id).slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  }

  fetchRelated();
}, [product]);



if (loading) {
  return <h2>Loading...</h2>;
}

if (!product) {
  return <h2>Product not found</h2>;
}

  function addToCart() {

  const exists = cartItems.find(item => item.id === product.id);

  if (exists) {
    setCartItems(prev => prev.map(item =>item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    toast.success(`Cart quantity updated`);

  } else {

    setCartItems(prev => [...prev,{...product, quantity: 1}]);
    toast.success(`Item added to cart`);
  }
}

  return (
    <div className="product-details">
     <div className="product-box">
        <div className="product-image">
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <img src={product.image} alt={product.title} /></div>
        
        <div className="product-info">
          <h1>{product.title}</h1>

          <p className="price"> $ {(product.price)}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p className="in-stock">✅ In Stock</p>
          <p>⭐ {product.rating?.rate}/5 ({product.rating?.count} reviews)</p>
          <button onClick={addToCart}> Add to Cart</button></div>
     </div>
    {relatedProducts.length > 0 && (
      <div className="related-products">

        <h2>Related Products</h2>

        <div className="related-grid">
        {relatedProducts.map(item => (

            <div key={item.id} className="related-card" onClick={() => navigate(`/product/${item.id}`)}>
                <img src={item.image} alt={item.title} onError={(e) => {
    e.target.src = "/placeholder.png";
  }}/>
                <h4>{item.title}</h4>
                <p>$ {(item.price)}</p>
            </div>

            ))}    
        </div>

      </div> )}

</div> )};

export default ProductDetails;