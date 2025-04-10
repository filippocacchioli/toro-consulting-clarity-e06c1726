
import React from 'react';

interface ContactBackgroundProps {
  children: React.ReactNode;
}

const ContactBackground = ({ children }: ContactBackgroundProps) => {
  return (
    <section className="py-20 bg-white relative">
      {/* Logo background overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-0 opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/a55f00d3-7eb2-4d4b-a54b-90bf6902d2cc.png"
          alt="TORO Consulting Logo Background"
          className="w-2/3 max-w-3xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ContactBackground;
