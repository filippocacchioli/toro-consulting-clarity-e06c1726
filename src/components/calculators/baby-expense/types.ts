
export type Expense = {
  category: string;
  amount: number;
  essential: boolean;
};

export const defaultExpenses: Expense[] = [
  { category: 'Pannolini', amount: 600, essential: true },
  { category: 'Latte artificiale', amount: 800, essential: false },
  { category: 'Pappe e alimenti', amount: 600, essential: true },
  { category: 'Abbigliamento', amount: 500, essential: true },
  { category: 'Passeggino', amount: 300, essential: true },
  { category: 'Seggiolino auto', amount: 200, essential: true },
  { category: 'Culla/lettino', amount: 300, essential: true },
  { category: 'Giocattoli', amount: 200, essential: false },
  { category: 'Accessori vari', amount: 300, essential: false },
  { category: 'Farmacia e igiene', amount: 200, essential: true },
  { category: 'Visite mediche', amount: 300, essential: true },
  { category: 'Babysitter', amount: 600, essential: false },
];
