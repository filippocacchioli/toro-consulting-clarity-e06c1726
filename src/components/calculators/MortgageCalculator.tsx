
import React, { useState, useEffect } from 'react';
import { Home, Info } from 'lucide-react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTermYears]);

  const calculateMortgage = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Total number of payments
    const totalPayments = loanTermYears * 12;
    
    // Calculate monthly payment
    // Formula: P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // where P = payment, L = loan amount, c = monthly interest rate, n = total number of payments
    if (monthlyRate === 0) {
      // If interest rate is 0, simple division
      const payment = loanAmount / totalPayments;
      setMonthlyPayment(payment);
      setTotalInterest(0);
      setTotalCost(loanAmount);
    } else {
      const payment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
      
      setMonthlyPayment(payment);
      
      // Calculate total interest
      const totalInterestPaid = (payment * totalPayments) - loanAmount;
      setTotalInterest(totalInterestPaid);
      setTotalCost(loanAmount + totalInterestPaid);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="flex items-center mb-8">
          <Home className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola la rata del mutuo</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Importo del mutuo
            </label>
            <input
              type="number"
              min="10000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Tasso di interesse annuo (%)
            </label>
            <input
              type="number"
              min="0"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Durata del mutuo (anni)
            </label>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>5 anni</span>
              <span>{loanTermYears} anni</span>
              <span>40 anni</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
            <Info className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Questo calcolo fornisce una stima della rata mensile del tuo mutuo. La rata effettiva potrebbe variare in base 
              a fattori specifici come tipo di tasso (fisso, variabile), spese accessorie e condizioni dell'istituto di credito.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
        <h3 className="text-2xl font-serif mb-8">Risultati del calcolo</h3>
        
        <div className="space-y-8">
          <div>
            <p className="text-gray-300 mb-2">Rata mensile stimata:</p>
            <p className="text-4xl font-serif font-medium text-toro-gold">
              {formatCurrency(monthlyPayment)}
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Totale interessi da pagare:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(totalInterest)}
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Costo totale del mutuo:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(totalCost)}
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-2">Rapporto interessi/capitale:</p>
            <p className="text-3xl font-serif font-medium">
              {(totalInterest / loanAmount * 100).toFixed(2)}%
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/10 rounded-md">
          <p className="text-sm">
            Un consulente finanziario indipendente può aiutarti a trovare le migliori condizioni di mutuo
            sul mercato e a ottimizzare il tuo piano di ammortamento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
