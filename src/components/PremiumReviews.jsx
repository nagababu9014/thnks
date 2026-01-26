import { useEffect, useRef } from "react";
import "./PremiumReviews.css";

const reviews = [
  {
    image: "/src/assets/reviews/review2.png",
    stars: "★★★★★",
    text:
      "Thinkphere understands branding and user experience deeply. Our conversions increased after launch.",
    name: "Manoj Vuddagiri",
    role: "CEO & MD Manoj Events",
    url: "https://www.manojevents.in/",
  },
  {
    image: "/src/assets/reviews/review3.png",
    stars: "★★★★★",
    text:
      "Professional, reliable, and creative. Thinkphere exceeded expectations in every aspect.",
    name: "Bhuvan Cheerala",
    role: "COO Bhuvan Biologicals",
    url: "https://bhuvanbiologicals.in/",
  },
  {
    image: "/src/assets/reviews/review1.png",
    stars: "★★★★★",
    text:
      "Beautiful UI and smooth performance. The execution quality was truly impressive.",
    name: "Sujith Indrakshi",
    role: "Manager Indrakshi Travels",
    url: "https://indrakshitravels.com/",
  },
];


export default function Reviews() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let playing = true;

    const interval = setInterval(() => {
      track.style.animationPlayState = playing ? "paused" : "running";
      playing = !playing;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews" id= "reviews">
      <h2 className="reviews-title">What Our Clients Say</h2>

      <div className="reviews-slider">
        <div className="reviews-track" ref={trackRef}>
          {[...reviews, ...reviews].map((item, index) => (
           <div className="review-card" key={index}>
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

          ))}
        </div>
      </div>
    </section>
  );
}

