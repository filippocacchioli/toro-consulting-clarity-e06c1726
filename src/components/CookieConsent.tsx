
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-toro-dark text-white p-4 flex flex-col md:flex-row justify-between items-center z-50 animate-fade-in">
      <p className="mb-4 md:mb-0 mr-4">
        Questo sito utilizza i cookie per migliorare l'esperienza utente. Continuando a navigare, accetti la nostra politica sui cookie.
      </p>
      <div className="flex space-x-4">
        <button 
          className="bg-toro-gold text-white px-4 py-2 rounded hover:bg-toro-gold-light transition-colors"
          onClick={acceptAll}
        >
          Accetta tutti
        </button>
        <button 
          className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white/10 transition-colors"
          onClick={acceptNecessary}
        >
          Solo necessari
        </button>
        <Link to="/cookies" className="text-toro-gold hover:underline flex items-center">
          Dettagli
        </Link>
      </div>
    </div>
  );
};

export default CookieConsent;
