import { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites engineered for performance and long-term growth.",
    image: "/src/assets/services/web.png",
  },
  {
    title: "App Development",
    desc: "High-quality mobile applications built for seamless user experiences.",
    image: "/src/assets/services/app.png",
  },
  {
    title: "ERP Solutions",
    desc: "Custom ERP platforms designed to simplify operations and improve efficiency.",
    image: "/src/assets/services/erp.png",
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions from idea to launch and scale.",
    image: "/src/assets/services/saas.png",
  },
  {
    title: "Software Development",
    desc: "Reliable, secure software crafted to solve real business challenges.",
    image: "/src/assets/services/software.png",
  },
  {
    title: "Brand Designing",
    desc: "Distinct brand identities crafted through strategy, design systems, and visual clarity.",
    image: "/src/assets/services/brand.png",
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
