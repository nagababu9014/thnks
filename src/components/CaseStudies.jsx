import { useState } from "react";
import "./CaseStudies.css";

import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/reviews/review3.png";
import review4 from "../assets/reviews/lukapods.png";
import review5 from "../assets/reviews/ravinelegal.png";
import review6 from "../assets/reviews/inventobots.png";
const featuredCaseStudies = [
  {
    id: "luka-pods",
    title: "Luka Pods",
    domain: "Consumer Product & E-Commerce",
    url: "https://www.lukapods.com/",
    previewImage: review4,
    deliverables: [
      "E-Commerce Website",
      "Product Experience",
      "Responsive Web Design",
    ],
    client: {
      name: "Bhuvan Cheerla",
      role: "COO, Luka Pods",
    },
    quote:
      "The team delivered an excellent design, and we are very satisfied with the overall work.",
    highlights: [
      "Premium product-focused digital experience",
      "Clear product discovery and presentation",
      "Responsive experience across devices",
    ],
  },

  {
    id: "ravine-legal",
    title: "Ravine Legal",
    domain: "Legal & Financial Services",
    url: "https://www.ravinelegal.com/",
    previewImage: review5,
    deliverables: [
      "Professional Service Website",
      "Lead Generation Experience",
      "Responsive Web Design",
    ],
    client: {
      name: "Neeraj Tilak",
      role: "Director, Ravine Legal",
    },
    quote:
      "The team understood our requirements very well and delivered the best solution for our needs.",
    highlights: [
      "Clear presentation of legal and debt-resolution services",
      "Trust-focused service communication",
      "Structured inquiry experience",
    ],
  },

  {
    id: "inventobots",
    title: "InventoBots",
    domain: "Education, Coding & Robotics",
    url: "https://www.inventobots.com/",
    previewImage: review6,
    deliverables: [
      "Education Platform",
      "Program Showcase",
      "Responsive Web Experience",
    ],
    client: {
      name: "Karthik",
      role: "Founder, InventoBots & MarvelousMart",
    },
    quote:
      "Extraordinary work by the Thinksphere team. The quality of execution and attention to detail were exceptional.",
    highlights: [
      "Engaging presentation of technology education programs",
      "Clear communication of coding and robotics offerings",
      "Student-focused digital experience",
    ],
  },
];

const additionalCaseStudies = [
  {
    id: "manoj-events",
    title: "Manoj Events",
    domain: "Event Management & Production",
    url: "https://www.manojevents.in/",
    previewImage: review2,
    deliverables: [
      "Custom Web Application",
      "Brand Visual Identity",
      "Interactive Booking Interface",
    ],
    client: {
      name: "Manoj Vuddagiri",
      role: "CEO & MD, Manoj Events",
    },
    quote:
      "Thinksphere understands branding and user experience deeply. Our conversions increased after launch.",
    highlights: [
      "Custom responsive web architecture",
      "High-converting inquiry flow",
      "Refined visual presentation",
    ],
  },
  {
    id: "bhuvan-biologicals",
    title: "Bhuvan Biologicals",
    domain: "Agri-Bio Science & Distribution",
    url: "https://bhuvanbiologicals.in/",
    previewImage: review3,
    deliverables: [
      "Corporate Digital Platform",
      "Product Catalog System",
      "Brand Architecture",
    ],
    client: {
      name: "Bhuvan Cheerala",
      role: "COO, Bhuvan Biologicals",
    },
    quote:
      "Professional, reliable, and creative. Thinksphere exceeded expectations in every aspect.",
    highlights: [
      "Structured product catalog system",
      "Clean corporate positioning",
      "Optimized load times and UX",
    ],
  },
  {
    id: "indrakshi-travels",
    title: "Indrakshi Travels",
    domain: "Travel & Fleet Logistics",
    url: "https://indrakshitravels.com/",
    previewImage: review1,
    deliverables: [
      "Fleet Booking Experience",
      "Mobile-First Design",
      "Responsive Web Application",
    ],
    client: {
      name: "Sujith Indrakshi",
      role: "Manager, Indrakshi Travels",
    },
    quote:
      "Beautiful UI and smooth performance. The execution quality was truly impressive.",
    highlights: [
      "Intuitive vehicle catalog & routes",
      "Seamless mobile booking journey",
      "Fast, fluid interface performance",
    ],
  },
];

function CaseStudyCard({ study, index }) {
  return (
    <article className="case-study-card">
      <div className="case-study-info">
        <div className="case-study-meta">
          <span className="case-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="case-domain">{study.domain}</span>
        </div>

        <h3 className="case-title">{study.title}</h3>

        <p className="case-deliverables-label">
          Scope & Engineering Deliverables
        </p>

        <div className="deliverable-chips">
          {study.deliverables.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        {study.client && study.quote && (
          <div className="client-quote-box">
            <div className="quote-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            <blockquote className="quote-text">
              "{study.quote}"
            </blockquote>

            <div className="client-author">
              <span className="author-name">{study.client.name}</span>
              <span className="author-role">{study.client.role}</span>
            </div>
          </div>
        )}

        <div className="case-action">
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-visit-btn"
          >
            <span>Visit Live Platform</span>
            <span className="external-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="case-study-visual">
        <div className="visual-browser-mockup">
          <div className="browser-topbar">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-url">
              {study.url.replace("https://", "").replace("/", "")}
            </div>
          </div>

          <div className="browser-preview">
            <img
              src={study.previewImage}
              alt={`${study.title} website preview`}
              className="preview-img"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="case-highlights-list">
          {study.highlights.map((highlight) => (
            <li key={highlight}>
              <span className="highlight-bullet">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="work" className="case-studies-section">
      <div className="section-container">

        <div className="section-header-block">
          <div className="section-pill-tag">Selected Work</div>

          <h2 className="section-heading">
            Real products. Real businesses. Thoughtful engineering.
          </h2>

          <p className="section-description">
            Explore selected digital experiences designed and engineered by
            Thinksphere for businesses across different industries.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="case-studies-stack">
          {featuredCaseStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={idx}
            />
          ))}
        </div>

        {/* More Case Studies */}
        <div className="more-case-studies-wrapper">
          <button
            type="button"
            className="view-more-case-studies"
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
          >
            <span>
              {showMore
                ? "Hide Additional Case Studies"
                : "View More Case Studies"}
            </span>

            <span
              className={`view-more-arrow ${
                showMore ? "is-open" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        {showMore && (
          <div className="case-studies-stack additional-case-studies">
            {additionalCaseStudies.map((study, idx) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={idx + featuredCaseStudies.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}