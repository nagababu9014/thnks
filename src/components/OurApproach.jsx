import { useEffect, useRef, useState } from "react";
import "./OurApproach.css";

const steps = [
  {
    title: "Understand",
    desc: "We begin by understanding your goals, users, and challenges in depth.",
  },
  {
    title: "Design",
    desc: "We design clean, intuitive interfaces focused on clarity and usability.",
  },
  {
    title: "Build",
    desc: "We develop scalable, high-performance solutions using modern technology.",
  },
  {
    title: "Deliver & Scale",
    desc: "We deliver polished products and support long-term growth.",
  },
];

export default function Approach() {
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="approach" id="approach">
      <h2 className="approach-title">Our Approach</h2>

      <div className="approach-wrapper">
        {/* PROGRESS LINE */}
        <div
          className="approach-line-fill"
          style={{ height: `${(activeIndex / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            data-index={index}
            className={`approach-step ${
              index <= activeIndex ? "active" : ""
            }`}
          >
            <div className="approach-dot" />
            <div className="approach-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
