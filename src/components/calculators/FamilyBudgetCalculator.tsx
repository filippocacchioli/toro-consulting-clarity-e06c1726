
import React, { useState, useEffect } from 'react';
import { Home, PieChart, HelpCircle } from 'lucide-react';

type Expense = {
  category: string;
  amount: number;
};

const defaultExpenses: Expense[] = [
  { category: 'Casa (Affitto/Mutuo)', amount: 800 },
  { category: 'Bollette e Utenze', amount: 250 },
  { category: 'Alimentazione', amount: 400 },
  { category: 'Trasporti', amount: 200 },
  { category: 'Salute', amount: 100 },
  { category: 'Istruzione', amount: 50 },
  { category: 'Abbigliamento', amount: 100 },
  { category: 'Tempo Libero', amount: 150 },
  { category: 'Risparmio', amount: 200 },
  { category: 'Altro', amount: 100 },
];

const FamilyBudgetCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(2500);
  const [expenses, setExpenses] = useState<Expense[]>([...defaultExpenses]);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [budgetHealth, setBudgetHealth] = useState<string>('');
  const [budgetHealthColor, setBudgetHealthColor] = useState<string>('');

  useEffect(() => {
    calculateBudget();
  }, [monthlyIncome, expenses]);

  const calculateBudget = () => {
    const total = expenses.reduce((sum, expense) => sum + (expense.amount || 0), 0);
    setTotalExpenses(total);
    
    const balanceAmount = monthlyIncome - total;
    setBalance(balanceAmount);
    
    // Determine budget health
    const ratio = balanceAmount / monthlyIncome;
    if (balanceAmount < 0) {
      setBudgetHealth('In difficoltà');
      setBudgetHealthColor('text-red-500');
    } else if (ratio < 0.1) {
      setBudgetHealth('A rischio');
      setBudgetHealthColor('text-orange-500');
    } else if (ratio < 0.2) {
      setBudgetHealth('Bilanciato');
      setBudgetHealthColor('text-yellow-500');
    } else {
      setBudgetHealth('Eccellente');
      setBudgetHealthColor('text-green-500');
    }
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
          <Home className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola il tuo budget familiare</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Reddito mensile netto
            </label>
            <input
              type="number"
              min="0"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            />
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-4">Spese mensili</h4>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <label className="block text-sm text-toro-dark w-1/2">
                    {expense.category}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={expense.amount}
                    onChange={(e) => handleExpenseChange(index, Number(e.target.value))}
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
            <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Un budget familiare ben bilanciato dovrebbe prevedere almeno un 20% del reddito da destinare al risparmio e agli investimenti.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
        <h3 className="text-2xl font-serif mb-8">Analisi del tuo budget</h3>
        
        <div className="space-y-8">
          <div>
            <p className="text-gray-300 mb-2">Reddito mensile:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(monthlyIncome)}
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Totale spese mensili:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(totalExpenses)}
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Bilancio mensile:</p>
            <p className={`text-4xl font-serif font-medium ${balance >= 0 ? 'text-toro-gold' : 'text-red-400'}`}>
              {formatCurrency(balance)}
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-2">Stato del budget:</p>
            <p className={`text-4xl font-serif font-medium ${budgetHealthColor}`}>
              {budgetHealth}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              {balance < 0 
                ? 'Le tue spese superano le entrate. Rivedi il budget per trovare aree di risparmio.' 
                : balance / monthlyIncome < 0.1 
                ? 'Il tuo margine è molto ridotto. Considera di aumentare i risparmi.'
                : balance / monthlyIncome < 0.2
                ? 'Il tuo budget è bilanciato ma potresti aumentare i risparmi.'
                : 'Ottimo lavoro! Hai un buon margine per risparmi e investimenti.'}
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/10 rounded-md">
          <p className="text-sm">
            Un consulente finanziario indipendente può aiutarti a ottimizzare il tuo budget familiare
            e a sviluppare una strategia personalizzata di risparmio e investimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilyBudgetCalculator;
