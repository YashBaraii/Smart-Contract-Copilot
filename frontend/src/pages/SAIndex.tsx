
import React from 'react';
import Navigation from '@/components/SANavigation';
import Hero from '@/components/SAHero';
import Features from '@/components/SAFeatures';
import WhyAutomatedSecurity from '@/components/SAWhyAutomatedSecurity';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyAutomatedSecurity />
    </div>
  );
};

export default Index;
