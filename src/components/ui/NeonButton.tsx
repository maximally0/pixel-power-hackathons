
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NeonButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  color?: 'magenta' | 'cyan' | 'ultraviolet';
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  to,
  href,
  onClick,
  className,
  color = 'magenta'
}) => {
  const colorClasses = {
    magenta: 'bg-black hover:bg-neon-magenta/10 border-neon-magenta text-white shadow-[0_0_10px_theme(colors.neon.magenta),inset_0_0_10px_theme(colors.neon.magenta/30)] hover:shadow-[0_0_20px_theme(colors.neon.magenta),inset_0_0_20px_theme(colors.neon.magenta/30)]',
    cyan: 'bg-black hover:bg-neon-cyan/10 border-neon-cyan text-white shadow-[0_0_10px_theme(colors.neon.cyan),inset_0_0_10px_theme(colors.neon.cyan/30)] hover:shadow-[0_0_20px_theme(colors.neon.cyan),inset_0_0_20px_theme(colors.neon.cyan/30)]',
    ultraviolet: 'bg-black hover:bg-neon-ultraviolet/10 border-neon-ultraviolet text-white shadow-[0_0_10px_theme(colors.neon.ultraviolet),inset_0_0_10px_theme(colors.neon.ultraviolet/30)] hover:shadow-[0_0_20px_theme(colors.neon.ultraviolet),inset_0_0_20px_theme(colors.neon.ultraviolet/30)]'
  };
  
  const baseClasses = 'px-6 py-2 border-2 tracking-wider uppercase transition-all duration-300 inline-block text-center rounded-lg font-bold text-base';
  
  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          baseClasses,
          colorClasses[color],
          className
        )}
      >
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClasses,
          colorClasses[color],
          className
        )}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        colorClasses[color],
        className
      )}
    >
      {children}
    </button>
  );
};

export default NeonButton;
