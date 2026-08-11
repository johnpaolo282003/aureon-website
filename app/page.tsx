export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="logo"
        />

        <p className="eyebrow">AUREON</p>

        <h1>Precision. Quality. Aureon.</h1>

        <p className="hero-text">
          Discover Aureon — a premium brand built around
          precision, quality, and excellence.
        </p>

        <div className="hero-actions">
          <a href="#products" className="primary-button">
            Explore Collection
          </a>

          <a href="#contact" className="secondary-button">
            Contact Us
          </a>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="section-heading">
          <span>THE AUREON COLLECTION</span>

          <h2>Precision in Every Detail</h2>

          <p>
            Explore the Aureon collection and discover our
            commitment to premium presentation and quality.
          </p>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-image">
              <img
                src="/Tirzera.png"
                alt="Tirzera"
              />
            </div>

            <h3>Tirzera</h3>

            <p>
              Premium Aureon collection.
            </p>
          </article>

          <article className="product-card">
            <div className="product-image">
              <img
                src="/Retera.png"
                alt="Retera"
              />
            </div>

            <h3>Retera</h3>

            <p>
              Premium Aureon collection.
            </p>
          </article>

          <article className="product-card">
            <div className="product-image">
              <img
                src="/Aura.png"
                alt="Aurèa"
              />
            </div>

            <h3>Aurèa</h3>

            <p>
              Premium Aureon collection.
            </p>
          </article>
        </div>
      </section>

      <section className="standards-section">
        <div className="section-heading">
          <span>THE AUREON STANDARD</span>

          <h2>Designed With Purpose</h2>

          <p>
            From presentation to experience, Aureon is built
            around a refined and intentional approach.
          </p>
        </div>

        <div className="standards-grid">
          <article className="standard-card">
            <h3>Precision</h3>

            <p>
              Every detail is carefully considered to create
              a consistent premium experience.
            </p>
          </article>

          <article className="standard-card">
            <h3>Quality</h3>

            <p>
              We believe excellence begins with attention to
              detail and uncompromising standards.
            </p>
          </article>

          <article className="standard-card">
            <h3>Excellence</h3>

            <p>
              Aureon represents a modern approach to premium
              presentation and brand experience.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <span>ABOUT AUREON</span>

          <h2>Built Around a Refined Experience</h2>

          <p>
            Aureon is a modern premium brand focused on
            thoughtful presentation, consistency, and
            attention to detail.
          </p>

          <p>
            From our visual identity to every element of the
            collection, our approach is intentional,
            sophisticated, and unmistakably Aureon.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="contact-logo"
        />

        <span>CONNECT WITH AUREON</span>

        <h2>We'd Love to Hear From You</h2>

        <p>
          Have a question or want to learn more about Aureon?
          Get in touch with our team.
        </p>

        <a
          href="mailto:"
          className="primary-button"
        >
          Contact Aureon
        </a>
      </section>

      <footer className="footer">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="footer-logo"
        />

        <div className="footer-links">
          <a href="#products">Collection</a>

          <a href="#contact">Contact</a>
        </div>

        <p>
          © {new Date().getFullYear()} Aureon. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
