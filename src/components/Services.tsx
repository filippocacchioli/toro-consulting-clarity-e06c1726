
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Coins, LineChart, BookOpen, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-toro-gold" />,
      title: "Pianificazione Patrimoniale",
      description: "Sviluppiamo strategie personalizzate per gestire e accrescere il tuo patrimonio nel lungo termine.",
      link: "/servizi/pianificazione-patrimoniale"
    },
    {
      icon: <LineChart className="h-12 w-12 text-toro-gold" />,
      title: "Gestione Portafogli",
      description: "Ottimizziamo il tuo portafoglio con un approccio evidence-based e una diversificazione efficace.",
      link: "/servizi/gestione-portafogli"
    },
    {
      icon: (
        <svg className="h-12 w-12 text-toro-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
          <path d="M6 9.5l6 3 6-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Investimento in Oro",
      description: "Ti guidiamo nell'acquisto, custodia e gestione fiscale dell'oro fisico come riserva di valore.",
      link: "/servizi/investimento-oro"
    },
    {
      icon: <Coins className="h-12 w-12 text-toro-gold" />,
      title: "Crypto e Asset Digitali",
      description: "Consulenza specializzata su Bitcoin e asset digitali, dalle basi alla self-custody avanzata.",
      link: "/servizi/crypto-asset-digitali"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-toro-gold" />,
      title: "Educazione & Coaching Finanziaria",
      description: "Webinar, corsi e toolkit su misura per aumentare la tua competenza finanziaria.",
      link: "/servizi/educazione-coaching"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">I Nostri Servizi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi di consulenza finanziaria indipendente per soddisfare le tue esigenze.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-medium text-center mb-3 text-toro-dark">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-toro-gold font-medium group-hover:underline"
                  >
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="section-subtitle text-center mb-8">Le Nostre Fee</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-toro-dark text-white">
                  <th className="py-4 px-6 text-left rounded-tl-md">Tipo di Servizio</th>
                  <th className="py-4 px-6 text-left">Modello di Fee</th>
                  <th className="py-4 px-6 text-left rounded-tr-md">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Consulenza Continuativa</td>
                  <td className="py-4 px-6">Da 1.500€/anno o 0,5-1% del patrimonio</td>
                  <td className="py-4 px-6">Fee decrescenti all'aumentare del patrimonio</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Piano Finanziario</td>
                  <td className="py-4 px-6">Da 500€ a 1.500€ una tantum</td>
                  <td className="py-4 px-6">Basato sulla complessità della situazione</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Coaching Finanziario</td>
                  <td className="py-4 px-6">Da 100€/ora</td>
                  <td className="py-4 px-6">Sessioni individuali o di gruppo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Tutte le fee sono trasparenti e concordate in anticipo. Non riceviamo commissioni da terze parti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
