import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  const baseClasses =
    'bg-white rounded-lg shadow-md p-6 border border-gray-200';
  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
