import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "919014884200";
  const message = encodeURIComponent(
    "Hello Thinksphere, I would like to discuss a software project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat directly on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-float-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}

