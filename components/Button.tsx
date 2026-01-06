
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const baseStyle = "rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-xs";
  
  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-5 py-2.5",
    lg: "px-8 py-4 text-sm"
  };

  const variants = {
    primary: "bg-[#CE3924] text-white hover:bg-[#B32D1C] focus:ring-[#CE3924] shadow-sm",
    secondary: "bg-[#5D2E1E] text-white hover:bg-[#4A2418] focus:ring-[#5D2E1E] shadow-sm",
    outline: "border-2 border-[#5D2E1E]/20 text-[#5D2E1E] hover:border-[#5D2E1E]/40 hover:bg-slate-50 focus:ring-[#5D2E1E]",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm"
  };

  return (
    <button 
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
