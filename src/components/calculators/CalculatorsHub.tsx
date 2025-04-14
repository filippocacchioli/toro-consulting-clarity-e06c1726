
import React from 'react';
import { Calculator, Home, DollarSign, Baby, GraduationCap, Briefcase, PiggyBank } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MortgageCalculator from './MortgageCalculator';
import FamilyBudgetCalculator from './FamilyBudgetCalculator';
import BabyExpenseCalculator from './BabyExpenseCalculator';
import ChildCostCalculator from './ChildCostCalculator';
import LoanAmountCalculator from './LoanAmountCalculator';
import PersonalLoanCalculator from './PersonalLoanCalculator';
import FinancialCalculator from './FinancialCalculator';
import ComparisonCalculator from './ComparisonCalculator';

const CalculatorsHub = () => {
  return (
    <section id="calcolatori" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Strumenti di Calcolo Finanziario</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilizza i nostri calcolatori per pianificare le tue finanze in modo semplice ed efficace.
          </p>
        </div>

        <Tabs defaultValue="budget" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 bg-transparent">
            {/* 1. Budget Familiare */}
            <TabsTrigger value="budget" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <Home className="h-6 w-6 mb-2" />
              <span className="text-sm">Budget Familiare</span>
            </TabsTrigger>
            
            {/* 2. Crescita Patrimoniale */}
            <TabsTrigger value="compound" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <Calculator className="h-6 w-6 mb-2" />
              <span className="text-sm">Crescita Patrimoniale</span>
            </TabsTrigger>
            
            {/* 3. Risparmio con consulente indipendente */}
            <TabsTrigger value="savings-comparison" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <PiggyBank className="h-6 w-6 mb-2" />
              <span className="text-sm">Risparmio Indipendente</span>
            </TabsTrigger>
            
            {/* 4. Rate Mutuo */}
            <TabsTrigger value="mortgage" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <DollarSign className="h-6 w-6 mb-2" />
              <span className="text-sm">Rate Mutuo</span>
            </TabsTrigger>
            
            {/* 5. Costi Figlio */}
            <TabsTrigger value="child" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <GraduationCap className="h-6 w-6 mb-2" />
              <span className="text-sm">Costi Figlio</span>
            </TabsTrigger>
            
            {/* 6. Costi Bebè */}
            <TabsTrigger value="baby" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <Baby className="h-6 w-6 mb-2" />
              <span className="text-sm">Costi Bebè</span>
            </TabsTrigger>
            
            {/* 7. Prestito Personale */}
            <TabsTrigger value="personal-loan" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <Briefcase className="h-6 w-6 mb-2" />
              <span className="text-sm">Prestito Personale</span>
            </TabsTrigger>
            
            {/* 8. Capitale Finanziabile */}
            <TabsTrigger value="loan-amount" className="flex flex-col items-center p-4 data-[state=active]:bg-toro-gold data-[state=active]:text-white">
              <Home className="h-6 w-6 mb-2" />
              <span className="text-sm">Capitale Finanziabile</span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <TabsContent value="budget">
              <FamilyBudgetCalculator />
            </TabsContent>
            <TabsContent value="compound">
              <FinancialCalculator />
            </TabsContent>
            <TabsContent value="savings-comparison">
              <ComparisonCalculator />
            </TabsContent>
            <TabsContent value="mortgage">
              <MortgageCalculator />
            </TabsContent>
            <TabsContent value="child">
              <ChildCostCalculator />
            </TabsContent>
            <TabsContent value="baby">
              <BabyExpenseCalculator />
            </TabsContent>
            <TabsContent value="personal-loan">
              <PersonalLoanCalculator />
            </TabsContent>
            <TabsContent value="loan-amount">
              <LoanAmountCalculator />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default CalculatorsHub;
