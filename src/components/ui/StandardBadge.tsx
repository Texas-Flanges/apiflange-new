import React from 'react';

interface StandardBadgeProps {
  standard: string;
  variant?: 'default' | 'outline';
}

const StandardBadge: React.FC<StandardBadgeProps> = ({
  standard,
  variant = 'default',
}) => {
  const baseStyles = 'inline-block px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap';

  const variantStyles: Record<string, string> = {
    default: 'bg-primary text-white',
    outline: 'border border-primary text-primary',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {standard}
    </span>
  );
};

export default StandardBadge;
