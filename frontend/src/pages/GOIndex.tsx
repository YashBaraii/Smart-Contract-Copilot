
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutGas from "../components/sections/AboutGas";
import Strategies from "../components/sections/Strategies";
import Features from "../components/sections/Features";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleScrollToElement = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href?.startsWith('#')) return;
      
      e.preventDefault();
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScrollToElement);
    });
    
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScrollToElement);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutGas id="about" />
        <Strategies id="strategies" />
        <Features id="features" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
