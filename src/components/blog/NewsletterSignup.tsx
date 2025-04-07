
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Grazie per la tua iscrizione con l'email: ${email}! Ti invieremo presto la guida.`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-toro-gold">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">
              Scarica la Guida Gratuita: 
              <br />"7 Errori da Evitare negli Investimenti"
            </h2>
            <p className="text-white text-lg mb-4">
              Iscriviti alla nostra newsletter per ricevere subito la guida gratuita e restare aggiornato
              con strategie esclusive e analisi dei mercati.
            </p>
            <ul className="text-white space-y-2 mb-6">
              <li className="flex items-center">
                <div className="mr-2 text-lg">✓</div>
                <span>Consigli pratici per evitare errori costosi</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-lg">✓</div>
                <span>Esempi reali e casi studio</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 text-lg">✓</div>
                <span>Strategie utilizzate dai professionisti</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-4 text-toro-dark">Ottieni Subito la Tua Guida</h3>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                    placeholder="Il tuo nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-toro-dark hover:bg-toro-dark-light text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Scarica la Guida Gratuita
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Ci impegniamo a proteggere i tuoi dati. Consulta la nostra 
                  <a href="/privacy" className="text-toro-gold hover:underline"> Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
