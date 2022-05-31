import React from "react";
import Best from "./components/Best/Best";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
    </>
  );
}

export default App;
