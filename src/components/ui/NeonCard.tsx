
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'magenta' | 'cyan' | 'ultraviolet';
  floating?: boolean;
}

const NeonCard: React.FC<NeonCardProps> = ({ 
  children, 
  className,
  color = 'magenta',
  floating = false
}) => {
  const colorClasses = {
    magenta: 'glowing-container',
    cyan: 'glowing-container-cyan',
    ultraviolet: 'glowing-container-ultraviolet'
  };
  
  return (
    <div 
      className={cn(
        colorClasses[color],
        'p-6 transition-all duration-300 hover:scale-[1.01] rounded-lg',
        floating && 'floating',
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeonCard;
