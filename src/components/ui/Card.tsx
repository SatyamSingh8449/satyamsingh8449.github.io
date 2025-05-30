import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  const hoverClasses = hoverEffect 
    ? 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300' 
    : '';

  return (
    <div 
      className={`bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-lg p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};