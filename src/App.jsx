import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import OurApproach from "./components/OurApproach";
import Industries from "./components/Industries";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main id="main-content">
        <Hero />
        <CaseStudies />
        <Services />
        <OurApproach />
        <Industries />
        <About />
        <Contact />
      </main>

      {/* SEMANTIC FOOTER OUTSIDE MAIN */}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

