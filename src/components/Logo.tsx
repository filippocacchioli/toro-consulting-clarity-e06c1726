
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
  const sizes = {
    small: 'h-10 w-10',    // Decreased from h-12 w-12
    medium: 'h-14 w-14',   // Decreased from h-16 w-16
    large: 'h-24 w-24'     // Keeping large size the same
  };

  return (
    <div className={`relative rounded-full overflow-hidden ${sizes[size]} ${className}`}>
      <img 
        src="/lovable-uploads/a55f00d3-7eb2-4d4b-a54b-90bf6902d2cc.png" 
        alt="TORO Consulting Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
