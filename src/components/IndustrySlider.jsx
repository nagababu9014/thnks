import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
import "./IndustrySlider.css";


import "swiper/css";

const industries = [
  { title: "Hospitals & Clinics", image: hospitalImg },
  { title: "Schools & Colleges", image: schoolImg },
  { title: "Car Rentals", image: carImg },
  { title: "Hotels & Resorts", image: hotelImg },
  { title: "Restaurants & Cafés", image: restaurantImg },
  { title: "Grocery Stores", image: groceryImg },
  { title: "Raw Material Stores", image: rawImg },
  { title: "Travel & Tourism", image: travelImg },
  { title: "Interior Designers", image: interiorImg },
  { title: "Aqua Farms", image: aquaImg },
];


function IndustryCard({ title, image }) {
  return (
    <div
      className="industry-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3 className="industry-title">{title}</h3>
    </div>
  );
}




function IndustrySlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      centeredSlides
      loop
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
      }}
      style={{ padding: "0 40px" }}
    >
{industries.map((item, index) => (
  <SwiperSlide key={index}>
    <IndustryCard title={item.title} image={item.image} />
  </SwiperSlide>
))}

    </Swiper>
  );
}

export default IndustrySlider;
