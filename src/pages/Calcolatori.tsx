
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalculatorsHub from '../components/calculators/CalculatorsHub';
import CookieConsent from '../components/CookieConsent';

const Calcolatori = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Calcolatori Finanziari | TORO Consulting";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Strumenti di calcolo finanziario gratuiti: budget familiare, crescita patrimoniale, mutui, prestiti personali e costi dei figli. Pianifica il tuo futuro finanziario.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">Strumenti di Calcolo Finanziario</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Utilizza i nostri calcolatori gratuiti per pianificare le tue finanze in modo semplice ed efficace.
            </p>
          </div>
        </div>
        <CalculatorsHub />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Calcolatori;
