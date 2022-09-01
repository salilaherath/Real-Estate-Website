import React from 'react';
import Best from './components/Best/Best';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
