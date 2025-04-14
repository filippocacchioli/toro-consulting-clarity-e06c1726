
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalculatorsHub from '../components/calculators/CalculatorsHub';
import CookieConsent from '../components/CookieConsent';

const CalcolatoreRisparmio = () => {
  useEffect(() => {
    document.title = "Calcolatori Finanziari | TORO Consulting";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Utilizza i nostri calcolatori finanziari gratuiti per pianificare il tuo budget, stimare le rate del mutuo, calcolare i costi per i figli e molto altro.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <CalculatorsHub />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default CalcolatoreRisparmio;
