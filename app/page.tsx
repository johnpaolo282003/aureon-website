"use client";

const MESSENGER_URL =
"https://www.facebook.com/messages/t/61592515297428/";

const products = [
{
name: "Tirzèra™",
ingredient: "Tirzepatide",
image: "/Tirzera.png",
profile:
"Synthetic peptide associated with dual GIP and GLP-1 receptor activity.",
identity:
"Tirzèra™ is Aureon’s product identity for tirzepatide. Product identification includes the applicable strength, lot or batch number, manufacturing date, expiration date, and applicable product documentation.",
scientific:
"Tirzepatide is characterized by activity at the glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors.",
batch:
"Applicable Tirzèra™ products are identified through their designated lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
storage:
"Storage requirements are product-specific. Follow the storage conditions provided with the applicable product documentation.",
tone: "light",
},
{
name: "Retèra™",
ingredient: "Retatrutide",
image: "/Retera.png",
profile:
"Investigational synthetic peptide associated with GIP, GLP-1, and glucagon receptor activity.",
identity:
"Retèra™ is Aureon’s product identity for retatrutide, an investigational synthetic peptide associated with GIP, GLP-1, and glucagon receptor activity.",
scientific:
"Retatrutide is characterized by activity across three receptor pathways: GIP, GLP-1, and glucagon.",
batch:
"Applicable Retèra™ products are identified through their lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
storage:
"Storage requirements are product-specific. Follow the storage conditions provided with the applicable product documentation.",
tone: "dark",
},
{
name: "Aurèa™",
ingredient: "GHK-Cu",
image: "/Aura.png",
profile:
"Copper-binding tripeptide composed of glycine, histidine, and lysine.",
identity:
"Aurèa™ is Aureon’s product identity for GHK-Cu, also known as copper tripeptide-1.",
scientific:
"GHK-Cu is a naturally occurring copper-binding tripeptide that has been investigated across biological, cellular, and skin-related research areas.",
batch:
"Applicable Aurèa™ products are identified through their lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
storage:
"Storage requirements are product-specific. Follow the storage conditions provided with the applicable product documentation.",
tone: "gold",
},
];

