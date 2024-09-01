import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css'; 
import BestSection from './components/BestSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="triangle-bg"></div>
        <HeroSection />
        <FeatureSection />
      </div>
      <BestSection />
    </div>
  );
}

export default App;
