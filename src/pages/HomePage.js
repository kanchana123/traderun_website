import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import AppLinksSection from '../components/AppLinksSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AppLinksSection />
    </main>
  );
};

export default HomePage;