import ProductCard from './ProductCard'
import './ProductSection.css'
import products from '../data/products'
import { useState } from 'react';


function ProductSection({cartItems, setCartItems}){

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');


const filteredProducts = products.filter(product => {

  const matchesSearch =
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === 'All' ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedProducts = [...filteredProducts];

if (sortBy === 'low') {
  sortedProducts.sort(
    (a, b) => a.price - b.price
  );
}

if (sortBy === 'high') {
  sortedProducts.sort(
    (a, b) => b.price - a.price
  );
}

function addToCart(product) {
  const existingItem = cartItems.find(
    item => item.id === product.id
  );

  if (existingItem) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === product.id ?{...item,quantity: item.quantity + 1}: item )
    );
} 
  else {
    setCartItems(prev => [
      ...prev,
      {
        ...product,
        quantity: 1
      }
    ]);
  }

}


    return(
        <section className= "products">
            <h2>Featured Products</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="category-filter">
                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('Laptop')}>Laptop</button>
                <button onClick={() => setSelectedCategory('Wearable')}>Wearable</button>
                <button onClick={() => setSelectedCategory('Audio')}>Audio</button>
                <button onClick={() => setSelectedCategory('Accessories')}>Accessories</button>
                <button onClick={() => setSelectedCategory('Monitor')}>Monitor</button>
            </div>
            <div className="sort-container">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sort Products</option>
                    <option value="low">Price: Low → High</option>
                    <option value="high">Price: High → Low</option>
                </select>
            </div>
            <div className="products-grid">
                
                {sortedProducts.map(product => (
                    <ProductCard
  key={product.id}
  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
  addToCart={() => addToCart(product)}
/>)
                )}
            </div>
        </section>

    )

}

export default ProductSection