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
      "Tirzèra™ is Aureon’s product identity for tirzepatide, a synthetic peptide associated with GIP and GLP-1 receptor activity. Product identification includes the applicable strength, lot or batch number, and product labeling.",
    scientific:
      "Tirzepatide is characterized by activity at the glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors. Its dual-receptor profile is a defining characteristic of the compound.",
    batch:
      "Applicable Tirzèra™ products are identified through their designated lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
    storage:
      "Storage requirements are product-specific and should be followed according to the applicable product labeling and documentation.",
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
      "Retatrutide is characterized by activity across three receptor pathways: GIP, GLP-1, and glucagon. Its three-receptor profile makes it scientifically distinct within the Aureon collection.",
    batch:
      "Applicable Retèra™ products are identified through their lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
    storage:
      "Storage requirements are product-specific and should be followed according to the applicable product labeling and documentation.",
    tone: "dark",
  },
  {
    name: "Aurèa™",
    ingredient: "GHK-Cu",
    image: "/Aura.png",
    profile:
      "Copper-binding tripeptide composed of glycine, histidine, and lysine.",
    identity:
      "Aurèa™ is Aureon’s product identity for GHK-Cu, also known as copper tripeptide-1. GHK-Cu is a copper-binding tripeptide composed of glycine, histidine, and lysine.",
    scientific:
      "GHK-Cu is a naturally occurring copper-binding tripeptide that has been investigated across biological, cellular, and skin-related research areas.",
    batch:
      "Applicable Aurèa™ products are identified through their lot or batch number, manufacturing date, expiration date, strength, and applicable product documentation.",
    storage:
      "Storage requirements are product-specific and should be followed according to the applicable product labeling and documentation.",
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
          "Aureon is a premium product brand centered on precision, scientific presentation, consistency, and attention to detail. Our philosophy is simple: Excellence in Every Vial.",
      },
      {
        question: "What products are available from Aureon?",
        answer:
          "The Aureon collection currently features Tirzèra™ / Tirzepatide, Retèra™ / Retatrutide, and Aurèa™ / GHK-Cu. Product presentations and availability may vary.",
      },
      {
        question: "What makes the Aureon collection different?",
        answer:
          "Each Aureon product has its own scientific identity, product information, batch documentation, and refined presentation. Our approach combines scientific clarity with a premium and consistent brand experience.",
      },
      {
        question: "What does Excellence in Every Vial mean?",
        answer:
          "Excellence in Every Vial represents Aureon’s commitment to precision, consistency, presentation, and attention to detail throughout the product and customer experience.",
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
          "Aurèa™ is Aureon’s product identity for GHK-Cu, also known as copper tripeptide-1. GHK-Cu is a copper-binding tripeptide composed of glycine, histidine, and lysine.",
      },
      {
        question: "What is the difference between Tirzèra™ and Retèra™?",
        answer:
          "Tirzèra™ / tirzepatide is associated with GIP and GLP-1 receptor activity, while Retèra™ / retatrutide is associated with GIP, GLP-1, and glucagon receptor activity. Their receptor profiles are scientifically distinct.",
      },
      {
        question: "What is the difference between Aurèa™ and the other Aureon products?",
        answer:
          "Aurèa™ / GHK-Cu has a different molecular identity and biological profile. GHK-Cu is a copper-binding tripeptide, while tirzepatide and retatrutide are peptide compounds associated with specific receptor pathways.",
      },
    ],
  },
  {
    title: "Ordering",
    items: [
      {
        question: "How do I order from Aureon?",
        answer:
          "Customers can contact Aureon through our official Facebook Messenger. Our team can assist with product information, current availability, and the applicable ordering process.",
      },
      {
        question: "Can I check availability before ordering?",
        answer:
          "Yes. Customers are welcome to message Aureon to confirm current product and batch availability before proceeding with an order.",
      },
      {
        question: "What information should I provide when making an inquiry?",
        answer:
          "For a smooth inquiry, customers may provide the product name, desired strength or presentation, quantity, name, contact information, and delivery information where applicable.",
      },
      {
        question: "How does the Aureon ordering process work?",
        answer:
          "Our customer journey is designed to be simple: Inquiry → Product Selection → Availability → Order Details → Confirmation → Processing.",
      },
      {
        question: "Can I inquire about multiple Aureon products?",
        answer:
          "Yes. Customers may inquire about multiple products in the same Messenger conversation, and the Aureon team can assist with the applicable product information and availability.",
      },
    ],
  },
  {
    title: "Product Information",
    items: [
      {
        question: "What information is included with an Aureon product?",
        answer:
          "Applicable product information may include product name, scientific name, active ingredient, strength, lot or batch number, manufacturing date, expiration date, and storage information.",
      },
      {
        question: "What is a lot or batch number?",
        answer:
          "A lot or batch number identifies a specific product batch and provides a reference for product traceability and product-related inquiries.",
      },
      {
        question: "Where can I find my product’s batch information?",
        answer:
          "Batch information is provided on the applicable product labeling or accompanying product documentation.",
      },
      {
        question: "Why is batch information important?",
        answer:
          "Batch information provides a specific reference for the product presentation and supports organized product documentation and traceability.",
      },
    ],
  },
  {
    title: "Storage & Handling",
    items: [
      {
        question: "How should Aureon products be stored?",
        answer:
          "Storage requirements are product-specific. Customers should follow the storage conditions provided with their particular product and applicable product documentation.",
      },
      {
        question: "Do all Aureon products have the same storage requirements?",
        answer:
          "Storage requirements may vary between products. Customers should refer to the specific instructions supplied with each product.",
      },
      {
        question: "How should I handle my product after receiving it?",
        answer:
          "Keep the product according to its applicable storage instructions and retain the original labeling and product documentation for future reference.",
      },
    ],
  },
  {
    title: "Product Suitability",
    items: [
      {
        question: "Who can use Aureon products?",
        answer:
          "Suitability depends on the specific product, its intended application, individual circumstances, and applicable professional or regulatory requirements. For pharmacologically active products, customers should seek guidance from an appropriately qualified healthcare professional regarding individual suitability.",
      },
      {
        question: "Can Aureon help me understand the differences between products?",
        answer:
          "Yes. Aureon provides scientific and product information describing the identity, characteristics, and distinctions between Tirzèra™, Retèra™, and Aurèa™.",
      },
      {
        question: "Can I use more than one Aureon product?",
        answer:
          "Product combinations depend on the specific compounds involved and the applicable professional or research context. Individualized guidance should be discussed with an appropriately qualified healthcare professional.",
      },
      {
        question: "Does Aureon provide dosing information?",
        answer:
          "Product information is provided according to the applicable product documentation. Individual dosing and treatment decisions should be determined by an appropriately qualified healthcare professional where applicable.",
      },
    ],
  },
  {
    title: "Customer Support",
    items: [
      {
        question: "What if I have a question about my product?",
        answer:
          "Customers can message Aureon with their product name, batch information, and specific question. Our team can assist with applicable product and documentation information.",
      },
      {
        question: "What if I need information about a specific batch?",
        answer:
          "Provide the product name and lot or batch number when messaging Aureon. This allows the applicable product information to be identified efficiently.",
      },
      {
        question: "What if I have an order question?",
        answer:
          "Message Aureon with your order information and the nature of your inquiry. Our team can assist with the applicable order status and next steps.",
      },
      {
        question: "Can I ask about future Aureon products?",
        answer:
          "Yes. Aureon may introduce additional product identities and presentations as the collection develops.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center">
            <img
              src="/aureon-logo.png"
              alt="Aureon"
              className="h-16 w-auto object-contain"
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
            className="rounded-full border border-[#171717] px-5 py-2.5 text-xs font-medium tracking-[0.15em] transition hover:bg-[#171717] hover:text-white"
          >
            CONTACT
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b7350]">
              Excellence in Every Vial
            </p>

            <h1 className="text-5xl font-light leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Excellence in
              <br />
              <span className="font-medium">Every Vial.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-black/60 sm:text-lg">
              A refined collection centered on precision, scientific
              presentation, consistency, and attention to detail.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-[#171717] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]"
              >
                EXPLORE COLLECTION
              </a>

              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium tracking-wide transition hover:border-black hover:bg-white"
              >
                MESSAGE AUREON
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[580px]">
            <div className="absolute h-96 w-96 rounded-full bg-[#d8c7a9]/30 blur-3xl" />

            <div className="relative flex h-[440px] w-[340px] items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:h-[510px] sm:w-[390px]">
              <div className="text-center">
                <img
                  src="/aureon-logo.png"
                  alt="Aureon"
                  className="mx-auto mb-9 h-40 w-auto object-contain"
                />

                <div className="mx-auto h-px w-16 bg-[#8b7350]" />

                <p className="mt-6 text-[10px] uppercase tracking-[0.45em] text-black/40">
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
                <span className="font-medium">every detail.</span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-black/65">
                Aureon was created around a simple philosophy: every detail
                matters. From product presentation to customer experience,
                our identity is built around precision, consistency, and
                thoughtful design.
              </p>

              <p className="mt-6 text-base leading-8 text-black/50">
                Our collection brings together distinctive product identities
                under one refined brand experience, designed to communicate
                product information clearly and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f8f7f4]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
                Aureon Collection
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                Scientific
                <br />
                <span className="font-medium">Collection.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
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
                      product.tone === "dark" ? "bg-white/10" : "bg-white/60"
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

                  <h3 className="mt-3 text-3xl font-medium tracking-tight">
                    {product.name}
                  </h3>

                  <div className="mt-6 rounded-2xl bg-[#f8f7f4] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b7350]">
                      Scientific Profile
                    </p>

                    <p className="mt-3 text-sm font-medium leading-6 text-black/70">
                      {product.profile}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-black/10 pt-7">
                    <h4 className="text-sm font-semibold">
                      Product Identity
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {product.identity}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-black/10 pt-7">
                    <h4 className="text-sm font-semibold">
                      Scientific Profile
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {product.scientific}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-black/10 pt-7">
                    <h4 className="text-sm font-semibold">
                      Batch Information
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {product.batch}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-black/10 pt-7">
                    <h4 className="text-sm font-semibold">Storage</h4>

                    <p className="mt-3 text-sm leading-7 text-black/55">
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
              <span className="font-medium">the standard.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <h3 className="text-lg font-medium">Precision</h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Product information and presentation are approached with
                accuracy and attention to detail.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <h3 className="text-lg font-medium">Scientific Focus</h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Aureon presents relevant scientific information in a clear,
                structured, and accessible format.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <h3 className="text-lg font-medium">Consistency</h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
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
              <span className="font-medium">questions.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/50">
              Discover more about Aureon, our collection, product
              information, ordering, storage, and customer support.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="h-px flex-1 bg-black/10" />

                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b7350]">
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
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium sm:text-base">
                        <span>{item.question}</span>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg font-light transition duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="max-w-3xl pr-10">
                        <p className="mt-5 text-sm leading-7 text-black/55">
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

            <p className="mt-4 text-sm leading-7 text-black/55">
              Product information, availability, and applicable requirements
              may vary by product and jurisdiction. Customers should refer to
              the applicable product documentation and official Aureon
              communication channels for current information.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f8f7f4]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl bg-[#171717] px-8 py-16 text-white sm:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c5aa7a]">
                Contact Aureon
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                Let's connect.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                Have a product, batch, availability, or business inquiry?
                Message the Aureon team directly through our official
                Facebook Messenger.
              </p>

              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-[#171717] transition hover:bg-[#eeeae2]"
              >
                MESSAGE AUREON
              </a>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b7350]">
                Contact Information
              </p>

              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                Connect with Aureon.
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/50">
                For product inquiries, availability, orders, batch
                information, and general questions, contact Aureon through
                our official Facebook Messenger.
              </p>

              <div className="mt-8 rounded-2xl bg-[#f8f7f4] p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b7350]">
                  Official Contact Channel
                </p>

                <p className="mt-3 text-base font-medium">
                  Aureon Official Messenger
                </p>

                <p className="mt-2 text-sm leading-6 text-black/45">
                  Our team can assist with product information, availability,
                  ordering inquiries, and customer support.
                </p>

                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-xs font-medium tracking-[0.12em] transition hover:border-black hover:bg-white"
                >
                  OPEN MESSENGER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-[#f8f7f4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-center text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-10">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <img
              src="/aureon-logo.png"
              alt="Aureon"
              className="h-9 w-auto object-contain opacity-70"
            />
          </div>

          <p>© 2026 Aureon. All rights reserved.</p>

          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black"
          >
            Message Aureon
          </a>
        </div>
      </footer>
    </main>
  );
}
