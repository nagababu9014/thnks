import { useState } from "react";
import { FiMail, FiPhone, FiCheck } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const serviceOptions = [
  "Web Development",
  "App Development",
  "ERP Solutions",
  "SaaS Product Development",
  "Custom Software Development",
  "Brand & Interface Design",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const phoneNumber = "919014884200";
    const text = encodeURIComponent(
      `Hello Thinksphere,

Name: ${form.name}
Email: ${form.email}
Service: ${form.service}

Project Details:
${form.message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-grid">
          {/* Left Column: Direct Inquiries & Context */}
          <div className="contact-info-col">
            <div className="section-pill-tag">Start a Conversation</div>
            <h2 className="contact-heading">Let's discuss your next digital product.</h2>
            <p className="contact-desc">
              Whether you need a custom web application, enterprise ERP system, or SaaS platform, 
              we are ready to discuss your requirements with technical clarity and precision.
            </p>

            <div className="contact-commitments">
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <span>Direct technical consultation with our engineering leads</span>
              </div>
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <span>Prompt review and response within 24 business hours</span>
              </div>
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <span>Clear, transparent scope and milestone estimates</span>
              </div>
            </div>

            {/* Direct Connect Cards */}
            <div className="direct-channels-list">
              <a href="https://wa.me/919014884200" target="_blank" rel="noopener noreferrer" className="channel-card">
                <div className="channel-icon-box whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="channel-text">
                  <span className="channel-title">Direct WhatsApp Concierge</span>
                  <span className="channel-val">+91 9014884200 (Instant Chat)</span>
                </div>
              </a>

              <a href="mailto:ballanagababu29@gmail.com" className="channel-card">
                <div className="channel-icon-box email-icon">
                  <FiMail />
                </div>
                <div className="channel-text">
                  <span className="channel-title">Email Inquiries</span>
                  <span className="channel-val">ballanagababu29@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links-row">
              <span className="social-label">Follow Thinksphere:</span>
              <div className="social-icons-group">
                <a
                  href="https://www.instagram.com/flashcoders_?igsh=aGQxZWJ3OG1taTR5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-btn"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-wrapper">
            <div className="form-header-bar">
              <h3 className="form-box-title">Project Inquiry Form</h3>
              <span className="form-box-sub">Tell us about your project</span>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                <div className="success-icon-circle">
                  <FiCheck />
                </div>
                <h4 className="success-title">Inquiry Submitted</h4>
                <p className="success-desc">
                  Thank you! Your project details have been prepared for dispatch. Our team will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="reset-form-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="project-inquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="client-name" className="field-label">Your Name *</label>
                  <input
                    id="client-name"
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="e.g. Alex Morgan"
                    required
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="client-email" className="field-label">Work Email *</label>
                  <input
                    id="client-email"
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="alex@company.com"
                    required
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="client-service" className="field-label">Service Needed *</label>
                  <select
                    id="client-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="client-message" className="field-label">Project Scope & Requirements *</label>
                  <textarea
                    id="client-message"
                    name="message"
                    value={form.message}
                    placeholder="Briefly describe what you're looking to build, timelines, or specific goals..."
                    rows="4"
                    required
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-inquiry-btn">
                  <span>Submit Project Inquiry</span>
                  <span className="submit-arrow" aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

