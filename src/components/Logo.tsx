
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
  const sizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
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
