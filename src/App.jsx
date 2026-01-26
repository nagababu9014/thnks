import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import About from "./components/About";
import PremiumReviews from "./components/PremiumReviews";
import Services from "./components/Services";
import OurApproach from "./components/OurApproach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main className="page-wrapper">
        <Hero />
        <Industries />
        <Services />
        <PremiumReviews />
        <About />
        <OurApproach />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}

export default App;
