
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, LineChart, ArrowRight } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">Risorse Educative</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Guide per Principianti</h3>
            <p className="text-gray-600 mb-6">
              Risorse fondamentali per chi si avvicina per la prima volta al mondo degli investimenti.
            </p>
            <Link 
              to="/risorse/principianti" 
              className="inline-flex items-center text-toro-gold font-medium hover:underline"
            >
              Esplora le guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-toro-gold/5 p-8 rounded-lg shadow-sm border border-toro-gold/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Webinar e Workshop</h3>
            <p className="text-gray-600 mb-6">
              Sessioni interattive per approfondire strategie di investimento e analisi dei mercati.
            </p>
            <Link 
              to="/webinar" 
              className="inline-flex items-center text-toro-gold font-medium hover:underline"
            >
              Calendario eventi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
              <LineChart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Strumenti e Calcolatori</h3>
            <p className="text-gray-600 mb-6">
              Tool interattivi per pianificare i tuoi obiettivi finanziari e monitorare i progressi.
            </p>
            <Link 
              to="/strumenti" 
              className="inline-flex items-center text-toro-gold font-medium hover:underline"
            >
              Accedi agli strumenti
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
