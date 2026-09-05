import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle ambient gradient mesh */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="section-container hero-container">
        {/* Hero Header Content */}
        <div className="hero-header-content">
          <div className="hero-pill-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span>Digital Product & Software Engineering Studio</span>
          </div>

          <h1 className="hero-headline">
            We engineer custom software, web platforms, and scalable digital products.
          </h1>

          <p className="hero-subheadline">
            From modern web applications and multi-tenant SaaS platforms to custom ERPs and mobile experiences, 
            Thinksphere designs and delivers high-performance digital systems built to solve real operational challenges.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="hero-primary-btn"
              onClick={() => scrollTo("contact")}
            >
              Start a Project
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              className="hero-secondary-btn"
              onClick={() => scrollTo("work")}
            >
              View Featured Work ↓
            </button>
          </div>
        </div>

        {/* The Restrained Product UI Bento */}
        <div className="hero-bento-wrapper" aria-label="Software interface preview">
          {/* Main Console Window */}
          <div className="bento-card bento-main-console">
            {/* Window Header */}
            <div className="console-window-bar">
              <div className="window-dots" aria-hidden="true">
                <span className="dot dot-close" />
                <span className="dot dot-minimize" />
                <span className="dot dot-expand" />
              </div>
              <div className="window-address-bar">
                <span className="secure-icon" aria-hidden="true">🔒</span>
                <span>app.thinksphere.in/overview</span>
              </div>
              <div className="window-status-pill">
                <span className="status-live-dot" />
                <span>Production</span>
              </div>
            </div>

            {/* Console Body */}
            <div className="console-window-body">
              {/* Left Mini Sidebar */}
              <aside className="console-sidebar" aria-hidden="true">
                <div className="sidebar-brand">TS Platform</div>
                <ul className="sidebar-nav">
                  <li className="active">Overview</li>
                  <li>Applications</li>
                  <li>Architecture</li>
                  <li>Databases</li>
                  <li>Analytics</li>
                </ul>
              </aside>

              {/* Main Dashboard Canvas */}
              <div className="console-main-view">
                <div className="console-metrics-row">
                  <div className="metric-box">
                    <span className="metric-label">System State</span>
                    <span className="metric-val text-emerald">Healthy</span>
                    <span className="metric-sub">All microservices active</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Target Architecture</span>
                    <span className="metric-val">Web & Cloud SaaS</span>
                    <span className="metric-sub">Modular & scalable</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-label">Engineering Focus</span>
                    <span className="metric-val">Performance</span>
                    <span className="metric-sub">Clean code & low latency</span>
                  </div>
                </div>

                {/* Architecture Visual Pipeline */}
                <div className="console-pipeline-card">
                  <div className="pipeline-header">
                    <span className="pipeline-title">System Architecture Flow</span>
                    <span className="pipeline-tag">Full-Stack Production</span>
                  </div>
                  <div className="pipeline-nodes">
                    <div className="node-box">
                      <span className="node-type">Frontend</span>
                      <span className="node-name">Web & Mobile Clients</span>
                    </div>
                    <span className="node-connector" aria-hidden="true">→</span>
                    <div className="node-box active-node">
                      <span className="node-type">Gateway</span>
                      <span className="node-name">REST / GraphQL API</span>
                    </div>
                    <span className="node-connector" aria-hidden="true">→</span>
                    <div className="node-box">
                      <span className="node-type">Logic</span>
                      <span className="node-name">ERP & SaaS Core</span>
                    </div>
                    <span className="node-connector" aria-hidden="true">→</span>
                    <div className="node-box">
                      <span className="node-type">Storage</span>
                      <span className="node-name">Relational DB & Cache</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Bento Grid Cards */}
          <div className="bento-side-grid">
            {/* Card 1: Capabilities Checklist */}
            <div className="bento-card bento-capabilities-card">
              <h3 className="bento-card-title">Engineering Capabilities</h3>
              <ul className="capabilities-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Modern, high-performance web applications</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Custom ERP & operational workflow engines</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>End-to-end multi-tenant SaaS platforms</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Responsive, cross-platform mobile apps</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Deployment Status Card */}
            <div className="bento-card bento-deployment-card">
              <div className="deployment-header">
                <span className="deployment-label">CI / CD Deployment Pipeline</span>
                <span className="deployment-badge">Release v2.4</span>
              </div>
              <div className="deployment-code-row">
                <code className="code-text">$ vite build && automated-tests --passed</code>
              </div>
              <div className="deployment-progress-bar">
                <div className="deployment-progress-fill" style={{ width: "100%" }} />
              </div>
              <div className="deployment-footer">
                <span>Status: Ready for production</span>
                <span className="text-emerald">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

