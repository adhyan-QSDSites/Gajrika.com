import "./AboutPreview.css";

const items = [
  "THIRD-PARTY MANUFACTURING",
  "CUSTOM FORMULATIONS",
  "PRIVATE LABEL SOLUTIONS",
  "QUALITY-FOCUSED PRODUCTION",
  "YOUR BRAND, OUR EXPERTISE",
];

function AboutPreview() {
  return (
    <section className="gajrika-trust-strip">
      <div className="trust-strip-track">
        {[...items, ...items].map((item, index) => (
          <div className="trust-strip-item" key={index}>
            <span>{item}</span>
            <span className="trust-strip-star">✳</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPreview;

