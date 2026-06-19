import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Reach out anytime.
        </p>

        <div className="contact-details">

          <div className="contact-card">
            <h3>Email</h3>
            <p>support@shopxy.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="contact-card">
            <h3>Address</h3>
            <p>Hosur, Tamil Nadu, India</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;