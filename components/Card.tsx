import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverable = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${hoverable ? 'hover:shadow-md hover:border-blue-300 cursor-pointer transition-all' : ''} ${className}`}
    >
      {children}
    </div>
  );
};