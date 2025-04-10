
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contatti = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />

        <section className="py-20 bg-white relative">
          {/* Logo background overlay */}
          <div className="absolute inset-0 flex justify-center items-center z-0 opacity-5 pointer-events-none">
            <img 
              src="/lovable-uploads/a55f00d3-7eb2-4d4b-a54b-90bf6902d2cc.png"
              alt="TORO Consulting Logo Background"
              className="w-2/3 max-w-3xl"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
