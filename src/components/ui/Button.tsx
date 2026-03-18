'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      onClick,
      disabled = false,
      loading = false,
      icon: Icon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-brass hover:bg-brass-light text-white focus:ring-brass disabled:opacity-50 disabled:cursor-not-allowed',
      secondary:
        'border-2 border-iron text-iron hover:bg-iron hover:text-white focus:ring-iron disabled:opacity-50 disabled:cursor-not-allowed',
      ghost:
        'text-brass hover:underline focus:ring-brass disabled:opacity-50 disabled:cursor-not-allowed',
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
        {loading ? 'Loading...' : children}
      </>
    );

    // Render as Link if href is provided
    if (href && !disabled) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    // Render as button
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
