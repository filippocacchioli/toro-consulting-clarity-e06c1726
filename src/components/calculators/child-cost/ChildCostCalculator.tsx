
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useChildCostCalculator } from './useChildCostCalculator';
import ChildCostInputs from './ChildCostInputs';
import ChildCostResults from './ChildCostResults';

const ChildCostCalculator = () => {
  const {
    selectedAgeGroup,
    isPrivateSchool,
    numActivities,
    includeUniversity,
    includeVacations,
    monthlyCost,
    yearlyCost,
    totalCostToAdulthood,
    setSelectedAgeGroup,
    setIsPrivateSchool,
    setNumActivities,
    setIncludeUniversity,
    setIncludeVacations,
    formatCurrency
  } = useChildCostCalculator();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <div className="flex items-center mb-8">
          <GraduationCap className="h-8 w-8 text-toro-gold mr-3" />
          <h3 className="text-2xl font-serif">Calcola i costi di crescita di un figlio</h3>
        </div>
        
        <ChildCostInputs
          selectedAgeGroup={selectedAgeGroup}
          isPrivateSchool={isPrivateSchool}
          numActivities={numActivities}
          includeUniversity={includeUniversity}
          includeVacations={includeVacations}
          setSelectedAgeGroup={setSelectedAgeGroup}
          setIsPrivateSchool={setIsPrivateSchool}
          setNumActivities={setNumActivities}
          setIncludeUniversity={setIncludeUniversity}
          setIncludeVacations={setIncludeVacations}
        />
      </div>
      
      <ChildCostResults
        monthlyCost={monthlyCost}
        yearlyCost={yearlyCost}
        totalCostToAdulthood={totalCostToAdulthood}
        includeUniversity={includeUniversity}
        formatCurrency={formatCurrency}
      />
    </div>
  );
};

export default ChildCostCalculator;
