
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import Differentiator from '../components/Differentiator';
import FinancialCalculator from '../components/calculators/FinancialCalculator';
import ComparisonCalculator from '../components/ComparisonCalculator';
import TestimonialSection from '../components/TestimonialSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CalculatorsHub from '../components/calculators/CalculatorsHub';
import CookieConsent from '../components/CookieConsent';

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
        <Differentiator />
        <CalculatorsHub /> {/* New hub for all calculators */}
        <Services />
        <TestimonialSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
