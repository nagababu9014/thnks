import aboutImage from "../assets/about.png";
import "./About.css";

const principles = [
  {
    title: "Architecture-First",
    desc: "We prioritize clean system design and data models before code implementation to prevent technical debt.",
  },
  {
    title: "Performance by Default",
    desc: "Every interface and query is engineered for rapid load times, low latency, and efficient asset delivery.",
  },
  {
    title: "Operational Clarity",
    desc: "We build intuitive interfaces that simplify complex business workflows and empower teams.",
  },
  {
    title: "Long-Term Scalability",
    desc: "Modular architectures built to handle evolving operational demands, traffic growth, and new features.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Visual & Scope */}
          <div className="about-visual-column">
            <div className="about-image-wrapper">
              <img src={aboutImage} alt="Thinksphere Studio" className="about-img" loading="lazy" />
              <div className="about-image-overlay" />
            </div>

            <div className="about-scope-card">
              <div className="scope-indicator">
                <span className="scope-dot" />
                <span className="scope-label">Studio Reach & Operations</span>
              </div>
              <p className="scope-text">
                Headquartered in India (Andhra Pradesh & Telangana), delivering custom software, 
                SaaS, and web platforms for ambitious regional and global enterprises.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial & Principles */}
          <div className="about-content-column">
            <div className="section-pill-tag">About Thinksphere</div>
            <h2 className="about-heading">
              Building digital products at the intersection of strategy, design, and software engineering.
            </h2>

            <p className="about-lead-paragraph">
              Thinksphere is an independent digital studio dedicated to engineering refined, 
              high-performance software solutions. We partner with ambitious founders, established businesses, 
              and enterprise teams to transform complex challenges into scalable, reliable digital systems.
            </p>

            <p className="about-sub-paragraph">
              Our culture is minimal, intentional, and performance-driven. We reject generic templates 
              and decorative gimmicks, focusing squarely on sound architectural principles, clean code, 
              and interfaces that communicate clarity and confidence.
            </p>

            {/* Principles 2x2 Grid */}
            <div className="principles-grid">
              {principles.map((principle, idx) => (
                <div key={idx} className="principle-card">
                  <span className="principle-bullet">▪</span>
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

