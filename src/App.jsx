import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import About from "./components/about/About";
import Title from "./components/title/title";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What student says" />
        <Testimonials  />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
