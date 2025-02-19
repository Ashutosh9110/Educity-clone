import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import About from "./components/about/About";
import Title from "./components/title/title";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState}/>
        <Title subTitle="Contact Us" title="Get in touch" />
        <Footer />
      </div>
    </div>
  )
}

export default App;
