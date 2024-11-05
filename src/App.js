import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
