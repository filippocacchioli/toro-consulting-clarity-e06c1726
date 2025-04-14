
import React, { useState, useEffect } from 'react';
import { GraduationCap, HelpCircle } from 'lucide-react';

type AgeGroup = {
  name: string;
  ageRange: string;
  monthlyBaseCost: number;
  educationCost: number;
  extracurricularCost: number;
  healthcareCost: number;
  clothingCost: number;
  vacationCost: number;
};

const ageGroups: AgeGroup[] = [
  {
    name: 'Prima infanzia',
    ageRange: '0-3 anni',
    monthlyBaseCost: 400,
    educationCost: 300,
    extracurricularCost: 50,
    healthcareCost: 100,
    clothingCost: 100,
    vacationCost: 500,
  },
  {
    name: 'Infanzia',
    ageRange: '4-10 anni',
    monthlyBaseCost: 350,
    educationCost: 400,
    extracurricularCost: 150,
    healthcareCost: 80,
    clothingCost: 120,
    vacationCost: 600,
  },
  {
    name: 'Preadolescenza',
    ageRange: '11-14 anni',
    monthlyBaseCost: 380,
    educationCost: 500,
    extracurricularCost: 200,
    healthcareCost: 100,
    clothingCost: 150,
    vacationCost: 700,
  },
  {
    name: 'Adolescenza',
    ageRange: '15-18 anni',
    monthlyBaseCost: 450,
    educationCost: 600,
    extracurricularCost: 250,
    healthcareCost: 120,
    clothingCost: 200,
    vacationCost: 800,
  },
  {
    name: 'Università',
    ageRange: '19-25 anni',
    monthlyBaseCost: 700,
    educationCost: 3000,
    extracurricularCost: 200,
    healthcareCost: 150,
    clothingCost: 250,
    vacationCost: 800,
  },
];

const ChildCostCalculator = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<number>(0);
  const [isPrivateSchool, setIsPrivateSchool] = useState<boolean>(false);
  const [numActivities, setNumActivities] = useState<number>(1);
  const [includeUniversity, setIncludeUniversity] = useState<boolean>(true);
  const [includeVacations, setIncludeVacations] = useState<boolean>(true);
  
  const [monthlyCost, setMonthlyCost] = useState<number>(0);
  const [yearlyCost, setYearlyCost] = useState<number>(0);
  const [totalCostToAdulthood, setTotalCostToAdulthood] = useState<number>(0);

  useEffect(() => {
    calculateCosts();
  }, [selectedAgeGroup, isPrivateSchool, numActivities, includeUniversity, includeVacations]);

  const calculateCosts = () => {
    const ageGroup = ageGroups[selectedAgeGroup];
    
    // Calculate monthly costs
    let monthly = ageGroup.monthlyBaseCost;
    
    // Add education costs (monthly equivalent)
    let education = ageGroup.educationCost;
    if (isPrivateSchool) {
      education *= 5; // Private education multiplier
    }
    monthly += (education / 12);
    
    // Add extracurricular activities
    monthly += ageGroup.extracurricularCost * numActivities;
    
    // Add healthcare costs
    monthly += (ageGroup.healthcareCost / 12);
    
    // Add clothing costs
    monthly += (ageGroup.clothingCost / 12);
    
    // Add vacation costs (if selected)
    if (includeVacations) {
      monthly += (ageGroup.vacationCost / 12);
    }
    
    setMonthlyCost(monthly);
    setYearlyCost(monthly * 12);
    
    // Calculate total cost until adulthood
    calculateTotalCost();
  };

  const calculateTotalCost = () => {
    const currentAgeGroup = selectedAgeGroup;
    let total = 0;
    
    // Calculate years remaining in current age group
    const currentGroup = ageGroups[currentAgeGroup];
    const ageRange = currentGroup.ageRange.split('-');
    const startAge = parseInt(ageRange[0]);
    const endAge = parseInt(ageRange[1]);
    const yearsInCurrentGroup = endAge - startAge + 1;
    
    // Add cost for current age group
    total += yearlyCost * yearsInCurrentGroup;
    
    // Add costs for future age groups
    for (let i = currentAgeGroup + 1; i < ageGroups.length; i++) {
      // Skip university if not included
      if (!includeUniversity && i === 4) continue;
      
      const group = ageGroups[i];
      const groupAgeRange = group.ageRange.split('-');
      const groupStartAge = parseInt(groupAgeRange[0]);
      const groupEndAge = parseInt(groupAgeRange[1]);
      const yearsInGroup = groupEndAge - groupStartAge + 1;
      
      // Calculate yearly cost for this group
      let groupMonthly = group.monthlyBaseCost;
      
      // Add education costs
      let education = group.educationCost;
      if (isPrivateSchool) {
        education *= 5;
      }
      groupMonthly += (education / 12);
      
      // Add extracurricular activities
      groupMonthly += group.extracurricularCost * numActivities;
      
      // Add healthcare costs
      groupMonthly += (group.healthcareCost / 12);
      
      // Add clothing costs
      groupMonthly += (group.clothingCost / 12);
      
      // Add vacation costs (if selected)
      if (includeVacations) {
        groupMonthly += (group.vacationCost / 12);
      }
      
      const groupYearly = groupMonthly * 12;
      total += groupYearly * yearsInGroup;
    }
    
    setTotalCostToAdulthood(total);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="flex items-center mb-8">
          <GraduationCap className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola i costi di crescita di un figlio</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Fascia d'età attuale
            </label>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
            >
              {ageGroups.map((group, index) => (
                <option key={index} value={index}>
                  {group.name} ({group.ageRange})
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privateSchool"
              checked={isPrivateSchool}
              onChange={(e) => setIsPrivateSchool(e.target.checked)}
              className="h-4 w-4 text-toro-gold focus:ring-toro-gold border-gray-300 rounded"
            />
            <label htmlFor="privateSchool" className="ml-2 block text-sm text-toro-dark">
              Scuola privata
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-toro-dark mb-2">
              Attività extrascolastiche
            </label>
            <input
              type="range"
              min="0"
              max="5"
              value={numActivities}
              onChange={(e) => setNumActivities(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Nessuna</span>
              <span>{numActivities} attività</span>
              <span>5 attività</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeUniversity"
              checked={includeUniversity}
              onChange={(e) => setIncludeUniversity(e.target.checked)}
              className="h-4 w-4 text-toro-gold focus:ring-toro-gold border-gray-300 rounded"
            />
            <label htmlFor="includeUniversity" className="ml-2 block text-sm text-toro-dark">
              Includi costi universitari
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeVacations"
              checked={includeVacations}
              onChange={(e) => setIncludeVacations(e.target.checked)}
              className="h-4 w-4 text-toro-gold focus:ring-toro-gold border-gray-300 rounded"
            />
            <label htmlFor="includeVacations" className="ml-2 block text-sm text-toro-dark">
              Includi vacanze familiari
            </label>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-md flex items-start">
            <HelpCircle className="h-5 w-5 text-toro-gold mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Questa è una stima basata su dati medi. I costi effettivi possono variare in base alla zona di residenza, 
              allo stile di vita e ad altre scelte personali.
            </p>
          </div>
        </div>
      </div>
      
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
            <p className="text-gray-300 mb-2">Costo totale fino all'età adulta:</p>
            <p className="text-4xl font-serif font-medium text-toro-gold">
              {formatCurrency(totalCostToAdulthood)}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Questa stima include i costi dalla fascia d'età attuale fino all'età adulta 
              {includeUniversity ? ', inclusa l'università' : ', esclusa l'università'}.
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
    </div>
  );
};

export default ChildCostCalculator;
