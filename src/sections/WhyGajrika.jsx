
import "./WhyGajrika.css";

const reasons = [
  {
    number: "01",
    title: "Quality First",
    description:
      "A quality-focused approach throughout product development and manufacturing.",
  },
  {
    number: "02",
    title: "Custom Formulations",
    description:
      "Product development tailored to your brand vision and market requirements.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "Support across formulation, manufacturing and packaging coordination.",
  },
  {
    number: "04",
    title: "Brand-Focused Approach",
    description:
      "Flexible solutions designed around your product identity and business goals.",
  },
];

function WhyGajrika() {
  return (
    <section className="gajrika-why" id="why-gajrika">

      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">

          <span className="why-eyebrow">
            THE GAJRIKA DIFFERENCE
          </span>

          <h2>
            Why partner
            <br />
            <span>with us?</span>
          </h2>

          <p className="why-description">
            Building a beauty brand requires more than a manufacturing
            partner. It requires expertise, collaboration and a shared
            commitment to bringing your vision to life.
          </p>

          <a href="#contact" className="why-cta">
            LET'S WORK TOGETHER <span>↗</span>
          </a>

        </div>

        {/* RIGHT CONTENT */}
        <div className="why-right">

          {reasons.map((reason) => (
            <article className="why-item" key={reason.number}>

              <span className="why-number">
                / {reason.number}
              </span>

              <div className="why-item-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>

              <span className="why-arrow">↗</span>

            </article>
          ))}

        </div>

      </div>

      {/* BOTTOM STATEMENT */}
      <div className="why-bottom">
        <span>GAJRIKA</span>
        <p>YOUR VISION DESERVES THE RIGHT PARTNER.</p>
      </div>

    </section>
  );
}

export default WhyGajrika;
