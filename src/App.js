import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />

    </div>
  );
}

export default App;
