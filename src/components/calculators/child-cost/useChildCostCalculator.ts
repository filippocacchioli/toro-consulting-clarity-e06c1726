
import { useState, useEffect } from 'react';
import { ageGroups } from './types';

export const useChildCostCalculator = () => {
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
    calculateTotalCost(monthly * 12);
  };

  const calculateTotalCost = (currentYearlyCost: number) => {
    const currentAgeGroup = selectedAgeGroup;
    let total = 0;
    
    // Calculate years remaining in current age group
    const currentGroup = ageGroups[currentAgeGroup];
    const ageRange = currentGroup.ageRange.split('-');
    const startAge = parseInt(ageRange[0]);
    const endAge = parseInt(ageRange[1]);
    const yearsInCurrentGroup = endAge - startAge + 1;
    
    // Add cost for current age group
    total += currentYearlyCost * yearsInCurrentGroup;
    
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

  return {
    // State values
    selectedAgeGroup,
    isPrivateSchool,
    numActivities,
    includeUniversity,
    includeVacations,
    monthlyCost,
    yearlyCost,
    totalCostToAdulthood,
    
    // State setters
    setSelectedAgeGroup,
    setIsPrivateSchool,
    setNumActivities,
    setIncludeUniversity,
    setIncludeVacations,
    
    // Helper functions
    formatCurrency
  };
};
