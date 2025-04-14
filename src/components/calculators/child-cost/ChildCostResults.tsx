
import React from 'react';

interface ChildCostResultsProps {
  monthlyCost: number;
  yearlyCost: number;
  totalCostToAdulthood: number;
  includeUniversity: boolean;
  formatCurrency: (value: number) => string;
}

const ChildCostResults: React.FC<ChildCostResultsProps> = ({
  monthlyCost,
  yearlyCost,
  totalCostToAdulthood,
  includeUniversity,
  formatCurrency
}) => {
  return (
    <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
      <h3 className="text-2xl font-serif mb-8">Stima dei costi di crescita</h3>
      
      <div className="space-y-8">
        <div>
          <p className="text-gray-300 mb-2">Costo mensile stimato:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(monthlyCost)}
          </p>
        </div>
        
        <div>
          <p className="text-gray-300 mb-2">Costo annuale stimato:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(yearlyCost)}
          </p>
        </div>
        
        <div>
          <p className="text-gray-300 mb-2">Costo totale fino all&apos;età adulta:</p>
          <p className="text-4xl font-serif font-medium text-toro-gold">
            {formatCurrency(totalCostToAdulthood)}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Questa stima include i costi dalla fascia d&apos;età attuale fino all&apos;età adulta 
            {includeUniversity ? ", inclusa l'università" : ", esclusa l'università"}.
          </p>
        </div>
        
        <div className="pt-6 border-t border-white/20">
          <p className="text-gray-300 mb-2">Per preparare un fondo studio:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(totalCostToAdulthood * 0.4)}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Si consiglia di accantonare circa il 40% del costo totale per le spese di istruzione future.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-white/10 rounded-md">
        <p className="text-sm">
          Un consulente finanziario indipendente può aiutarti a pianificare il futuro dei tuoi figli
          e a creare un piano di risparmio e investimento personalizzato per la loro educazione.
        </p>
      </div>
    </div>
  );
};

export default ChildCostResults;
