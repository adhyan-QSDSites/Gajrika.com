import { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "//images/hero/hero-1.png",
  "//images/hero/hero-2.png",
  "//images/hero/hero-3.png",
  "//images/hero/hero-4.png",
  "//images/hero/hero-5.png"
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // INFINITE LOOP RESET
  const handleTransitionEnd = (event) => {
    if (
      event.propertyName === "transform" &&
      currentSlide === images.length
    ) {
      setTransitionEnabled(false);
      setCurrentSlide(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  return (
    <section className="gajrika-hero" id="home">

      {/* FULL BACKGROUND IMAGE SLIDER */}

      <div className="hero-background-slider">

        <div
          className={`hero-background-track ${
            transitionEnabled ? "slide-transition" : ""
          }`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
          onTransitionEnd={handleTransitionEnd}
        >

          {images.map((image, index) => (
            <div className="hero-background-slide" key={image}>
              <img
                src={image}
                alt={`Gajrika beauty manufacturing ${index + 1}`}
              />
            </div>
          ))}

          {/* FIRST IMAGE DUPLICATE FOR INFINITE LOOP */}

          <div className="hero-background-slide">
            <img src={images[0]} alt="Gajrika beauty manufacturing" />
          </div>

        </div>

      </div>
      {/* BACKGROUND OVERLAY */}
      <div className="hero-background-overlay"></div>
      {/* LEFT CONTENT */}
      <div className="gajrika-hero-content">
        <div className="gajrika-hero-label">
          <span className="hero-label-line"></span>
          THE ART OF BEAUTY MANUFACTURING
        </div>

        <h1>
          BEAUTY
          <br />
          <span>BEGINS</span> WITH
          <br />
          POSSIBILITY<span className="hero-period">.</span>
        </h1>

        <div className="gajrika-hero-bottom">

          <p>
            We transform beauty visions into exceptional products.
            From innovative formulations to premium manufacturing,
            we help ambitious brands create their identity.
          </p>

          <a href="#contact" className="gajrika-hero-button">
            <span>CREATE YOUR BRAND</span>
            <span className="hero-button-arrow">↗</span>
          </a>

        </div>

        <div className="gajrika-hero-scroll">
          <span></span>
          SCROLL TO DISCOVER
        </div>

      </div>

      {/* SLIDE COUNTER */}

      <div className="hero-background-counter">
        {String((currentSlide % images.length) + 1).padStart(2, "0")}
        {" — "}
        {String(images.length).padStart(2, "0")}
      </div>

    </section>
  );
}

export default Hero;