const faqGroups = [
{
title: "About Aureon",
items: [
{
question: "What is Aureon?",
answer:
"Aureon is a premium product brand centered on precision, scientific presentation, consistency, and attention to detail.",
},
{
question: "What products are featured by Aureon?",
answer:
"The Aureon collection features Tirzèra™ / Tirzepatide, Retèra™ / Retatrutide, and Aurèa™ / GHK-Cu. Product presentation and availability may vary.",
},
{
question: "What does Excellence in Every Vial mean?",
answer:
"It represents Aureon’s focus on precision, consistency, presentation, and attention to detail throughout the product and customer experience.",
},
],
},
{
title: "Understanding the Products",
items: [
{
question: "What is Tirzèra™?",
answer:
"Tirzèra™ is Aureon’s product identity for tirzepatide, a synthetic peptide associated with dual GIP and GLP-1 receptor activity.",
},
{
question: "What is Retèra™?",
answer:
"Retèra™ is Aureon’s product identity for retatrutide, an investigational synthetic peptide associated with GIP, GLP-1, and glucagon receptor activity.",
},
{
question: "What is Aurèa™?",
answer:
"Aurèa™ is Aureon’s product identity for GHK-Cu, also known as copper tripeptide-1.",
},
{
question: "What is the difference between Tirzèra™ and Retèra™?",
answer:
"Tirzèra™ / tirzepatide is associated with GIP and GLP-1 receptor activity, while Retèra™ / retatrutide is associated with GIP, GLP-1, and glucagon receptor activity.",
},
{
question: "What makes Aurèa™ different?",
answer:
"Aurèa™ / GHK-Cu has a different molecular identity and biological profile from tirzepatide and retatrutide.",
},
],
},
{
title: "Ordering",
items: [
{
question: "How do I contact Aureon?",
answer:
"Customers can contact Aureon through the official Facebook Messenger channel linked throughout this website.",
},
{
question: "Can I check availability before making an inquiry?",
answer:
"Yes. Customers can message Aureon to confirm current product information and availability.",
},
{
question: "What information should I provide?",
answer:
"For a smoother inquiry, provide the product name and any applicable strength, quantity, or batch information.",
},
{
question: "Can I inquire about multiple products?",
answer:
"Yes. Multiple products can be discussed in the same Messenger conversation.",
},
],
},
{
title: "Product Information",
items: [
{
question: "What information is included with an Aureon product?",
answer:
"Applicable information may include product name, scientific name, active ingredient, strength, lot or batch number, manufacturing date, expiration date, and storage information.",
},
{
question: "What is a lot or batch number?",
answer:
"A lot or batch number identifies a specific product batch and provides a reference for product documentation and traceability.",
},
{
question: "Where can I find batch information?",
answer:
"Batch information is provided on applicable product labeling or accompanying documentation.",
},
],
},
{
title: "Storage & Handling",
items: [
{
question: "How should Aureon products be stored?",
answer:
"Storage requirements are product-specific. Follow the storage conditions provided with the applicable product documentation.",
},
{
question: "Do all products have the same storage requirements?",
answer:
"No. Storage requirements may vary between products, so customers should refer to the instructions supplied with the applicable product.",
},
{
question: "How should I handle a product after receiving it?",
answer:
"Keep the product according to its applicable storage instructions and retain the original labeling and documentation.",
},
],
},
{
title: "Product Suitability",
items: [
{
question: "Who can use these products?",
answer:
"Suitability depends on the specific product, intended application, individual circumstances, and applicable professional or regulatory requirements. Consult an appropriately qualified healthcare professional where applicable.",
},
{
question: "Does Aureon provide dosing information?",
answer:
"Individual dosing and treatment decisions should be determined by an appropriately qualified healthcare professional where applicable.",
},
{
question: "Can Aureon explain the differences between products?",
answer:
"Yes. Aureon provides general scientific and product information describing the identities and characteristics of its collection.",
},
],
},
{
title: "Customer Support",
items: [
{
question: "What if I have a question about my product?",
answer:
"Message Aureon with the product name, applicable batch information, and your question.",
},
{
question: "What if I need information about a specific batch?",
answer:
"Provide the product name and lot or batch number when contacting Aureon.",
},
{
question: "Can I ask about future products?",
answer:
"Yes. Aureon may introduce additional product identities and presentations as the collection develops.",
},
],
},
];

