
export type AgeGroup = {
  name: string;
  ageRange: string;
  monthlyBaseCost: number;
  educationCost: number;
  extracurricularCost: number;
  healthcareCost: number;
  clothingCost: number;
  vacationCost: number;
};

export const ageGroups: AgeGroup[] = [
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
