
import "./Manufacturing.css";

const manufacturingSteps = [
  {
    number: "01",
    title: "Understanding Your Vision",
    description:
      "We understand your brand, product concept, target audience and manufacturing requirements.",
  },
  {
    number: "02",
    title: "Research & Formulation",
    description:
      "Your product concept moves towards formulation development and ingredient selection.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "The approved formulation moves into the manufacturing process with a focus on consistency and quality.",
  },
  {
    number: "04",
    title: "Quality & Packaging",
    description:
      "Products go through applicable quality checks and packaging coordination before dispatch.",
  },
];

function Manufacturing() {
  return (
    <section className="gajrika-manufacturing" id="manufacturing">

      <div className="manufacturing-container">

        {/* HEADER */}
        <div className="manufacturing-header">

          <div className="manufacturing-heading">
            <span className="manufacturing-eyebrow">
              FROM CONCEPT TO CREATION
            </span>

            <h2>
              The journey
              <br />
              <span>of creation.</span>
            </h2>
          </div>

          <div className="manufacturing-intro">
            <p>
              Every exceptional product begins with an idea.
              We bring together the process, expertise and attention
              to detail needed to move your vision towards reality.
            </p>
          </div>

        </div>

        {/* IMAGE */}
        <div className="manufacturing-visual">

          <img
            src="public/images/manufacturing.jpg"
            alt="Cosmetic manufacturing process"
          />

          <div className="manufacturing-visual-overlay">
            <span>THE PROCESS OF POSSIBILITY</span>
            <h3>
              Made with
              <br />
              intention.
            </h3>
          </div>

          <div className="manufacturing-visual-number">
            01 — 04
          </div>

        </div>

        {/* PROCESS STEPS */}
        <div className="manufacturing-process">

          <div className="manufacturing-process-heading">
            <span>OUR APPROACH</span>
            <p>FOUR STEPS. ONE SHARED VISION.</p>
          </div>

          <div className="manufacturing-steps">

            {manufacturingSteps.map((step) => (
              <article
                className="manufacturing-step"
                key={step.number}
              >

                <span className="manufacturing-step-number">
                  / {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="manufacturing-step-line"></div>

              </article>
            ))}

          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="manufacturing-cta">

          <p>HAVE A PRODUCT IDEA IN MIND?</p>

          <a href="#contact">
            LET'S BUILD IT TOGETHER <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Manufacturing;
