import { useEffect, useRef, useState } from "react";
import "./PremiumReviews.css";
import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/marvelousMart.png";

const reviews = [
  {
    image: review2,
    stars: "★★★★★",
    text:
      "Thinkphere understands branding and user experience deeply. Our conversions increased after launch.",
    name: "Manoj Vuddagiri",
    role: "CEO & MD Manoj Events",
    url: "https://www.manojevents.in/",
  },
  {
    image: review3,
    stars: "★★★★★",
    text:
      "Professional, reliable, and creative. Thinkphere exceeded expectations in every aspect.",
    name: "Karthik",
    role: "MD Marvelous Mart",
    url: "https://www.marvelousmart.com/",
  },
  {
    image: review1,
    stars: "★★★★★",
    text:
      "Beautiful UI and smooth performance. The execution quality was truly impressive.",
    name: "Sujith Indrakshi",
    role: "Manager Indrakshi Travels",
    url: "https://indrakshitravels.com/",
  },
];

export default function Reviews() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  // auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % reviews.length;
      setIndex(next);

      sliderRef.current.scrollTo({
        left: next * window.innerWidth,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const goTo = (i) => {
    setIndex(i);
    sliderRef.current.scrollTo({
      left: i * window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews-title">What Our Clients Say</h2>

      <div className="reviews-slider" ref={sliderRef}>
        {reviews.map((item, i) => (
          <div className="review-slide" key={i}>
            <div className="review-card">
              <div className="review-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="stars">{item.stars}</div>
              <p className="review-text">“{item.text}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="review-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
