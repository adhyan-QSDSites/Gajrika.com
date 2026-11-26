
import "./ProductCategories.css";

const categories = [
  {
    number: "01",
    name: "Face Care",
    description: "Skincare essentials for every routine.",
    image: "/images/face-care.jpg",
  },
  {
    number: "02",
    name: "Hair Care",
    description: "Innovative solutions for hair and scalp care.",
    image: "/images/hair-care.jpg",
  },
  {
    number: "03",
    name: "Bath & Body",
    description: "Everyday care with a touch of indulgence.",
    image: "/images/bath-body.jpg",
  },
  {
    number: "04",
    name: "Personal Care",
    description: "Thoughtfully developed personal care products.",
    image: "/images/personal-care.jpg",
  },
  {
    number: "05",
    name: "Men's Grooming",
    description: "Modern grooming essentials for men.",
    image: "/images/mens-grooming.jpg",
  },
  {
    number: "06",
    name: "Baby Care",
    description: "Gentle care products for little ones.",
    image: "/images/baby-care.jpg",
  },
];

function ProductCategories() {
  return (
    <section className="gajrika-categories" id="products">

      <div className="categories-container">

        {/* HEADER */}
        <div className="categories-header">

          <div className="categories-title">
            <span className="categories-eyebrow">
              EXPLORE OUR EXPERTISE
            </span>

            <h2>
              Categories
              <br />
              <span>of possibility.</span>
            </h2>
          </div>

          <div className="categories-intro">
            <p>
              From everyday essentials to specialised beauty
              formulations, explore the product categories
              we help brands bring to life.
            </p>

            <a href="#contact">
              DEVELOP YOUR PRODUCT <span>↗</span>
            </a>
          </div>

        </div>

        {/* CATEGORY GRID */}
        <div className="categories-grid">

          {categories.map((category) => (
            <article
              className="category-card"
              key={category.number}
            >

              <div className="category-image">

                <img
                  src={category.image}
                  alt={`${category.name} product category`}
                  loading="lazy"
                />

                <span className="category-image-number">
                  / {category.number}
                </span>

                <a
                  href="#contact"
                  className="category-explore"
                  aria-label={`Enquire about ${category.name}`}
                >
                  ↗
                </a>

              </div>

              <div className="category-card-content">

                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-card-arrow">↗</span>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="categories-bottom">
          <span>01 — 06</span>
          <p>YOUR BRAND. YOUR CATEGORY. OUR EXPERTISE.</p>
        </div>

      </div>

    </section>
  );
}

export default ProductCategories;
