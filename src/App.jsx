import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import About from "./components/about/About";
import Title from "./components/title/title";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
