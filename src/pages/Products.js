import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import '../components/ProductSection.css';
import { toast } from 'react-toastify';

function Products() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  

  function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(prev => prev.map(item =>
          item.id === product.id ? {...item, quantity: (item.quantity || 1) + 1} : item));
          toast.success(`Cart quantity updated`);
          
    } else {
      setCartItems(prev => [...prev,{...product, quantity: 1}]);
      toast.success(`Item added to cart`);
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => setProducts(data));}, []);

  const filteredProducts = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory; });

  const sortedProducts = [...filteredProducts];
        if (sortBy === "low") {sortedProducts.sort((a, b) => a.price - b.price);}
        if (sortBy === "high") {sortedProducts.sort((a, b) => b.price - a.price);}

  return (
    <div className="products-page">
      <h2 className="section-title">Explore Products</h2>
        <div className="search-container"><input type="text" placeholder="Search products..." value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}/></div>

        <div className="category-filter">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("electronics")}>Electronics</button>
          <button onClick={() => setSelectedCategory("jewelery")}>Jewelry</button>
          <button onClick={() => setSelectedCategory("men's clothing")}>Men's Collection</button>
          <button onClick={() => setSelectedCategory("women's clothing")}>Women's Collection</button>
        </div>

        <div className="sort-container">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort Products</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
                        

      <div className="products-grid">
        {sortedProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            addToCart={() => addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Products;