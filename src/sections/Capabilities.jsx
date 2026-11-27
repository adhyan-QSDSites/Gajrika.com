
import "./Capabilities.css";

const capabilities = [
  {
    number: "01",
    title: "Product Development",
    description:
      "Transform your ideas into market-ready beauty products through thoughtful formulation and development.",
    tag: "FROM IDEA TO FORMULA",
  },
  {
    number: "02",
    title: "Cosmetic Manufacturing",
    description:
      "Manufacturing solutions for skincare, haircare and personal care products with attention to quality.",
    tag: "PRECISION & QUALITY",
  },
  {
    number: "03",
    title: "Private Label Solutions",
    description:
      "Build your own beauty brand with tailored product and private label manufacturing solutions.",
    tag: "BUILD YOUR BRAND",
  },
  {
    number: "04",
    title: "Research & Innovation",
    description:
      "Explore new ingredients, formulations and product concepts to create differentiated products.",
    tag: "INNOVATION FIRST",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Quality-focused processes and checks throughout the manufacturing journey.",
    tag: "QUALITY MATTERS",
  },
  {
    number: "06",
    title: "Packaging Solutions",
    description:
      "Packaging support that brings together product presentation, practicality and brand identity.",
    tag: "DETAILS THAT MATTER",
  },
];

function Capabilities() {
  return (
    <section className="gajrika-capabilities" id="capabilities">

      <div className="capabilities-motion" aria-hidden="true">
        <div className="motion-orb motion-orb-one" />
        <div className="motion-orb motion-orb-two" />
        <div className="motion-orb motion-orb-three" />
        <div className="motion-ribbon motion-ribbon-one" />
        <div className="motion-ribbon motion-ribbon-two" />
        <div className="motion-grain" />
      </div>

      <div className="capabilities-container">

        <div className="capabilities-header">
          <div className="capabilities-heading">
            <span className="capabilities-eyebrow">
              WHAT WE BRING TO THE TABLE
            </span>

            <h2>
              Beyond
              <br />
              <span>Manufacturing.</span>
            </h2>
          </div>

          <div className="capabilities-intro">
            <p>
              From the first formulation concept to the finished product,
              we bring together expertise, innovation and manufacturing
              capabilities to support your beauty brand.
            </p>

            <a href="#contact">
              DISCUSS YOUR PROJECT <span>↗</span>
            </a>
          </div>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <div className="capability-card-top">
                <span className="capability-number">
                  / {item.number}
                </span>

                <span className="capability-arrow">↗</span>
              </div>

              <div className="capability-card-content">
                <span className="capability-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="capability-card-line" />
            </article>
          ))}
        </div>

        <div className="capabilities-bottom">
          <span>01 — 06</span>
          <p>ONE PARTNER. MULTIPLE POSSIBILITIES.</p>
        </div>

      </div>
    </section>
  );
}

export default Capabilities;
