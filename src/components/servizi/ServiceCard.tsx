
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link: string;
  isReversed?: boolean;
}

const ServiceCard = ({ id, icon, title, description, benefits, link, isReversed = false }: ServiceCardProps) => {
  return (
    <div 
      id={id}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
    >
      <div className="md:w-1/3 flex justify-center">
        <div className="bg-white p-8 rounded-full shadow-xl">
          {icon}
        </div>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-2xl font-serif font-medium mb-4 text-toro-dark">{title}</h3>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
          <h4 className="text-lg font-medium mb-4 text-toro-dark">Cosa include:</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <div className="text-toro-gold mr-3 mt-1">•</div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link 
          to={link} 
          className="inline-flex items-center px-6 py-3 bg-toro-gold text-white rounded-md hover:bg-toro-gold-dark transition-colors"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
