import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css'; // Üçgen için gerekli CSS stilini içe aktarın

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='relative'>
        <div className="triangle-bg"></div>
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}

export default App;
