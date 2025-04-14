
import React from 'react';
import BabyExpenseInputs from './BabyExpenseInputs';
import BabyExpenseResults from './BabyExpenseResults';
import useBabyExpenseCalculator from './useBabyExpenseCalculator';

const BabyExpenseCalculator = () => {
  const {
    expenses,
    breastfeeding,
    totalEssential,
    totalOptional,
    totalExpenses,
    setBreastfeeding,
    handleExpenseChange,
    formatCurrency
  } = useBabyExpenseCalculator();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <BabyExpenseInputs 
        expenses={expenses}
        breastfeeding={breastfeeding}
        setBreastfeeding={setBreastfeeding}
        handleExpenseChange={handleExpenseChange}
      />
      
      <BabyExpenseResults
        totalEssential={totalEssential}
        totalOptional={totalOptional}
        totalExpenses={totalExpenses}
        formatCurrency={formatCurrency}
      />
    </div>
  );
};

export default BabyExpenseCalculator;
