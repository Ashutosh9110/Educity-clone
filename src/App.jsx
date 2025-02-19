import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";

import About from "./components/about/About";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <About setPlayState={setPlayState}/>
      </div>
    </div>
  )
}

export default App;
