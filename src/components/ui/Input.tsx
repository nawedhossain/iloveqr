import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-xl border border-brand-100/50 bg-background/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/10 focus-visible:border-brand-500 transition-all disabled:cursor-not-allowed disabled:opacity-50 font-medium',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1',
        className
      )}
      {...props}
    />
  )
);
