import "./About.css";
import aboutImage from "../assets/about.png";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImage} alt="Thinksphere Studio" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About Thinksphere</h2>

          <p>
            Thinksphere is a premium digital studio focused on building refined,
            high-performance digital products for modern businesses. We work at
            the intersection of strategy, design, and technology.
          </p>

          <p>
            Our approach is minimal, intentional, and performance-driven. Every
            solution we deliver is crafted to scale, align with business goals,
            and represent our clients with clarity and confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
