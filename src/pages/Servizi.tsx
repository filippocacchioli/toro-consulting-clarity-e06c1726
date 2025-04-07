
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { ChevronDown } from 'lucide-react';

const Servizi = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.info('Servizi page mounted');
    };

    handleScroll();

    // Check if there's a scroll target in localStorage
    const scrollTarget = localStorage.getItem('scrollTarget');
    if (scrollTarget) {
      localStorage.removeItem('scrollTarget');
      
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const headerOffset = 200;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          });
          
          console.info(`Scrolled to section: ${scrollTarget} with offset ${headerOffset}px`);
        }
      }, 500);
    }
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const element = servicesRef.current as HTMLElement;
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-toro-dark to-toro-dark-light text-white flex items-center">
          <div className="container-custom text-center pt-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">I Nostri Servizi</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Offriamo consulenza finanziaria indipendente personalizzata per aiutarvi 
              a raggiungere i vostri obiettivi finanziari con fiducia e sicurezza.
            </p>
            <button 
              onClick={scrollToServices}
              className="mx-auto flex items-center justify-center px-6 py-3 bg-toro-gold hover:bg-toro-gold-light text-white rounded-md transition-colors group"
            >
              Esplora i servizi
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </button>
          </div>
        </section>

        {/* Services Section */}
        <div ref={servicesRef}>
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
