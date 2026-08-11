```tsx
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
            Explore the Aureon collection and discover a
            refined approach to premium presentation.
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

            <div className="product-content">
              <span className="product-label">
                AUREON COLLECTION
              </span>

              <h3>Tirzera</h3>

              <p>
                A refined Aureon collection piece designed
                with attention to presentation and detail.
              </p>
            </div>
          </article>

          <article className="product-card">
            <div className="product-image">
              <img
                src="/Retera.png"
                alt="Retera"
              />
            </div>

            <div className="product-content">
              <span className="product-label">
                AUREON COLLECTION
              </span>

              <h3>Retera</h3>

              <p>
                A refined Aureon collection piece designed
                with attention to presentation and detail.
              </p>
            </div>
          </article>

          <article className="product-card">
            <div className="product-image">
              <img
                src="/Aura.png"
                alt="Aurèa"
              />
            </div>

            <div className="product-content">
              <span className="product-label">
                AUREON COLLECTION
              </span>

              <h3>Aurèa</h3>

              <p>
                A refined Aureon collection piece designed
                with attention to presentation and detail.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="standards-section">
        <div className="section-heading">
          <span>THE AUREON STANDARD</span>
          <h2>Designed With Purpose</h2>
          <p>
            Every element of Aureon reflects our commitment
            to precision, quality, and a refined brand
            experience.
          </p>
        </div>

        <div className="standards-grid">
          <article className="standard-card">
            <div className="standard-number">01</div>
            <h3>Precision</h3>
            <p>
              Every detail is carefully considered to create
              a consistent and sophisticated experience.
            </p>
          </article>

          <article className="standard-card">
            <div className="standard-number">02</div>
            <h3>Quality</h3>
            <p>
              We believe excellence begins with attention
              to detail and uncompromising standards.
            </p>
          </article>

          <article className="standard-card">
            <div className="standard-number">03</div>
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
            From the visual identity to every element of the
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
          Have a question or want to learn more about
          Aureon? Get in touch with our team.
        </p>

        <a
          href="#contact"
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
```
