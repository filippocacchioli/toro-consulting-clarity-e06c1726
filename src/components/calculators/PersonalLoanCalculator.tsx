
import React, { useState, useEffect } from 'react';
import { Calculator, HelpCircle } from 'lucide-react';

const PersonalLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(48);
  const [includeFees, setIncludeFees] = useState<boolean>(true);
  const [upfrontFee, setUpfrontFee] = useState<number>(200);
  const [monthlyFee, setMonthlyFee] = useState<number>(5);
  
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalFees, setTotalFees] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTermMonths, includeFees, upfrontFee, monthlyFee]);

  const calculateLoan = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Calculate monthly payment (excluding fees)
    if (monthlyRate === 0) {
      // If interest rate is 0, simple division
      const payment = loanAmount / loanTermMonths;
      setMonthlyPayment(payment);
      setTotalInterest(0);
    } else {
      const payment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / 
        (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
      
      setMonthlyPayment(payment);
      
      // Calculate total interest
      const totalInterestPaid = (payment * loanTermMonths) - loanAmount;
      setTotalInterest(totalInterestPaid);
    }
    
    // Calculate fees
    let feesTotal = 0;
    if (includeFees) {
      const upfrontFeeAmount = upfrontFee;
      const monthlyFeesTotal = monthlyFee * loanTermMonths;
      feesTotal = upfrontFeeAmount + monthlyFeesTotal;
    }
    setTotalFees(feesTotal);
    
    // Calculate total cost
    const totalLoanCost = loanAmount + totalInterest + totalFees;
    setTotalCost(totalLoanCost);
    
    // Calculate APR (Approximate)
    // Note: This is a simplified calculation and not the exact APR formula
    const effectiveAmount = loanAmount - (includeFees ? upfrontFee : 0);
    const effectivePayment = monthlyPayment + (includeFees ? monthlyFee : 0);
    const effectiveInterest = ((effectivePayment * loanTermMonths) - effectiveAmount) / effectiveAmount;
    const annualizedRate = effectiveInterest * (12 / loanTermMonths) * 100;
    setApr(annualizedRate);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="flex items-center mb-8">
          <Calculator className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola il tuo prestito personale</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Importo del prestito
            </label>
            <input
              type="number"
              min="1000"
              step="1000"
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
              max="25"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Durata del prestito (mesi)
            </label>
            <input
              type="range"
              min="12"
              max="120"
              step="12"
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>12 mesi</span>
              <span>{loanTermMonths} mesi</span>
              <span>120 mesi</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeFees"
              checked={includeFees}
              onChange={(e) => setIncludeFees(e.target.checked)}
              className="h-4 w-4 text-toro-gold focus:ring-toro-gold border-gray-300 rounded"
            />
            <label htmlFor="includeFees" className="ml-2 block text-sm text-toro-dark">
              Includi spese e commissioni
            </label>
          </div>
          
          {includeFees && (
            <>
              <div>
                <label className="block text-sm font-medium text-toro-dark mb-2">
                  Spese di istruttoria
                </label>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={upfrontFee}
                  onChange={(e) => setUpfrontFee(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-toro-dark mb-2">
                  Spese mensili di gestione
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                />
              </div>
            </>
          )}

          <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
            <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Prima di sottoscrivere un prestito, confronta le offerte di diverse banche e finanziarie. 
              Presta attenzione al TAEG, che include tutti i costi del prestito e consente un confronto più accurato.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
        <h3 className="text-2xl font-serif mb-8">Risultati del calcolo</h3>
        
        <div className="space-y-8">
          <div>
            <p className="text-gray-300 mb-2">Rata mensile:</p>
            <p className="text-4xl font-serif font-medium text-toro-gold">
              {formatCurrency(monthlyPayment + (includeFees ? monthlyFee : 0))}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Questa è la rata che dovrai pagare ogni mese
              {includeFees ? ', incluse le spese di gestione mensili' : ''}.
            </p>
          </div>
          
          <div>
            <p className="text-gray-300 mb-2">Totale interessi da pagare:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(totalInterest)}
            </p>
          </div>
          
          {includeFees && (
            <div>
              <p className="text-gray-300 mb-2">Totale spese e commissioni:</p>
              <p className="text-3xl font-serif font-medium">
                {formatCurrency(totalFees)}
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Include {formatCurrency(upfrontFee)} di spese iniziali e 
                {formatCurrency(monthlyFee * loanTermMonths)} di spese mensili.
              </p>
            </div>
          )}
          
          <div>
            <p className="text-gray-300 mb-2">Costo totale del prestito:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(totalCost)}
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-2">TAEG approssimativo:</p>
            <p className="text-3xl font-serif font-medium">
              {apr.toFixed(2)}%
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Il Tasso Annuo Effettivo Globale (TAEG) include tutti i costi del prestito e rappresenta 
              il costo effettivo annuale. Questa è una stima approssimativa.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-white/10 rounded-md">
          <p className="text-sm">
            Un consulente finanziario indipendente può aiutarti a valutare diverse offerte di prestito
            e a trovare la soluzione più adatta alle tue esigenze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanCalculator;
