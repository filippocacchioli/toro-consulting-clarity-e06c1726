
import { useState, useEffect } from 'react';
import { Expense, defaultExpenses } from './types';

export const useBabyExpenseCalculator = () => {
  const [expenses, setExpenses] = useState<Expense[]>([...defaultExpenses]);
  const [totalEssential, setTotalEssential] = useState<number>(0);
  const [totalOptional, setTotalOptional] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [breastfeeding, setBreastfeeding] = useState<boolean>(true);

  useEffect(() => {
    calculateExpenses();
  }, [expenses, breastfeeding]);

  const calculateExpenses = () => {
    let essential = 0;
    let optional = 0;
    
    expenses.forEach(expense => {
      if (expense.category === 'Latte artificiale' && breastfeeding) {
        return; // Skip formula if breastfeeding
      }
      
      if (expense.essential) {
        essential += expense.amount;
      } else {
        optional += expense.amount;
      }
    });
    
    setTotalEssential(essential);
    setTotalOptional(optional);
    setTotalExpenses(essential + optional);
  };

  const handleExpenseChange = (index: number, amount: number) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].amount = amount;
    setExpenses(updatedExpenses);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return {
    expenses,
    breastfeeding,
    totalEssential,
    totalOptional,
    totalExpenses,
    setBreastfeeding,
    handleExpenseChange,
    formatCurrency
  };
};

export default useBabyExpenseCalculator;
