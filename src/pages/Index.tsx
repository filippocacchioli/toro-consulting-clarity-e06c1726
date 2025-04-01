
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import Differentiator from '../components/Differentiator';
import FinancialCalculator from '../components/FinancialCalculator';
import ComparisonCalculator from '../components/ComparisonCalculator';
import TestimonialSection from '../components/TestimonialSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "TORO Consulting | Consulenza Finanziaria Indipendente";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TORO Consulting offre consulenza finanziaria indipendente, pianificazione patrimoniale, gestione portafogli, investimenti in oro e crypto con un approccio trasparente e personalizzato.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <FinancialCalculator />
        <ComparisonCalculator />
        <Differentiator />
        <Services />
        <TestimonialSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-toro-dark text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
        <p className="mb-4 md:mb-0 mr-4">
          Questo sito utilizza i cookie per migliorare l'esperienza utente. Continuando a navigare, accetti la mia politica sui cookie.
        </p>
        <div className="flex space-x-4">
          <button className="bg-toro-gold text-white px-4 py-2 rounded hover:bg-toro-gold-light transition-colors">
            Accetta tutti
          </button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Solo necessari
          </button>
          <a href="/cookies" className="text-toro-gold hover:underline flex items-center">
            Dettagli
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
