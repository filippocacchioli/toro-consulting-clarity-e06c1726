
import React, { ReactNode } from 'react';

interface ContactDetailsItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactDetailsItem = ({ icon, title, children }: ContactDetailsItemProps) => {
  return (
    <div className="flex items-start">
      <div className="h-12 w-12 rounded-full bg-toro-gold/20 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-toro-dark mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ContactDetailsItem;
