import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css'; 
import BestSection from './components/BestSection';
import WhyJoinUs from './components/WhyJoinUsSection';
import Testimonials from './components/TestimonialsSection';
import CollectionSection from './components/CollectionSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <div className='relative'>
        <div className="triangle-bg"></div>
        <HeroSection />
        <FeatureSection />
      </div>
      <BestSection />
      <WhyJoinUs />
      <Testimonials />
      <CollectionSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
