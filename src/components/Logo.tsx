
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
        src="/lovable-uploads/4de519b5-19f9-45bb-86fc-c492222e0851.png" 
        alt="TORO Consulting Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
