
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionNavigation = (path: string, sectionId: string) => {
    // If we're already on the page, just scroll to the section
    if (window.location.pathname === path) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const yOffset = -100; // Adjust for navbar
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // Navigate to the page first, then scroll to section after page load
      navigate(path);
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          const yOffset = -100;
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-toro-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Logo size="medium" className="mr-3" />
              <div className="text-xl font-serif font-medium text-white">
                TORO Consulting
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Consulenza finanziaria indipendente per aiutarti a raggiungere i tuoi obiettivi con strategie trasparenti e personalizzate.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/filippo-cacchioli-041ab43/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-toro-gold transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-toro-gold transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-toro-gold transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Collegamenti Rapidi</h3>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavigation('/')} className="text-gray-300 hover:text-toro-gold transition-colors">Home</button></li>
              <li><button onClick={() => handleNavigation('/chi-sono')} className="text-gray-300 hover:text-toro-gold transition-colors">Chi Sono</button></li>
              <li><button onClick={() => handleNavigation('/servizi')} className="text-gray-300 hover:text-toro-gold transition-colors">Servizi</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-gray-300 hover:text-toro-gold transition-colors">Blog</button></li>
              <li><button onClick={() => handleNavigation('/contatti')} className="text-gray-300 hover:text-toro-gold transition-colors">Contatti</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Servizi</h3>
            <ul className="space-y-4">
              <li><button onClick={() => handleSectionNavigation('/servizi', 'pianificazione')} className="text-gray-300 hover:text-toro-gold transition-colors">Pianificazione Patrimoniale</button></li>
              <li><button onClick={() => handleSectionNavigation('/servizi', 'gestione')} className="text-gray-300 hover:text-toro-gold transition-colors">Gestione Portafogli</button></li>
              <li><button onClick={() => handleSectionNavigation('/servizi', 'oro')} className="text-gray-300 hover:text-toro-gold transition-colors">Investimento in Oro</button></li>
              <li><button onClick={() => handleSectionNavigation('/servizi', 'crypto')} className="text-gray-300 hover:text-toro-gold transition-colors">Crypto e Asset Digitali</button></li>
              <li><button onClick={() => handleSectionNavigation('/servizi', 'educazione')} className="text-gray-300 hover:text-toro-gold transition-colors">Educazione & Coaching</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-toro-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+39 344 016 44 15</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-toro-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@toroconsulting.it</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-toro-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://maps.google.com/?q=Strada+Comunale+per+Fornio,+37,+43036+Fidenza+PR,+Italy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-toro-gold transition-colors">Via Fornio 37, 43036, Fidenza (PR)</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} TORO Consulting. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => handleNavigation('/privacy')} className="text-gray-400 hover:text-toro-gold transition-colors">Privacy Policy</button>
              <button onClick={() => handleNavigation('/cookies')} className="text-gray-400 hover:text-toro-gold transition-colors">Cookie Policy</button>
              <button onClick={() => handleNavigation('/terms')} className="text-gray-400 hover:text-toro-gold transition-colors">Termini e Condizioni</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
