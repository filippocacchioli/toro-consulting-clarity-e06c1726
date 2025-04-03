
import React from 'react';
import { Target, LineChart, BookOpen } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: (
        <svg className="h-12 w-12 text-toro-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14L10 10M14 14L18 10" />
          <path d="M4 10C3 10 2 9 2 8C2 7 3 6 4 6C5 6 6 7 6 8C6 9 5 10 4 10Z" />
          <path d="M10 6C9 6 8 5 8 4C8 3 9 2 10 2C11 2 12 3 12 4C12 5 11 6 10 6Z" />
          <path d="M14 6C13 6 12 5 12 4C12 3 13 2 14 2C15 2 16 3 16 4C16 5 15 6 14 6Z" />
          <path d="M20 10C19 10 18 9 18 8C18 7 19 6 20 6C21 6 22 7 22 8C22 9 21 10 20 10Z" />
          <path d="M4 10L2 12L4 14L6 12L4 10Z" />
          <path d="M20 10L18 12L20 14L22 12L20 10Z" />
          <path d="M12 14l1 1-1 1-1-1z" />
        </svg>
      ),
      title: "Indipendenza",
      description: "Nessun legame con banche o prodotti finanziari. Le nostre raccomandazioni sono sempre nel tuo interesse."
    },
    {
      icon: <Target className="h-12 w-12 text-toro-gold" />,
      title: "Personalizzazione",
      description: "Strategie costruite sui tuoi obiettivi. Ogni piano è unico come le tue esigenze finanziarie."
    },
    {
      icon: <LineChart className="h-12 w-12 text-toro-gold" />,
      title: "Trasparenza",
      description: "Fee chiare, risultati misurabili. Saprai sempre quanto paghi e cosa ottieni in cambio."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-toro-gold" />,
      title: "Coaching",
      description: "Un cliente informato è un cliente migliore. Ti guidiamo verso decisioni finanziarie consapevoli."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">I Nostri Valori</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La nostra missione è offrirti una consulenza finanziaria trasparente, personalizzata e senza conflitti d'interesse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-center mb-3 text-toro-dark">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
