import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-toro-dark/95 via-toro-dark/90 to-toro-dark-light/90"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/baf54ec7-8ac0-41e5-8b6b-c347ede16ed2.png')] bg-cover bg-center"></div>
      </div>
      
      {/* Logo background overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-10">
        <img 
          src="/lovable-uploads/a55f00d3-7eb2-4d4b-a54b-90bf6902d2cc.png"
          alt="TORO Consulting Logo Background"
          className="w-1/2 max-w-2xl"
        />
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight animate-fade-in text-white drop-shadow-lg">
            Diventa Manager del tuo Patrimonio: trasforma i tuoi Risparmi in tuoi Dipendenti.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Piani su misura, zero conflitti d'interesse. Massimizziamo i tuoi investimenti con strategie studiate semplici ed efficaci.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contatti" className="btn-primary flex items-center justify-center">
              Prenota una consulenza gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/servizi" className="btn-outline flex items-center justify-center">
              Scopri i nostri servizi
            </Link>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-toro-gold opacity-20 rounded-full blur-3xl animate-pulse-gold"></div>
          <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-6">
              <div className="inline-block p-4 rounded-full bg-toro-gold/20 mb-4">
                <svg className="w-12 h-12 text-toro-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2 text-white">Valuta la Tua Situazione Finanziaria</h3>
              <p className="text-gray-300">Accedi al nostro check-up gratuito del portafoglio</p>
            </div>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome e Cognome" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-toro-gold"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-toro-gold"
              />
              <input 
                type="tel" 
                placeholder="Telefono" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-toro-gold"
              />
              <button className="w-full btn-primary">Richiedi Consulenza</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
