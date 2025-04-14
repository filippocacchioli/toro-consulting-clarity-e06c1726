
import React from 'react';
import { Baby, HelpCircle } from 'lucide-react';
import { Expense } from './types';

type BabyExpenseInputsProps = {
  expenses: Expense[];
  breastfeeding: boolean;
  setBreastfeeding: (value: boolean) => void;
  handleExpenseChange: (index: number, amount: number) => void;
};

const BabyExpenseInputs: React.FC<BabyExpenseInputsProps> = ({
  expenses,
  breastfeeding,
  setBreastfeeding,
  handleExpenseChange,
}) => {
  return (
    <div className="p-8 lg:p-12">
      <div className="flex items-center mb-8">
        <Baby className="h-8 w-8 text-toro-gold mr-3" />
        <h3 className="text-2xl font-serif">Calcola i costi del primo anno</h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="breastfeeding"
            checked={breastfeeding}
            onChange={(e) => setBreastfeeding(e.target.checked)}
            className="h-4 w-4 text-toro-gold focus:ring-toro-gold border-gray-300 rounded"
          />
          <label htmlFor="breastfeeding" className="ml-2 block text-sm text-toro-dark">
            Allattamento al seno
          </label>
        </div>
        
        <div className="mt-6">
          <h4 className="text-lg font-medium mb-4">Spese del primo anno</h4>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {expenses.map((expense, index) => (
              <div key={index} className={`flex items-center justify-between ${expense.category === 'Latte artificiale' && breastfeeding ? 'opacity-50' : ''}`}>
                <label className="block text-sm text-toro-dark w-1/2 flex items-center">
                  {expense.category}
                  {expense.essential ? (
                    <span className="ml-2 bg-toro-gold text-white text-xs px-2 py-0.5 rounded">Essenziale</span>
                  ) : (
                    <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">Opzionale</span>
                  )}
                </label>
                <input
                  type="number"
                  min="0"
                  value={expense.amount}
                  onChange={(e) => handleExpenseChange(index, Number(e.target.value))}
                  className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                  disabled={expense.category === 'Latte artificiale' && breastfeeding}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
          <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            I costi possono variare in base alle tue scelte personali. Considera che molti articoli possono essere acquistati di seconda mano o presi in prestito da amici e familiari.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BabyExpenseInputs;
