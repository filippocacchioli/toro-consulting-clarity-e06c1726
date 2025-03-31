
import React from 'react';
import { Check, X } from 'lucide-react';

const Differentiator = () => {
  const comparisons = [
    {
      category: "Trasparenza sui costi",
      toro: "Fee chiare e trasparenti, nessun costo nascosto.",
      others: "Costi spesso poco chiari, commissioni nascoste nei prodotti."
    },
    {
      category: "Indipendenza",
      toro: "Scelta tra migliaia di soluzioni senza conflitti d'interesse.",
      others: "Limitati ai prodotti della banca o rete di appartenenza."
    },
    {
      category: "Personalizzazione",
      toro: "Piani costruiti interamente su misura delle tue esigenze.",
      others: "Soluzioni standardizzate con minime personalizzazioni."
    },
    {
      category: "Education",
      toro: "Formazione continua, coaching e supporto decisionale.",
      others: "Informazioni limitate, focus sulla vendita del prodotto."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Perché scegliere TORO Consulting?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A differenza di altri consulenti, noi non vendiamo prodotti: ottimizziamo il tuo patrimonio con soluzioni neutre e personalizzate.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left font-serif text-lg text-toro-dark">Caratteristica</th>
                <th className="py-4 px-6 text-left font-serif text-lg text-toro-gold">TORO Consulting</th>
                <th className="py-4 px-6 text-left font-serif text-lg text-toro-dark">Consulenti Tradizionali</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-6 border-t border-gray-200 font-medium">{item.category}</td>
                  <td className="py-4 px-6 border-t border-gray-200 text-toro-dark">
                    <div className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>{item.toro}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-t border-gray-200 text-toro-dark">
                    <div className="flex items-start">
                      <X className="text-red-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
