```tsx
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="logo"
        />

        <h1>Precision. Quality. Aureon.</h1>

        <p>
          Discover Aureon — a premium brand built around
          precision, quality, and excellence.
        </p>

        <div className="hero-actions">
          <a href="#products" className="primary-button">
            Explore Aureon
          </a>

          <a href="#contact" className="secondary-button">
            Contact Us
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
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
          {/* TIRZERA */}
          <div className="product-card">
            <img
              src="/Tirzera.png"
              alt="Tirzera"
            />

            <h3>Tirzera</h3>

            <p>
              Premium Aureon collection.
            </p>
          </div>

          {/* RETERA */}
          <div className="product-card">
            <img
              src="/Retera.png"
              alt="Retera"
            />

            <h3>Retera</h3>

            <p>
              Premium Aureon collection.
            </p>
          </div>

          {/* AURÈA */}
          <div className="product-card">
            <img
              src="/Aura.png"
              alt="Aurèa"
            />

            <h3>Aurèa</h3>

            <p>
              Premium Aureon collection.
            </p>
          </div>
        </div>
      </section>

      {/* AUREON STANDARD */}
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
          <div className="standard-card">
            <h3>Precision</h3>

            <p>
              Every detail is carefully considered to create
              a consistent premium experience.
            </p>
          </div>

          <div className="standard-card">
            <h3>Quality</h3>

            <p>
              We believe excellence begins with attention to
              detail and uncompromising standards.
            </p>
          </div>

          <div className="standard-card">
            <h3>Excellence</h3>

            <p>
              Aureon represents a modern approach to premium
              presentation and brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="contact-section"
      >
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="contact-logo"
        />

        <h2>Connect With Aureon</h2>

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

      {/* FOOTER */}
      <footer className="footer">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="footer-logo"
        />

        <p>
          © {new Date().getFullYear()} Aureon. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
```
