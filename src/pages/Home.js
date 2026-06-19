import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import '../App.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <section id="home"><Hero title="Discover Premium Products" subtitle="Shop the trending gadgets, clothings and accessories."/></section>
      <section id="products"><ProductSection /></section>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>📧 support@shopxy.com</p>
        <p>📞 +91 9876543210</p>
      </section>
      <Footer />
    </>
  );
}

export default Home;