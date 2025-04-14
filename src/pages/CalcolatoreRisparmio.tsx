
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ComparisonCalculator from '../components/ComparisonCalculator';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

const CalcolatoreRisparmio = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Calcolatore Risparmio | TORO Consulting";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calcola quanto puoi risparmiare utilizzando un consulente finanziario indipendente invece di un consulente tradizionale.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="pt-20 bg-gray-50">
          <div className="container-custom py-10">
            <h1 className="text-4xl font-serif text-center mb-6">Calcolatore di Risparmio</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Scopri quanto puoi risparmiare scegliendo un consulente finanziario indipendente rispetto a uno tradizionale.
            </p>
          </div>
        </div>
        <ComparisonCalculator />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default CalcolatoreRisparmio;
