import './Hero.css'

function Hero(props) {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          {props.title}
        </h1>

        <p>
          {props.subtitle}
        </p>

        <button>
          Shop Now
        </button>

      </div>

    </section>
  )
}

export default Hero