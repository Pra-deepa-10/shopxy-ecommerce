import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';

function Home({ cartItems, setCartItems }) {
  return (
    <>
      <Hero
        title="NEXUS TECH STORE"
        subtitle="Premium gadgets and accessories for modern creators"
      />

      <ProductSection
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default Home;