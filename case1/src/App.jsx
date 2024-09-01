import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css'; 
import BestSection from './components/BestSection';
import WhyJoinUs from './components/WhyJoinUsSection';

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
      <WhyJoinUs />
    </div>
  );
}

export default App;
