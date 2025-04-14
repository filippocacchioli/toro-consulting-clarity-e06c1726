import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const ComparisonCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(100000);
  const [yearsToInvest, setYearsToInvest] = useState<number>(10);
  
  const [traditionalCosts, setTraditionalCosts] = useState<number>(0);
  const [independentCosts, setIndependentCosts] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);
  const [percentageSaved, setPercentageSaved] = useState<number>(0);
  
  // Constants for fee calculation
  const TRADITIONAL_UPFRONT_FEE = 2.5; // 2.5% upfront fee (changed from 3%)
  const TRADITIONAL_ANNUAL_FEE = 1.8; // 1.8% annual management fee
  const INDEPENDENT_ANNUAL_FEE = 0.7; // 0.7% annual fee for independent advisor
  
  useEffect(() => {
    calculateComparison();
  }, [investmentAmount, yearsToInvest]);
  
  const calculateComparison = () => {
    // Calculate costs with traditional advisor
    const upfrontFee = investmentAmount * (TRADITIONAL_UPFRONT_FEE / 100);
    let traditionalTotal = upfrontFee;
    let remainingAmount = investmentAmount - upfrontFee;
    
    for (let i = 0; i < yearsToInvest; i++) {
      const annualFee = remainingAmount * (TRADITIONAL_ANNUAL_FEE / 100);
      traditionalTotal += annualFee;
      // Assume 5% annual return for calculation simplicity
      remainingAmount = (remainingAmount - annualFee) * 1.05;
    }
    
    // Calculate costs with independent advisor
    let independentTotal = 0;
    let independentAmount = investmentAmount;
    
    for (let i = 0; i < yearsToInvest; i++) {
      const annualFee = independentAmount * (INDEPENDENT_ANNUAL_FEE / 100);
      independentTotal += annualFee;
      // Assume 5% annual return for calculation simplicity
      independentAmount = (independentAmount - annualFee) * 1.05;
    }
    
    setTraditionalCosts(Math.round(traditionalTotal));
    setIndependentCosts(Math.round(independentTotal));
    setSavings(Math.round(traditionalTotal - independentTotal));
    setPercentageSaved(Math.round(((traditionalTotal - independentTotal) / traditionalTotal) * 100));
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Ammontare dell&apos;investimento (€)
            </label>
            <input
              type="number"
              min="10000"
              step="10000"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Periodo di investimento (anni)
            </label>
            <div className="flex items-center space-x-4">
              <button 
                className={`px-4 py-2 rounded-md border ${yearsToInvest === 5 ? 'bg-toro-gold text-white border-toro-gold' : 'bg-white text-toro-dark border-gray-300'}`}
                onClick={() => setYearsToInvest(5)}
              >
                5 anni
              </button>
              <button 
                className={`px-4 py-2 rounded-md border ${yearsToInvest === 10 ? 'bg-toro-gold text-white border-toro-gold' : 'bg-white text-toro-dark border-gray-300'}`}
                onClick={() => setYearsToInvest(10)}
              >
                10 anni
              </button>
              <button 
                className={`px-4 py-2 rounded-md border ${yearsToInvest === 20 ? 'bg-toro-gold text-white border-toro-gold' : 'bg-white text-toro-dark border-gray-300'}`}
                onClick={() => setYearsToInvest(20)}
              >
                20 anni
              </button>
            </div>
          </div>
          
          <div className="p-6 bg-toro-dark rounded-lg text-white">
            <h4 className="text-xl font-medium mb-4">Confronto commissioni</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Consulente di Banca/Tradizionale:</span>
                <span className="font-medium">{TRADITIONAL_UPFRONT_FEE}% iniziale + {TRADITIONAL_ANNUAL_FEE}% annuo</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Consulente Indipendente:</span>
                <span className="font-medium">{INDEPENDENT_ANNUAL_FEE}% annuo</span>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  * I consulenti tradizionali spesso applicano commissioni iniziali e costi annuali più elevati, oltre a commissioni nascoste nei prodotti venduti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-toro-gold/90 to-toro-gold text-toro-dark p-8 lg:p-12">
        <h3 className="text-2xl font-serif mb-8">I tuoi potenziali risparmi</h3>
        
        <div className="space-y-8">
          <div>
            <p className="text-toro-dark/80 mb-2">Costi totali con consulente tradizionale:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(traditionalCosts)}
            </p>
          </div>
          
          <div>
            <p className="text-toro-dark/80 mb-2">Costi totali con Consulente Indipendente:</p>
            <p className="text-3xl font-serif font-medium">
              {formatCurrency(independentCosts)}
            </p>
          </div>
          
          <div className="pt-6 border-t border-toro-dark/20">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 mr-2" />
              <p className="text-toro-dark/80 mb-2">Il tuo risparmio totale:</p>
            </div>
            <p className="text-5xl font-serif font-bold">
              {formatCurrency(savings)}
            </p>
            <p className="text-xl mt-2">
              ({percentageSaved}% di risparmio)
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="/contatti" 
            className="inline-flex items-center bg-toro-dark text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Parla con un consulente
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCalculator;
