
import React, { useState, useEffect } from 'react';
import { Calculator, HelpCircle } from 'lucide-react';

const FinancialCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(200);
  const [yearsToGrow, setYearsToGrow] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(7);
  
  const [compoundResult, setCompoundResult] = useState<number>(0);
  const [simpleResult, setSimpleResult] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    calculateResults();
  }, [initialAmount, monthlyDeposit, yearsToGrow, interestRate]);

  const calculateResults = () => {
    // Calculate compound interest
    let futureValue = initialAmount;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = yearsToGrow * 12;
    
    for (let i = 0; i < totalMonths; i++) {
      futureValue = futureValue * (1 + monthlyRate) + monthlyDeposit;
    }
    
    // Calculate simple interest
    const totalDeposited = initialAmount + (monthlyDeposit * totalMonths);
    const simpleInterest = totalDeposited * (1 + (interestRate / 100) * yearsToGrow);
    
    setCompoundResult(Math.round(futureValue));
    setSimpleResult(Math.round(simpleInterest));
    setDifference(Math.round(futureValue - simpleInterest));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Calcolatore di Crescita Patrimoniale</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri la potenza dell'interesse composto e quanto può crescere il tuo patrimonio nel tempo.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <Calculator className="h-8 w-8 text-toro-gold mr-3" />
                <h3 className="text-2xl font-serif">Calcola il tuo potenziale</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-toro-dark mb-2">
                    Capitale iniziale
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-toro-dark mb-2">
                    Deposito mensile
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-toro-dark mb-2">
                    Periodo di investimento (anni)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={yearsToGrow}
                    onChange={(e) => setYearsToGrow(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 anno</span>
                    <span>{yearsToGrow} anni</span>
                    <span>40 anni</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-toro-dark mb-2">
                    Tasso di rendimento annuo (%)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1%</span>
                    <span>{interestRate}%</span>
                    <span>15%</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
                  <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Questa simulazione mostra la differenza tra l'interesse semplice e l'interesse composto. Con l'interesse composto, 
                    guadagni interessi sui tuoi interessi, creando un effetto "palla di neve" sul tuo patrimonio.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-toro-dark to-toro-dark-light text-white p-8 lg:p-12">
              <h3 className="text-2xl font-serif mb-8">Risultati della simulazione</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-gray-300 mb-2">Totale contributi in {yearsToGrow} anni:</p>
                  <p className="text-3xl font-serif font-medium">
                    {formatCurrency(initialAmount + (monthlyDeposit * yearsToGrow * 12))}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-2">Valore finale con interesse composto:</p>
                  <p className="text-4xl font-serif font-medium text-toro-gold">
                    {formatCurrency(compoundResult)}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-2">Valore finale con interesse semplice:</p>
                  <p className="text-3xl font-serif font-medium">
                    {formatCurrency(simpleResult)}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <p className="text-gray-300 mb-2">Guadagno extra grazie all'interesse composto:</p>
                  <p className="text-4xl font-serif font-medium text-toro-gold">
                    {formatCurrency(difference)}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-md">
                <p className="text-sm">
                  Un consulente finanziario indipendente può aiutarti a ottimizzare i tuoi investimenti e 
                  a sfruttare al massimo il potere dell'interesse composto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialCalculator;
