import "./Footer.css";

function Footer() {
  const whatsappNumbers = [
    { number: "+91 99105 06665", display: "whatsapp " },
    { number: "+91 99920 22220", display: "whatsapp " },
    { number: "+91 99105 06665", display: "whatsapp " },
    { number: "+91 99920 22220", display: "whatsapp " },
  ];

  return (
    <footer className="gajrika-footer">

      <div className="gajrika-footer-main">

        {/* BRAND INFORMATION */}
        <div className="gajrika-footer-brand">
          <a href="#home" className="gajrika-footer-logo">
            GAJRIKA<span>.</span>
          </a>

          <p>
            Crafting possibilities in beauty and personal care.
            Your trusted partner for innovative cosmetic
            manufacturing and private label solutions.
          </p>

          <a href="#contact" className="gajrika-footer-discover">
            Discover Our Capabilities <span>↗</span>
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="gajrika-footer-column">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#capabilities">Our Capabilities</a>
          <a href="#products">Product Categories</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* SERVICES */}
        <div className="gajrika-footer-column">
          <h3>What We Do</h3>
          <a href="#capabilities">Cosmetic Manufacturing</a>
          <a href="#capabilities">Private Label Solutions</a>
          <a href="#capabilities">Product Development</a>
          <a href="#capabilities">Quality Assurance</a>
          <a href="#capabilities">Packaging Solutions</a>
        </div>

        {/* CONTACT */}
        <div className="gajrika-footer-column gajrika-footer-contact">
          <h3>Get In Touch</h3>

          <div className="gajrika-footer-contact-item">
            <span>Email</span>
            <a href="mailto:info@gajrika.com">
              info@gajrika.com
            </a>
          </div>

          <div className="gajrika-whatsapp-contacts">
            <span>WhatsApp Contacts</span>

            <div className="gajrika-whatsapp-grid">
              {whatsappNumbers.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gajrika-whatsapp-link"
                >
                  {contact.display}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="gajrika-footer-contact-item">
            <span>Location</span>
            <strong>India</strong>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="gajrika-footer-bottom">

        <p>
          © {new Date().getFullYear()} Gajrika. All Rights Reserved.
        </p>

        <p className="gajrika-footer-credit">
          Designed with purpose.
        </p>

        <a href="#home" className="gajrika-back-top">
          Back to Top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
