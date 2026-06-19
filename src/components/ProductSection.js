  import ProductCard from './ProductCard'
  import './ProductSection.css'
  import { useState, useContext, useEffect} from 'react';
  import CartContext from '../context/CartContext';
  import { toast } from 'react-toastify';


  function ProductSection(){

      const [searchTerm, setSearchTerm] = useState('');
      const [sortBy, setSortBy] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('All');
      const [products, setProducts] = useState([]);

      const { cartItems, setCartItems } = useContext(CartContext);

    useEffect(() => {
        async function fetchProducts() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  fetchProducts();
}, []);


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
      toast.success(`Cart quantity updated`);
    } 
    else {
      setCartItems(prev => [...prev, {...product, quantity: 1}]);
      toast.success(`Item added to cart`);
    }

  }


    return(
      <section id="products" className= "products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {sortedProducts.slice(0, 6).map(product => (<ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price * 83}
            image={product.image}
            addToCart={() => addToCart(product)}/>))}
        </div>
      </section>
      )

    
  }
    
  export default ProductSection