export default function Home() {
return ( <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">

```
  <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f0]/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-10">

      <a href="#" className="flex items-center">
        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="h-14 w-auto object-contain sm:h-16"
        />
      </a>

      <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
        <a href="#about" className="transition hover:opacity-60">
          About
        </a>

        <a href="#products" className="transition hover:opacity-60">
          Products
        </a>

        <a href="#standards" className="transition hover:opacity-60">
          Standards
        </a>

        <a href="#faq" className="transition hover:opacity-60">
          FAQ
        </a>

        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-60"
        >
          Contact
        </a>
      </nav>

      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#171717] px-4 py-2.5 text-[10px] font-medium tracking-[0.15em] transition hover:bg-[#171717] hover:text-white sm:px-5 sm:text-xs"
      >
        CONTACT
      </a>

    </div>
  </header>

  <section className="premium-texture relative overflow-hidden">

    <div className="pointer-events-none absolute left-[-120px] top-[15%] h-80 w-80 rounded-full bg-[#d8c7a9]/20 blur-[100px]" />

    <div className="pointer-events-none absolute right-[-100px] top-[30%] h-96 w-96 rounded-full bg-white/70 blur-[100px]" />

    <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">

      <div className="relative z-10 max-w-2xl">

        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b7350]">
          Excellence in Every Vial
        </p>

        <h1 className="text-5xl font-light leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          Excellence in
          <br />
          <span className="font-medium">
            Every Vial.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-[#343434] sm:text-lg">
          A refined collection centered on precision, scientific
          presentation, consistency, and attention to detail.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#products"
            className="rounded-full bg-[#171717] px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-black/10 transition hover:bg-[#333]"
          >
            EXPLORE COLLECTION
          </a>

          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-[#171717] transition hover:border-black hover:bg-[#f3f1ec]"
          >
            MESSAGE AUREON
          </a>

        </div>
      </div>

      <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[580px]">

        <div className="absolute h-[420px] w-[420px] rounded-full bg-[#d8c7a9]/20 blur-[100px]" />

        <div className="absolute h-[280px] w-[280px] rounded-full border border-[#a88b5c]/10" />

        <div className="absolute h-[350px] w-[350px] rounded-full border border-black/[0.04]" />

        <div className="aureon-glass aureon-shadow relative flex h-[440px] w-[340px] items-center justify-center overflow-hidden rounded-[2rem] sm:h-[510px] sm:w-[390px]">

          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-[#d8c7a9]/10" />

          <div className="relative z-10 text-center">

            <img
              src="/aureon-logo.png"
              alt="Aureon"
              className="mx-auto mb-9 h-40 w-auto object-contain"
            />

            <div className="gold-line mx-auto" />

            <p className="mt-6 text-[10px] uppercase tracking-[0.45em] text-[#333333]">
              AUREON
            </p>

            <p className="mt-3 text-xs tracking-[0.2em] text-[#8b7350]">
              EXCELLENCE IN EVERY VIAL
            </p>

          </div>
        </div>
      </div>

    </div>
  </section>

  <section id="about" className="border-t border-black/5 bg-white">

    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
            About Aureon
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
            Precision in
            <br />
            <span className="font-medium">
              every detail.
            </span>
          </h2>
        </div>

        <div className="max-w-2xl">

          <p className="text-lg leading-8 text-[#333333]">
            Aureon was created around a simple philosophy: every detail
            matters. From product presentation to customer experience,
            our identity is built around precision, consistency, and
            thoughtful design.
          </p>

          <p className="mt-6 text-base leading-8 text-[#555555]">
            Our collection brings together distinctive product identities
            under one refined brand experience, designed to communicate
            product information clearly and professionally.
          </p>

        </div>
      </div>
    </div>
  </section>

  <section id="products" className="premium-texture">

    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
            Aureon Collection
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
            Scientific
            <br />
            <span className="font-medium">
              Collection.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[#444444]">
          Explore the Aureon collection through scientifically oriented
          product information presented with clarity and precision.
        </p>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {products.map((product) => (

          <article
            key={product.name}
            className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
          >

            <div
              className={`relative flex min-h-[430px] items-center justify-center overflow-hidden ${
                product.tone === "dark"
                  ? "bg-[#171717]"
                  : product.tone === "gold"
                    ? "bg-[#e4d8c2]"
                    : "bg-[#eeeae2]"
              }`}
            >

              <div
                className={`absolute h-64 w-64 rounded-full blur-3xl ${
                  product.tone === "dark"
                    ? "bg-white/10"
                    : "bg-white/60"
                }`}
              />

              <img
                src={product.image}
                alt={`${product.name} ${product.ingredient}`}
                className={`relative z-10 mx-auto max-h-[360px] w-auto max-w-[78%] object-contain transition duration-700 group-hover:scale-105 ${
                  product.tone === "dark"
                    ? "drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                    : "drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
                }`}
              />

            </div>

            <div className="p-8">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b7350]">
                {product.ingredient}
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-tight text-[#171717]">
                {product.name}
              </h3>

              <div className="mt-6 rounded-2xl bg-[#f8f7f4] p-5">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b7350]">
                  Scientific Profile
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[#333333]">
                  {product.profile}
                </p>

              </div>

              <div className="mt-8 border-t border-black/10 pt-7">

                <h4 className="text-sm font-semibold text-[#171717]">
                  Product Identity
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#444444]">
                  {product.identity}
                </p>

              </div>

              <div className="mt-7 border-t border-black/10 pt-7">

                <h4 className="text-sm font-semibold text-[#171717]">
                  Scientific Profile
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#444444]">
                  {product.scientific}
                </p>

              </div>

              <div className="mt-7 border-t border-black/10 pt-7">

                <h4 className="text-sm font-semibold text-[#171717]">
                  Batch Information
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#444444]">
                  {product.batch}
                </p>

              </div>

              <div className="mt-7 border-t border-black/10 pt-7">

                <h4 className="text-sm font-semibold text-[#171717]">
                  Storage
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#444444]">
                  {product.storage}
                </p>

              </div>

              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center rounded-full bg-[#171717] px-6 py-3.5 text-xs font-medium tracking-[0.15em] text-white transition hover:bg-[#333]"
              >
                INQUIRE ABOUT {product.name.replace("™", "")}
              </a>

            </div>
          </article>

        ))}

      </div>
    </div>
  </section>

  <section id="standards" className="bg-[#171717] text-white">

    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

      <div className="max-w-2xl">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c5aa7a]">
          Our Standards
        </p>

        <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
          Excellence is
          <br />
          <span className="font-medium">
            the standard.
          </span>
        </h2>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h3 className="text-lg font-medium text-white">
            Precision
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Product information and presentation are approached with
            accuracy and attention to detail.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h3 className="text-lg font-medium text-white">
            Scientific Focus
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Aureon presents relevant scientific information in a clear,
            structured, and accessible format.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h3 className="text-lg font-medium text-white">
            Consistency
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Aureon maintains a consistent visual and informational
            standard throughout the collection.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section id="faq" className="bg-white">

    <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">

      <div className="text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
          Aureon Information
        </p>

        <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
          Frequently asked
          <br />
          <span className="font-medium">
            questions.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#444444]">
          Discover more about Aureon, our collection, product
          information, storage, and customer support.
        </p>

      </div>

      <div className="mt-16 space-y-10">

        {faqGroups.map((group) => (

          <div key={group.title}>

            <div className="mb-4 flex items-center gap-4">

              <span className="h-px flex-1 bg-black/10" />

              <h3 className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
                {group.title}
              </h3>

              <span className="h-px flex-1 bg-black/10" />

            </div>

            <div className="divide-y divide-black/10 rounded-2xl border border-black/10">

              {group.items.map((item) => (

                <details
                  key={item.question}
                  className="group px-6 py-5 sm:px-8"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-[#171717] sm:text-base">

                    <span>
                      {item.question}
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg font-light transition duration-300 group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <div className="max-w-3xl pr-10">

                    <p className="mt-5 text-sm leading-7 text-[#444444]">
                      {item.answer}
                    </p>

                  </div>

                </details>

              ))}

            </div>
          </div>

        ))}

      </div>

      <div className="mt-14 rounded-2xl border border-[#c5aa7a]/30 bg-[#f8f7f4] p-7 sm:p-9">

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b7350]">
          Aureon Information
        </p>

        <p className="mt-4 text-sm leading-7 text-[#444444]">
          Product information, availability, and applicable requirements
          may vary by product and jurisdiction. Customers should refer to
          applicable product documentation and official Aureon
          communication channels for current information.
        </p>

      </div>

    </div>
  </section>

  <section id="contact" className="premium-texture">

    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">

        <div className="rounded-3xl bg-[#171717] px-8 py-16 text-white sm:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c5aa7a]">
            Contact Aureon
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
            Let's connect.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
            Have a product, batch, availability, or general inquiry?
            Message the Aureon team through the official Messenger
            channel.
          </p>

          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition hover:bg-[#eeeae2]"
          >
            MESSAGE AUREON
          </a>

        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10">

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b7350]">
            Contact Information
          </p>

          <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#171717]">
            Connect with Aureon.
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#444444]">
            For product inquiries, availability, batch information,
            and general questions, contact Aureon through the official
            Facebook Messenger channel.
          </p>

          <div className="mt-8 rounded-2xl bg-[#f8f7f4] p-6">

            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b7350]">
              Official Contact Channel
            </p>

            <p className="mt-3 text-base font-medium text-[#171717]">
              Aureon Official Messenger
            </p>

            <p className="mt-2 text-sm leading-6 text-[#444444]">
              Our team can assist with applicable product information,
              availability, and general inquiries.
            </p>

            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center rounded-full border border-black/20 px-6 py-3 text-xs font-medium tracking-[0.12em] text-[#171717] transition hover:border-black hover:bg-white"
            >
              OPEN MESSENGER
            </a>

          </div>
        </div>

      </div>
    </div>
  </section>

  <footer className="border-t border-black/5 bg-[#f7f5f0]">

    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-center text-xs text-[#555555] sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-10">

      <div className="flex items-center justify-center gap-3 sm:justify-start">

        <img
          src="/aureon-logo.png"
          alt="Aureon"
          className="h-9 w-auto object-contain opacity-70"
        />

      </div>

      <p>
        © 2026 Aureon. All rights reserved.
      </p>

      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#444444] transition hover:text-black"
      >
        Message Aureon
      </a>

    </div>

  </footer>

</main>
```

);
}
