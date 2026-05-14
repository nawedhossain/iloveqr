import React from 'react';
import { Input, Label } from '../ui/Input';
import { QRType } from '../../types/qr';

interface TypeFormProps {
  type: QRType;
  data: any;
  onChange: (data: any) => void;
}

export const TypeForm = React.memo(({ type, data, onChange }: TypeFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const selectClassName = "flex h-12 w-full rounded-xl border border-brand-100/50 bg-background/50 px-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium appearance-none cursor-pointer";

  switch (type) {
    case 'url':
    case 'pdf':
      return (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label>Website URL</Label>
            <Input name="url" value={data.url || ''} onChange={handleChange} placeholder="https://example.com" />
          </div>
        </div>
      );
    case 'wifi':
      return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label>SSID (Network Name)</Label>
              <Input name="ssid" value={data.ssid || ''} onChange={handleChange} placeholder="My WiFi" />
            </div>
            <div className="space-y-3">
              <Label>Encryption</Label>
              <div className="relative">
                <select 
                  name="encryption" 
                  value={data.encryption || 'WPA'} 
                  onChange={handleChange as any}
                  className={selectClassName}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">None</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">↓</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <Label>Password</Label>
            <Input name="password" type="password" value={data.password || ''} onChange={handleChange} placeholder="••••••••" />
          </div>
        </div>
      );
    case 'whatsapp':
      return (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label>Phone Number (with country code)</Label>
            <Input name="phone" value={data.phone || ''} onChange={handleChange} placeholder="+919876543210" />
          </div>
          <div className="space-y-3">
            <Label>Default Message</Label>
            <Input name="message" value={data.message || ''} onChange={handleChange} placeholder="Hi there!" />
          </div>
        </div>
      );
    case 'vcard':
      return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="space-y-3">
              <Label>First Name</Label>
              <Input name="firstName" value={data.firstName || ''} onChange={handleChange} placeholder="John" />
            </div>
            <div className="space-y-3">
              <Label>Last Name</Label>
              <Input name="lastName" value={data.lastName || ''} onChange={handleChange} placeholder="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label>Phone</Label>
              <Input name="phone" value={data.phone || ''} onChange={handleChange} placeholder="+123456789" />
            </div>
            <div className="space-y-3">
              <Label>Email</Label>
              <Input name="email" value={data.email || ''} onChange={handleChange} placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-3">
            <Label>Organization</Label>
            <Input name="organization" value={data.organization || ''} onChange={handleChange} placeholder="Acme Inc." />
          </div>
        </div>
      );
    case 'upi':
       return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label>UPI ID / VPA</Label>
              <Input name="vpa" value={data.vpa || ''} onChange={handleChange} placeholder="username@upi" />
            </div>
            <div className="space-y-3">
              <Label>Payee Name</Label>
              <Input name="name" value={data.name || ''} onChange={handleChange} placeholder="John Doe" />
            </div>
          </div>
          <div className="space-y-3">
            <Label>Amount (Optional)</Label>
            <Input name="am" type="number" value={data.am || ''} onChange={handleChange} placeholder="0.00" />
          </div>
        </div>
      );
    case 'email':
      return (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label>Recipient Email</Label>
            <Input name="email" value={data.email || ''} onChange={handleChange} placeholder="support@example.com" />
          </div>
          <div className="space-y-3">
            <Label>Subject</Label>
            <Input name="subject" value={data.subject || ''} onChange={handleChange} placeholder="Inquiry" />
          </div>
           <div className="space-y-3">
            <Label>Body</Label>
            <Input name="body" value={data.body || ''} onChange={handleChange} placeholder="Hello..." />
          </div>
        </div>
      );
    case 'sms':
    case 'call':
       return (
        <div className="space-y-8">
          <div className="space-y-3">
            <Label>Phone Number</Label>
            <Input name="phone" value={data.phone || ''} onChange={handleChange} placeholder="+123456789" />
          </div>
          {type === 'sms' && (
             <div className="space-y-3">
              <Label>Message</Label>
              <Input name="message" value={data.message || ''} onChange={handleChange} placeholder="Hi!" />
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
});
