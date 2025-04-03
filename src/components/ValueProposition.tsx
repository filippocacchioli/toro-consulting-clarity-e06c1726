import React from 'react';
import { Target, LineChart, BookOpen } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: (
        <svg className="h-12 w-12 text-toro-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12L4 16M4 16V13M4 16H7" />
          <path d="M16 12L20 8M20 8V11M20 8H17" />
          <path d="M7 8H5C3.89543 8 3 8.89543 3 10V11" />
          <path d="M17 16H19C20.1046 16 21 15.1046 21 14V13" />
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
