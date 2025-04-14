
import React from 'react';

type BabyExpenseResultsProps = {
  totalEssential: number;
  totalOptional: number;
  totalExpenses: number;
  formatCurrency: (value: number) => string;
};

const BabyExpenseResults: React.FC<BabyExpenseResultsProps> = ({
  totalEssential,
  totalOptional,
  totalExpenses,
  formatCurrency,
}) => {
  return (
    <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
      <h3 className="text-2xl font-serif mb-8">Costo del primo anno di vita</h3>
      
      <div className="space-y-8">
        <div>
          <p className="text-gray-300 mb-2">Spese essenziali:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(totalEssential)}
          </p>
          <p className="text-sm text-gray-300">
            Queste sono spese difficili da evitare per il benessere del bambino.
          </p>
        </div>
        
        <div>
          <p className="text-gray-300 mb-2">Spese opzionali:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(totalOptional)}
          </p>
          <p className="text-sm text-gray-300">
            Queste spese possono essere ridotte o eliminate in base alle tue priorità.
          </p>
        </div>
        
        <div>
          <p className="text-gray-300 mb-2">Costo totale stimato:</p>
          <p className="text-4xl font-serif font-medium text-toro-gold">
            {formatCurrency(totalExpenses)}
          </p>
        </div>
        
        <div className="pt-6 border-t border-white/20">
          <p className="text-gray-300 mb-2">Media mensile:</p>
          <p className="text-3xl font-serif font-medium">
            {formatCurrency(totalExpenses / 12)}
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Questa è una stima di quanto dovrai spendere mensilmente per il tuo bambino nel primo anno di vita.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-white/10 rounded-md">
        <p className="text-sm">
          Un consulente finanziario può aiutarti a pianificare le spese per l'arrivo di un bambino
          e a creare un fondo destinato alla sua educazione futura.
        </p>
      </div>
    </div>
  );
};

export default BabyExpenseResults;
