import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Link as LinkIcon, 
  Wifi, 
  Mail, 
  UserSquare, 
  MessageSquare, 
  Phone, 
  CreditCard, 
  FileText,
  Smartphone,
  IndianRupee,
  MessageCircle
} from 'lucide-react';
import { QRType } from '../../types/qr';
import { cn } from '../../lib/utils';

const types = [
  { id: 'url', label: 'URL', icon: LinkIcon, description: 'Website, social link' },
  { id: 'wifi', label: 'WiFi', icon: Wifi, description: 'Network sharing' },
  { id: 'vcard', label: 'vCard', icon: UserSquare, description: 'Contact details' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, description: 'Send message' },
  { id: 'upi', label: 'UPI', icon: IndianRupee, description: 'Digital payment' },
  { id: 'email', label: 'Email', icon: Mail, description: 'Send email' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, description: 'Send text' },
  { id: 'call', label: 'Call', icon: Phone, description: 'Phone call' },
  { id: 'pdf', label: 'PDF', icon: FileText, description: 'PDF document' },
] as const;

interface TypeSelectorProps {
  selected: QRType;
  onChange: (type: QRType) => void;
}

export const TypeSelector = React.memo(({ selected, onChange }: TypeSelectorProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {types.map((type) => {
        const Icon = type.icon;
        const isActive = selected === type.id;
        return (
          <button
            key={type.id}
            onClick={() => onChange(type.id as QRType)}
            className={cn(
              'flex flex-col items-center justify-center p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden',
              isActive 
                ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-600/30 -translate-y-1' 
                : 'glass border-brand-100/30 hover:border-brand-500/50 hover:bg-brand-50/50'
            )}
          >
            <Icon className={cn('h-7 w-7 mb-2 transition-transform duration-300 group-hover:scale-110', isActive ? 'text-white' : 'text-brand-600')} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{type.label}</span>
          </button>
        );
      })}
    </div>
  );
});
