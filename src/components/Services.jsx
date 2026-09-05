import "./Services.css";

import web from "../assets/services/web.png";
import app from "../assets/services/app.png";
import erp from "../assets/services/erp.png";
import saas from "../assets/services/saas.png";
import software from "../assets/services/software.png";
import brand from "../assets/services/brand.png";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable web applications engineered for performance, security, and responsive precision across all devices.",
    image: web,
    capabilities: [
      "Custom Full-Stack Web Apps",
      "Modern React & Single Page Apps",
      "SEO-Optimized Performance Architecture",
    ],
    techStack: ["React", "JavaScript", "HTML5 / CSS3", "REST APIs"],
  },
  {
    title: "App Development",
    desc: "High-quality mobile applications built to provide seamless, intuitive user experiences with fluid navigation and native responsiveness.",
    image: app,
    capabilities: [
      "Cross-Platform iOS & Android Apps",
      "Offline Sync & Real-time State",
      "Interactive UI & Touch Systems",
    ],
    techStack: ["Mobile Architecture", "REST APIs", "Modern State Management"],
  },
  {
    title: "ERP Solutions",
    desc: "Custom ERP and internal operational platforms designed to centralize business data, automate workflows, and increase efficiency.",
    image: erp,
    capabilities: [
      "Operational Workflow Automation",
      "Role-Based Access & Security",
      "Centralized Inventory & Reporting",
    ],
    techStack: ["Custom Database Architecture", "Workflow Engines", "Dashboards"],
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS engineering from initial architecture and MVP creation through to production deployment and continuous scaling.",
    image: saas,
    capabilities: [
      "Multi-Tenant Database Schemas",
      "Subscription & User Management",
      "Modular Cloud APIs & Integrations",
    ],
    techStack: ["Cloud Architecture", "API Integration", "Automated QA"],
  },
  {
    title: "Custom Software Development",
    desc: "Reliable, secure software crafted to address unique operational bottlenecks, data integration needs, and enterprise requirements.",
    image: software,
    capabilities: [
      "Targeted Business Logic Solutions",
      "Database Optimization & Migration",
      "Third-Party Service Connectors",
    ],
    techStack: ["System Design", "Relational DBs", "Microservice Patterns"],
  },
  {
    title: "Brand & Interface Design",
    desc: "Distinct digital identities and user interfaces crafted through systematic design thinking, interactive prototypes, and visual clarity.",
    image: brand,
    capabilities: [
      "Design Systems & Component Libraries",
      "High-Fidelity Interactive Wireframes",
      "User Journey & Conversion Optimization",
    ],
    techStack: ["Figma", "Design Systems", "UI / UX Prototyping"],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-pill-tag">Core Capabilities</div>
          <h2 className="section-heading">
            Comprehensive digital engineering and software services.
          </h2>
          <p className="section-description">
            We cover the full product development lifecycle, delivering tailored software solutions 
            engineered with architectural discipline and modern standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-img" loading="lazy" />
                <div className="service-image-gradient" />
              </div>

              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>

                <div className="service-capabilities-block">
                  <span className="capabilities-heading">Key Capabilities</span>
                  <ul className="capabilities-items">
                    {service.capabilities.map((cap, cIdx) => (
                      <li key={cIdx}>
                        <span className="cap-bullet">›</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-tech-tags">
                  {service.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

