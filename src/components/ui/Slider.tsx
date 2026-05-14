import React from 'react';
import { cn } from '../../lib/utils';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ label, value, min, max, step = 1, onChange, className, ...props }: SliderProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-foreground">{label}</span>
          <span className="text-sm font-mono bg-brand-50 text-brand-600 px-2 py-0.5 rounded-md">{value}px</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-brand-100 rounded-lg appearance-none cursor-pointer accent-brand-600"
        {...props}
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
        <span>{min}px</span>
        <span>{max}px</span>
      </div>
    </div>
  );
};
