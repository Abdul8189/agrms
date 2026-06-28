import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary:
      'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500',
    secondary:
      'bg-white text-black border-2 border-black hover:bg-black hover:text-white focus:ring-black',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    // Use regular anchor for tel: and mailto: links
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    // Use Next.js Link for internal routes
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
