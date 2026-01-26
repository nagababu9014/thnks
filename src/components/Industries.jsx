import IndustrySlider from "./IndustrySlider";

function Industries() {
  return (
    <section
      id="industries"
      style={{
        background: "#ffffff",
        color: "#0f0f0f",
        padding: "120px 0",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Industries We Build For
        </h2>

        <p
          style={{
            marginTop: "12px",
            fontSize: "17px",
            opacity: 0.8,
          }}
        >
          Custom websites designed for real-world businesses
        </p>
      </div>

      {/* Slider */}
      <IndustrySlider />
    </section>
  );
}

export default Industries;
