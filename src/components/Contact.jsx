import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919014884200"; // replace
    const text = encodeURIComponent(
      `Hello Thinksphere,

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            Reach out to discuss your next digital product.  
            We collaborate with clarity, precision, and intent.
          </p>

          <div className="contact-icons">
            <a href="mailto:ballanagababu29@gmail.com" aria-label="Email">
              <FiMail />
            </a>
            <a href="https://www.instagram.com/flashcoders_?igsh=aGQxZWJ3OG1taTR5" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919014884200" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="4"
            required
            onChange={handleChange}
          />

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
