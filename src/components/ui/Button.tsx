import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-600/20 active:scale-[0.98]',
      secondary: 'bg-brand-50 text-brand-700 hover:bg-brand-100 active:scale-[0.98]',
      outline: 'border-2 border-brand-100 bg-background hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50 text-foreground transition-all active:scale-[0.98]',
      ghost: 'hover:bg-brand-50 hover:text-brand-700 text-muted-foreground',
      danger: 'bg-red-50 text-red-600 hover:bg-red-100 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm rounded-md',
      md: 'h-10 px-4 py-2 rounded-lg font-medium',
      lg: 'h-12 px-8 py-3 rounded-xl text-lg font-semibold',
      icon: 'h-10 w-10 rounded-lg flex items-center justify-center',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);
