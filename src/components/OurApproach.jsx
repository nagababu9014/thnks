import "./OurApproach.css";

const steps = [
  {
    stepNumber: "01",
    phase: "Phase 1",
    title: "Discover & Scope",
    desc: "We begin by analyzing operational bottlenecks, user journeys, and technical constraints to define an unambiguous project roadmap.",
    deliverables: [
      "Requirements Specification",
      "Architecture Feasibility Review",
      "Milestone & Delivery Roadmap",
    ],
  },
  {
    stepNumber: "02",
    phase: "Phase 2",
    title: "Architecture & UI Design",
    desc: "We design clean, intuitive interfaces and structured database schemas focused on long-term scalability and operational clarity.",
    deliverables: [
      "High-Fidelity Interactive Wireframes",
      "Design Tokens & Component System",
      "Database & API Schema Design",
    ],
  },
  {
    stepNumber: "03",
    phase: "Phase 3",
    title: "Engineering & QA",
    desc: "We implement robust frontend and backend code with rigorous automated tests, cross-browser validation, and security best practices.",
    deliverables: [
      "Modular, Production-Ready Code",
      "End-to-End API Integration",
      "Cross-Device & Speed Benchmarking",
    ],
  },
  {
    stepNumber: "04",
    phase: "Phase 4",
    title: "Launch & Support",
    desc: "We ensure seamless production deployment, documentation handover, and ongoing technical support to back your long-term growth.",
    deliverables: [
      "Production Cloud Deployment",
      "Full Code & System Handover",
      "Ongoing Maintenance & Updates",
    ],
  },
];

export default function OurApproach() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-pill-tag">Engineering Framework</div>
          <h2 className="section-heading">
            A disciplined, transparent delivery lifecycle.
          </h2>
          <p className="section-description">
            We follow a structured engineering process designed to eliminate ambiguity, 
            maintain steady velocity, and deliver reliable digital products on schedule.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="approach-grid">
          {steps.map((step) => (
            <div key={step.stepNumber} className="approach-card">
              <div className="step-header">
                <span className="step-num">{step.stepNumber}</span>
                <span className="step-phase">{step.phase}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>

              <div className="step-deliverables">
                <span className="deliverables-title">Key Outputs</span>
                <ul className="deliverables-list">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <span className="deliv-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

