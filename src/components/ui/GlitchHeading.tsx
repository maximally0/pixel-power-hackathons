
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchHeadingProps {
  text: string;
  className?: string;
  color?: 'magenta' | 'cyan' | 'ultraviolet';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const GlitchHeading: React.FC<GlitchHeadingProps> = ({ 
  text, 
  className,
  color = 'magenta',
  level = 1
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    magenta: 'neon-text hover:text-neon-magenta',
    cyan: 'neon-text-cyan hover:text-neon-cyan',
    ultraviolet: 'neon-text-ultraviolet hover:text-neon-ultraviolet'
  };
  
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <HeadingTag
      className={cn(
        'font-bold tracking-wider uppercase',
        colorClasses[color],
        isHovered && 'animate-flicker',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {text}
    </HeadingTag>
  );
};

export default GlitchHeading;
