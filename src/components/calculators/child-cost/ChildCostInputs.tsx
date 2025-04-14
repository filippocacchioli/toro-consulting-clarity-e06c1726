
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { ageGroups } from './types';

interface ChildCostInputsProps {
  selectedAgeGroup: number;
  isPrivateSchool: boolean;
  numActivities: number;
  includeUniversity: boolean;
  includeVacations: boolean;
  setSelectedAgeGroup: (value: number) => void;
  setIsPrivateSchool: (value: boolean) => void;
  setNumActivities: (value: number) => void;
  setIncludeUniversity: (value: boolean) => void;
  setIncludeVacations: (value: boolean) => void;
}

const ChildCostInputs: React.FC<ChildCostInputsProps> = ({
  selectedAgeGroup,
  isPrivateSchool,
  numActivities,
  includeUniversity,
  includeVacations,
  setSelectedAgeGroup,
  setIsPrivateSchool,
  setNumActivities,
  setIncludeUniversity,
  setIncludeVacations
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-toro-dark mb-2">
          Fascia d&apos;età attuale
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
  );
};

export default ChildCostInputs;
