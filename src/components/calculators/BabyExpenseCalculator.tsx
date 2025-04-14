
import React, { useState, useEffect } from 'react';
import { Baby, ShoppingBag, HelpCircle } from 'lucide-react';

type Expense = {
  category: string;
  amount: number;
  essential: boolean;
};

const defaultExpenses: Expense[] = [
  { category: 'Pannolini', amount: 600, essential: true },
  { category: 'Latte artificiale', amount: 800, essential: false },
  { category: 'Pappe e alimenti', amount: 600, essential: true },
  { category: 'Abbigliamento', amount: 500, essential: true },
  { category: 'Passeggino', amount: 300, essential: true },
  { category: 'Seggiolino auto', amount: 200, essential: true },
  { category: 'Culla/lettino', amount: 300, essential: true },
  { category: 'Giocattoli', amount: 200, essential: false },
  { category: 'Accessori vari', amount: 300, essential: false },
  { category: 'Farmacia e igiene', amount: 200, essential: true },
  { category: 'Visite mediche', amount: 300, essential: true },
  { category: 'Babysitter', amount: 600, essential: false },
];

const BabyExpenseCalculator = () => {
  const [expenses, setExpenses] = useState<Expense[]>([...defaultExpenses]);
  const [totalEssential, setTotalEssential] = useState<number>(0);
  const [totalOptional, setTotalOptional] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [breastfeeding, setBreastfeeding] = useState<boolean>(true);

  useEffect(() => {
    calculateExpenses();
  }, [expenses, breastfeeding]);

  const calculateExpenses = () => {
    let essential = 0;
    let optional = 0;
    
    expenses.forEach(expense => {
      if (expense.category === 'Latte artificiale' && breastfeeding) {
        return; // Skip formula if breastfeeding
      }
      
      if (expense.essential) {
        essential += expense.amount;
      } else {
        optional += expense.amount;
      }
    });
    
    setTotalEssential(essential);
    setTotalOptional(optional);
    setTotalExpenses(essential + optional);
  };

  const handleExpenseChange = (index: number, amount: number) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].amount = amount;
    setExpenses(updatedExpenses);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
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
    </div>
  );
};

export default BabyExpenseCalculator;
