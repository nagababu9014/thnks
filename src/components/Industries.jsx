import hospitalImg from "../assets/hospital.png";
import schoolImg from "../assets/college.png";
import carImg from "../assets/carRentals.png";
import hotelImg from "../assets/hotels.png";
import restaurantImg from "../assets/restaurants.png";
import groceryImg from "../assets/grocery.png";
import rawImg from "../assets/raw.png";
import travelImg from "../assets/tour.png";
import interiorImg from "../assets/interior.png";
import aquaImg from "../assets/aquafarms.png";
import "./Industries.css";

const industries = [
  { title: "Hospitals & Healthcare", category: "MedTech & Health", image: hospitalImg },
  { title: "Schools & Colleges", category: "EdTech & Education", image: schoolImg },
  { title: "Hotels & Resorts", category: "Hospitality & Stay", image: hotelImg },
  { title: "Restaurants & Cafés", category: "Food & Beverage", image: restaurantImg },
  { title: "Travel & Tourism", category: "Fleet & Booking", image: travelImg },
  { title: "Interior Designers", category: "Architecture & Design", image: interiorImg },
  { title: "Car Rentals", category: "Mobility & Logistics", image: carImg },
  { title: "Grocery & Daily Retail", category: "E-Commerce & Retail", image: groceryImg },
  { title: "Commercial Raw Material Stores", category: "B2B Supply & Trade", image: rawImg },
  { title: "Agri & Aquaculture Farms", category: "Agri-Tech & Production", image: aquaImg },
];

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-pill-tag">Industry Verticals</div>
          <h2 className="section-heading">
            Tailored digital solutions across key commercial sectors.
          </h2>
          <p className="section-description">
            We adapt our engineering architecture and interface design to the practical operational 
            demands and customer expectations of each distinct industry.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="industries-grid">
          {industries.map((item, index) => (
            <div key={index} className="industry-sector-card">
              <div
                className="industry-card-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="industry-card-overlay" />
              </div>

              <div className="industry-card-content">
                <span className="industry-category">{item.category}</span>
                <h3 className="industry-name">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

