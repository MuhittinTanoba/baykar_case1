import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="triangle-bg"></div>
        <HeroSection />
        <FeatureSection />
    </div>
  );
}

export default App;
