"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("");
    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="hero">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="logo"
        />

        <h1>Precision. Quality. Aureon.</h1>

        <p>
          Stay connected with Aureon. Subscribe for updates,
          announcements, and exclusive news.
        </p>

        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
            aria-label="Email address"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="success-message">
            Thank you! You're subscribed.
          </p>
        )}

        {status !== "" && status !== "success" && (
          <p className="error-message">{status}</p>
        )}
      </section>
    </main>
  );
}
