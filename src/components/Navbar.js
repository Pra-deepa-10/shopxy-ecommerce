import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'       //This gives us a ready-made icon component.

function Navbar({cartItems}) {
  return (
    <nav className="navbar">

      <Link to='/' className="logo">
        ShopXY
      </Link>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <div className="nav-icons">

        <Link to="/cart" className="cart-container">

            <FaShoppingCart className="cart-icon"/>

            <span className="cart-badge">{cartItems.length}</span>
</Link>     

        <button className="login-btn">
          Login
        </button>
      </div>

    </nav>
  )
}

export default Navbar