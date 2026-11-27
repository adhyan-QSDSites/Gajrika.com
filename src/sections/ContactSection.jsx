import { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "New Manufacturing Enquiry - Gajrika"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}`
    );

    window.location.href = `mailto:info@gajrika.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="gajrika-contact" id="contact">

      <div className="gajrika-contact-container">

        {/* LEFT CONTENT */}
        <div className="gajrika-contact-info">

          <span className="contact-eyebrow">
            LET'S CREATE SOMETHING TOGETHER
          </span>

          <h2>
            Your vision.
            <br />
            <span>Our expertise.</span>
            <br />
            One possibility.
          </h2>

          <p className="contact-description">
            Have a product idea or planning to build your own beauty
            brand? Let's discuss how Gajrika can help turn your vision
            into reality.
          </p>

          <div className="contact-details">

            <div className="contact-detail-item">
              <span>EMAIL US</span>
              <a href="mailto:info@gajrika.com">
                info@gajrika.com
              </a>
            </div>

            <div className="contact-detail-item">
              <span>CALL US</span>
              <a href="tel:+91 99105 06665 , +91 99920 22220 , +91 99909 46900">
                +91 99105 06665 , +91 99920 22220 , +91 99909 46900
              </a>
            </div>

            <div className="contact-detail-item">
              <span>LOCATION</span>
              <p>India</p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="gajrika-contact-form-wrapper">

          <div className="contact-form-heading">
            <span>01 / START A CONVERSATION</span>
            <h3>Tell us about your project.</h3>
            <p>Fill in the details below and let's get started.</p>
          </div>

          <form className="gajrika-contact-form" onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="contact-name">YOUR NAME *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="contact-phone">PHONE NUMBER *</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-company">COMPANY / BRAND</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Your brand name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-service">WHAT ARE YOU LOOKING FOR? *</label>

              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Cosmetic Manufacturing">Cosmetic Manufacturing</option>
                <option value="Private Label">Private Label Solutions</option>
                <option value="Product Development">Product Development</option>
                <option value="Packaging Solutions">Packaging Solutions</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">TELL US ABOUT YOUR PROJECT *</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Share your product idea, requirements or questions..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-button">
              SEND YOUR ENQUIRY <span>↗</span>
            </button>

            <p className="contact-form-note">
              By submitting this form, you agree to be contacted regarding
              your enquiry.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;
