import './Hero.css'
import { useNavigate } from "react-router-dom";

function Hero(props) {
  const navigate = useNavigate(); 

  return (
    <section id="hero" className="hero">

      <div className="hero-content">

        <h1>
          {props.title}
        </h1>

        <p>
          {props.subtitle}
        </p>

        <button onClick={() => navigate("/products")}>Shop Now</button>

      </div>

    </section>
  )
}

export default Hero