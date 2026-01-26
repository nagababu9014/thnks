import { useEffect, useState } from "react";
import Ballpit from "./Ballpit/Ballpit";

function Hero() {
  const [ballCount, setBallCount] = useState(60);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  useEffect(() => {
    let timeout;
    const updateSettings = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const width = window.innerWidth;

        setIsMobile(width < 640);
        setIsSmallMobile(width < 420);

        if (width < 360) {
          setBallCount(12);
        } else if (width < 480) {
          setBallCount(16);
        } else if (width < 768) {
          setBallCount(26);
        } else if (width < 1024) {
          setBallCount(45);
        } else {
          setBallCount(60);
        }
      }, 150);
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#05010d",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
// 🔥 KEY LINE
      }}
    >
      {/* Ballpit background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Ballpit
          count={ballCount}
          // Motion
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          maxVelocity={0.15}
          // Size
          minSize={isSmallMobile ? 0.25 : isMobile ? 0.35 : 0.5}
          maxSize={isSmallMobile ? 0.7 : isMobile ? 0.95 : 1}
          // Lighting
          ambientColor={0xffffff}
          ambientIntensity={0.9}   // slightly reduced for clarity
          lightIntensity={150}     // less bloom
          // Colors
          colors={[
            "#5A5FFF",
            "#6F6CFF",
            "#8B89FF",
            "#FFFFFF",
            "#E1E1E6",
            "#B9BAC5",
          ]}
          // Canvas
          background="#05010d"
          followCursor={false}
          size0={1}
          devicePixelRatio={window.devicePixelRatio} // ensures HD scaling
        />
      </div>

      {/* Vignette overlay */}
{/* Vignette overlay */}
<div
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none", // 🔥 THIS IS THE KEY
    background: isMobile
      ? `
        radial-gradient(
          circle at center,
          rgba(0,0,0,0.75) 0%,
          rgba(0,0,0,0.65) 35%,
          rgba(0,0,0,0.85) 100%
        )
      `
      : `
        radial-gradient(
          circle at center,
          rgba(0,0,0,0.25) 0%,
          rgba(0,0,0,0.55) 45%,
          rgba(0,0,0,0.85) 100%
        )
      `,
  }}
/>


      {/* Hero content */}
<div
  style={{
    position: "relative",
    zIndex: 2,
    pointerEvents: "auto", // 🔥 RE-ENABLE
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
    padding: "0 20px",
  }}
>



        <h1
          style={{
            fontSize: "52px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          ThinkSphere
        </h1>

        <p
          style={{
            maxWidth: "620px",
            fontSize: "18px",
            opacity: 0.9,
            marginTop: "14px",
          }}
        >
          We build modern software and web solutions that power
          next-generation businesses.
        </p>

        <div style={{ display: "flex", gap: "14px", marginTop: "28px" }}>
<button
  onClick={() => scrollTo("contact")}
  style={{
    padding: "12px 30px",
    borderRadius: "999px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    background: "#ffffff",
    color: "#000",
    cursor: "pointer",
  }}
>
  Get Started
</button>

<button
  onClick={() => scrollTo("services")}
  style={{
    padding: "12px 30px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.25)",
    fontSize: "15px",
    background: "transparent",
    color: "#ffffff",
    cursor: "pointer",
  }}
>
  Learn More
</button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
