import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
  number?: number;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showNumbers?: boolean;
  theme?: 'light' | 'dark';
  direction?: 'horizontal' | 'vertical';
  connectorStyle?: 'line' | 'arrow' | 'none';
}

export function ProcessSteps({
  steps,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  showNumbers = true,
  theme = 'light',
  direction = 'horizontal',
  connectorStyle = 'line',
}: ProcessStepsProps) {
  const isDark = theme === 'dark';

  const containerClasses = cn(
    'w-full',
    direction === 'horizontal'
      ? 'flex flex-col md:flex-row gap-4 md:gap-0'
      : 'flex flex-col gap-8 md:gap-12',
    className
  );

  const stepContainerClasses = cn(
    'flex-1 relative',
    direction === 'horizontal' ? 'flex flex-col items-center' : 'flex gap-6'
  );

  const stepContentClasses = cn(
    'flex flex-col items-center',
    direction === 'horizontal' ? 'w-full' : 'flex-1'
  );

  const iconContainerClasses = cn(
    'flex items-center justify-center rounded-full mb-4 relative z-10 flex-shrink-0',
    'w-16 h-16 md:w-20 md:h-20',
    isDark
      ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white'
      : 'bg-gradient-to-br from-blue-900 to-blue-700 text-white'
  );

  const titleClasses = cn(
    'text-lg md:text-xl font-bold',
    isDark ? 'text-white' : 'text-slate-900',
    titleClassName
  );

  const descriptionClasses = cn(
    'text-sm md:text-base leading-relaxed',
    isDark ? 'text-gray-300' : 'text-slate-600',
    descriptionClassName
  );

  const connectorClasses = cn(
    'absolute bg-gradient-to-r from-blue-900 to-orange-500 flex-shrink-0',
    direction === 'horizontal'
      ? 'hidden md:block h-1 top-8 md:top-10 left-[50%] right-[-50%] z-0'
      : 'hidden md:block w-1 h-full top-0 left-7 md:left-9 -z-0'
  );

  const getConnectorElement = () => {
    if (connectorStyle === 'none' || steps.length <= 1) {
      return null;
    }

    if (connectorStyle === 'line') {
      return <div className={connectorClasses} />;
    }

    if (connectorStyle === 'arrow') {
      return (
        <svg
          className={cn(connectorClasses, 'hidden md:block')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#001f3f" />
              <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
          </defs>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    }

    return null;
  };

  return (
    <div className={containerClasses}>
      {getConnectorElement()}

      {steps.map((step, index) => (
        <div key={index} className={stepContainerClasses}>
          <div className={stepContentClasses}>
            {/* Icon/Number Container */}
            <div className={iconContainerClasses}>
              {step.icon ? (
                <div className="flex items-center justify-center text-2xl md:text-3xl">
                  {step.icon}
                </div>
              ) : showNumbers ? (
                <span className="text-2xl md:text-3xl font-bold">
                  {step.number || index + 1}
                </span>
              ) : null}
            </div>

            {/* Text Content */}
            <div className={direction === 'horizontal' ? 'text-center w-full' : 'flex-1'}>
              <h3 className={cn(titleClasses, direction === 'horizontal' ? 'mb-2' : 'mb-3')}>
                {step.title}
              </h3>
              <p className={descriptionClasses}>{step.description}</p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          {direction === 'vertical' && index < steps.length - 1 && (
            <div
              className={cn(
                'hidden md:block w-1 h-8 absolute left-7 md:left-9 top-20',
                isDark
                  ? 'bg-gradient-to-b from-blue-600 to-orange-500'
                  : 'bg-gradient-to-b from-blue-900 to-orange-500'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Preset variant for horizontal process timeline
 */
export function ProcessTimeline({
  steps,
  className = '',
  ...props
}: ProcessStepsProps) {
  return (
    <ProcessSteps
      {...props}
      steps={steps}
      direction="horizontal"
      connectorStyle="line"
      className={cn('max-w-6xl mx-auto', className)}
    />
  );
}

/**
 * Preset variant for vertical process steps
 */
export function ProcessVertical({
  steps,
  className = '',
  ...props
}: ProcessStepsProps) {
  return (
    <ProcessSteps
      {...props}
      steps={steps}
      direction="vertical"
      connectorStyle="line"
      className={cn('max-w-2xl', className)}
    />
  );
}

/**
 * Example usage component
 */
export function ProcessStepsExample() {
  const steps = [
    {
      title: 'Consultation',
      description: 'Meet with our experts to discuss your specific requirements and industry standards.',
      icon: '📋',
    },
    {
      title: 'Design',
      description: 'Our engineers design the perfect solution tailored to your application.',
      icon: '✏️',
    },
    {
      title: 'Manufacturing',
      description: 'We manufacture your products using precision equipment and quality materials.',
      icon: '⚙️',
    },
    {
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to ensure API compliance.',
      icon: '✓',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Our Process
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          From initial consultation to final delivery, we follow a comprehensive process to
          ensure your complete satisfaction with every product.
        </p>

        <ProcessTimeline steps={steps} />
      </div>
    </div>
  );
}
