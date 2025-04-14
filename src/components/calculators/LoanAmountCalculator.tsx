
import React, { useState, useEffect } from 'react';
import { Calculator, HelpCircle } from 'lucide-react';

const LoanAmountCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number>(500);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [maxLoanAmount, setMaxLoanAmount] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(30);
  const [recommendedIncome, setRecommendedIncome] = useState<number>(0);

  useEffect(() => {
    calculateMaxLoan();
  }, [monthlyPayment, interestRate, loanTermYears, percentage]);

  const calculateMaxLoan = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Total number of payments
    const totalPayments = loanTermYears * 12;
    
    // Calculate maximum loan amount based on the payment
    // Formula (rearranged from payment formula): L = P[((1 + c)^n - 1) / (c(1 + c)^n)]
    // where L = loan amount, P = payment, c = monthly interest rate, n = total number of payments
    if (monthlyRate === 0) {
      // If interest rate is 0, simple multiplication
      const loanAmount = monthlyPayment * totalPayments;
      setMaxLoanAmount(loanAmount);
    } else {
      const loanAmount = monthlyPayment * 
        ((Math.pow(1 + monthlyRate, totalPayments) - 1) / 
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)));
      
      setMaxLoanAmount(loanAmount);
    }
    
    // Calculate recommended income based on percentage
    const recommendedMonthlyIncome = (monthlyPayment * 100) / percentage;
    setRecommendedIncome(recommendedMonthlyIncome);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="flex items-center mb-8">
          <Calculator className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola il capitale finanziabile</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Rata mensile che puoi sostenere
            </label>
            <input
              type="number"
              min="100"
              step="50"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
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
              Durata del finanziamento (anni)
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1 anno</span>
              <span>{loanTermYears} anni</span>
              <span>40 anni</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Percentuale del reddito per la rata (%)
            </label>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10%</span>
              <span>{percentage}%</span>
              <span>50%</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
            <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Gli esperti consigliano di non destinare più del 30-35% del reddito mensile al pagamento della rata del mutuo. 
              Considera anche altre spese e debiti esistenti prima di stabilire la tua capacità di indebitamento.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
        <h3 className="text-2xl font-serif mb-8">Risultati del calcolo</h3>
        
        <div className="space-y-8">
          <div>
            <p className="text-gray-300 mb-2">Capitale massimo finanziabile:</p>
            <p className="text-4xl font-serif font-medium text-toro-gold">
              {formatCurrency(maxLoanAmount)}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Questo è il prestito massimo che potresti ottenere con la rata mensile indicata, 
              al tasso e per la durata specificati.
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Con una rata mensile di:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(monthlyPayment)}
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Reddito mensile consigliato:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(recommendedIncome)}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Per sostenere una rata di {formatCurrency(monthlyPayment)} mensilmente, 
              si consiglia un reddito mensile netto di almeno {formatCurrency(recommendedIncome)}, 
              considerando che la rata rappresenti il {percentage}% del reddito.
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-2">Rapporto rata/reddito:</p>
            <p className={`text-3xl font-serif font-medium ${percentage > 40 ? 'text-red-400' : 'text-toro-gold'}`}>
              {percentage}%
            </p>
            <p className="text-sm text-gray-300 mt-2">
              {percentage > 40 
                ? 'Questa percentuale è considerata alta e potrebbe aumentare il rischio finanziario.' 
                : percentage > 35 
                ? 'Questa percentuale è al limite di ciò che è considerato sostenibile.'
                : 'Questa percentuale è considerata sostenibile per la maggior parte delle situazioni finanziarie.'}
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/10 rounded-md">
          <p className="text-sm">
            Un consulente finanziario indipendente può aiutarti a valutare la tua capacità di indebitamento
            e a trovare le migliori soluzioni di finanziamento per le tue esigenze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanAmountCalculator;
