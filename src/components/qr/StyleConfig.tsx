import React, { useState } from 'react';
import { 
  QrCode, 
  Ban, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Youtube, 
  Send, 
  Linkedin,
  Palette,
  Upload,
  Square,
  Layout,
  Type,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { QRStyleSettings } from '../../types/qr';
import { Label, Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { Slider } from '../ui/Slider';
import { SOCIAL_LOGOS } from '../../constants/socialLogos';

const XIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.451h2.038L6.486 3.243H4.3z"/>
  </svg>
);

interface StyleConfigProps {
  settings: QRStyleSettings;
  currentLogo: string | null;
  onChange: (settings: QRStyleSettings) => void;
  onLogoUpload: (logo: string | null) => void;
}

export const StyleConfig = ({ settings, currentLogo, onChange, onLogoUpload }: StyleConfigProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const updateSettings = (updates: Record<string, any>) => {
    const newSettings = JSON.parse(JSON.stringify(settings));
    
    Object.entries(updates).forEach(([path, value]) => {
      const keys = path.split('.');
      let current: any = newSettings;
      for (let i = 0; i < keys.length - 1; i++) {
         if (!current[keys[i]]) current[keys[i]] = {};
         current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    });
    
    onChange(newSettings);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const colorPresets = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Sky Blue', value: '#0ea5e9' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Pink', value: '#ec4899' },
  ];

  const logoPresets = [
    { id: 'none', label: 'None', icon: Ban, value: null },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: '#25D366', value: SOCIAL_LOGOS.whatsapp },
    { id: 'facebook', label: 'Facebook', icon: Facebook, color: '#1877F2', value: SOCIAL_LOGOS.facebook },
    { id: 'instagram', label: 'Instagram', icon: Instagram, color: '#E4405F', value: SOCIAL_LOGOS.instagram },
    { id: 'youtube', label: 'YouTube', icon: Youtube, color: '#FF0000', value: SOCIAL_LOGOS.youtube },
    { id: 'twitter', label: 'X', icon: XIcon, color: '#000000', value: SOCIAL_LOGOS.x },
    { id: 'telegram', label: 'Telegram', icon: Send, color: '#0088CC', value: SOCIAL_LOGOS.telegram },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: '#0A66C2', value: SOCIAL_LOGOS.linkedin },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Patterns</Label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { id: 'square', label: 'Square' },
              { id: 'extra-rounded', label: 'Rounded' },
              { id: 'dots', label: 'Dots' },
              { id: 'classy', label: 'Classy' },
              { id: 'classy-rounded', label: 'Crystal' },
              { id: 'rounded', label: 'Liquid' },
            ].map((type) => (
               <button
                key={type.id}
                onClick={() => updateSettings({ 'dotsOptions.type': type.id })}
                className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all ${settings.dotsOptions.type === type.id ? 'border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/20 -translate-y-1' : 'border-brand-100/30 hover:border-brand-300 hover:bg-brand-50/10'}`}
               >
                <div className="h-10 w-10 mb-2 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-1 opacity-80">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-2.5 w-2.5 ${settings.dotsOptions.type === type.id ? 'bg-white' : 'bg-brand-600'} ${type.id === 'dots' ? 'rounded-full' : type.id === 'extra-rounded' ? 'rounded-sm' : type.id === 'rounded' ? 'rounded-full scale-110' : ''}`} />
                      ))}
                   </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">{type.label}</span>
               </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Corners</Label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { id: 'square', label: 'Square' },
              { id: 'extra-rounded', label: 'Rounded' },
              { id: 'dot', label: 'Circle' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => updateSettings({ 'cornersSquareOptions.type': type.id })}
                className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all ${settings.cornersSquareOptions.type === type.id ? 'border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/20 -translate-y-1' : 'border-brand-100/30 hover:border-brand-300 hover:bg-brand-50/10'}`}
              >
                <div className="h-10 w-10 mb-2 flex items-center justify-center">
                   <div className={`h-8 w-8 border-4 ${settings.cornersSquareOptions.type === type.id ? 'border-white' : 'border-brand-600'} ${type.id === 'dot' ? 'rounded-full' : type.id === 'extra-rounded' ? 'rounded-lg' : ''}`} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Code colours</Label>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {colorPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    updateSettings({
                      'dotsOptions.color': color.value,
                      'cornersSquareOptions.color': color.value,
                      'cornersDotOptions.color': color.value
                    });
                  }}
                  className={`h-12 w-12 rounded-xl border-4 transition-all hover:scale-110 ${settings.dotsOptions.color === color.value ? 'border-brand-600 shadow-xl ring-2 ring-brand-500/20' : 'border-white shadow-md'}`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <div className="relative inline-block">
               <Button variant="outline" className="h-12 px-6 gap-2 rounded-xl font-bold border-brand-100 shadow-sm hover:bg-brand-50">
                  <Palette className="h-4 w-4" />
                  Add a colour
               </Button>
               <input 
                type="color" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                value={settings.dotsOptions.color}
                onChange={(e) => {
                  updateSettings({
                    'dotsOptions.color': e.target.value,
                    'cornersSquareOptions.color': e.target.value,
                    'cornersDotOptions.color': e.target.value
                  });
                }}
               />
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Background colours</Label>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {colorPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateSettings({ 'backgroundOptions.color': color.value })}
                  className={`h-12 w-12 rounded-xl border-4 transition-all hover:scale-110 ${settings.backgroundOptions.color === color.value ? 'border-brand-600 shadow-xl ring-2 ring-brand-500/20' : 'border-white shadow-md'}`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <div className="relative inline-block">
               <Button variant="outline" className="h-12 px-6 gap-2 rounded-xl font-bold border-brand-100 shadow-sm hover:bg-brand-50">
                  <Palette className="h-4 w-4" />
                  Add a colour
               </Button>
               <input 
                type="color" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                value={settings.backgroundOptions.color}
                onChange={(e) => updateSettings({ 'backgroundOptions.color': e.target.value })}
               />
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Logos</Label>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {logoPresets.map((logo) => (
                <button
                  key={logo.id}
                  onClick={() => {
                    onLogoUpload(logo.value);
                  }}
                  className={`h-12 w-12 flex items-center justify-center rounded-xl border-4 transition-all hover:scale-110 bg-white ${currentLogo === logo.value ? 'border-brand-600 shadow-xl ring-2 ring-brand-500/20' : 'border-white shadow-md'}`}
                  title={logo.label}
                >
                  <logo.icon className="h-6 w-6" style={{ color: logo.color }} />
                </button>
              ))}
            </div>
            <div className="space-y-3">
              <div className="relative inline-block">
                <Button variant="outline" className="h-12 px-6 gap-2 rounded-xl font-bold border-brand-100 shadow-sm hover:bg-brand-50">
                    <Upload className="h-4 w-4" />
                    Upload your logo
                </Button>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleLogoUpload} 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                />
              </div>
              <p className="text-[10px] font-medium text-muted-foreground opacity-60">Max size: 50KB. Aspect ratio 1:1.</p>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm mb-3 block ml-0 uppercase tracking-widest font-black text-foreground">Frames</Label>
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'none', label: 'No Frame', icon: Ban },
                { id: 'simple', label: 'Simple', icon: Square },
                { id: 'banner', label: 'Banner', icon: Layout },
                { id: 'bubble', label: 'Bubble', icon: MessageCircle },
              ].map((frame) => (
                <button
                  key={frame.id}
                  onClick={() => {
                    if (frame.id === 'none') {
                      updateSettings({ 'frameOptions.enabled': false });
                    } else {
                      updateSettings({
                        'frameOptions.enabled': true,
                        'frameOptions.type': frame.id
                      });
                    }
                  }}
                  className={`flex flex-col items-center justify-center p-4 border rounded-2xl transition-all ${(!settings.frameOptions.enabled && frame.id === 'none') || (settings.frameOptions.enabled && settings.frameOptions.type === frame.id) ? 'border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/20 -translate-y-1' : 'border-brand-100/30 hover:border-brand-300 hover:bg-brand-50/10'}`}
                >
                  <frame.icon className={`h-6 w-6 mb-2 ${((!settings.frameOptions.enabled && frame.id === 'none') || (settings.frameOptions.enabled && settings.frameOptions.type === frame.id)) ? 'text-white' : 'text-brand-600'}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{frame.label}</span>
                </button>
              ))}
            </div>
            
            {settings.frameOptions.enabled && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="space-y-3">
                  <Label>Frame Text</Label>
                  <Input 
                    value={settings.frameOptions.text} 
                    onChange={(e) => updateSettings({ 'frameOptions.text': e.target.value })} 
                    placeholder="SCAN ME"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <Label>Frame Color</Label>
                      <div className="flex gap-3">
                        <Input type="color" className="p-2 w-16" value={settings.frameOptions.backgroundColor} onChange={(e) => updateSettings({ 'frameOptions.backgroundColor': e.target.value })} />
                        <Input type="text" value={settings.frameOptions.backgroundColor} onChange={(e) => updateSettings({ 'frameOptions.backgroundColor': e.target.value })} />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <Label>Text Color</Label>
                      <div className="flex gap-3">
                        <Input type="color" className="p-2 w-16" value={settings.frameOptions.textColor} onChange={(e) => updateSettings({ 'frameOptions.textColor': e.target.value })} />
                        <Input type="text" value={settings.frameOptions.textColor} onChange={(e) => updateSettings({ 'frameOptions.textColor': e.target.value })} />
                      </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-brand-100/20">
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full text-left group"
          >
            <Label className="text-sm cursor-pointer uppercase tracking-widest font-black text-foreground group-hover:text-brand-600 transition-colors">Advanced Settings</Label>
            {showAdvanced ? (
              <ChevronUp className="h-5 w-5 text-brand-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-brand-600 transition-colors" />
            )}
          </button>
          
          {showAdvanced && (
            <div className="space-y-8 mt-8 animate-in fade-in slide-in-from-top-2 duration-300">
              <Slider
                label="QR Code size"
                value={settings.width}
                min={500}
                max={2000}
                step={10}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  updateSettings({
                    'width': v,
                    'height': v
                  });
                }}
              />
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label>Margin</Label>
                  <Input type="number" value={settings.margin} onChange={(e) => updateSettings({ 'margin': parseInt(e.target.value) })} />
                </div>
                <div className="space-y-3">
                  <Label>Logo Size</Label>
                  <Slider
                    value={Math.round((settings.imageOptions?.imageSize || 0.2) * 100)}
                    min={5}
                    max={50}
                    step={1}
                    onChange={(e) => {
                      const v = parseInt(e.target.value) / 100;
                      updateSettings({ 'imageOptions.imageSize': v });
                    }}
                  />
                  <div className="flex justify-between text-[8px] font-black uppercase text-muted-foreground">
                    <span>Small</span>
                    <span>Large</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Code Ratio</Label>
                <select 
                  className="w-full h-12 bg-white border border-brand-100 rounded-xl px-4 text-sm font-bold focus:ring-2 focus:ring-brand-500/20 outline-none"
                  value={settings.qrOptions.errorCorrectionLevel}
                  onChange={(e) => updateSettings({ 'qrOptions.errorCorrectionLevel': e.target.value })}
                >
                  <option value="L">Low (7%)</option>
                  <option value="M">Medium (15%)</option>
                  <option value="Q">Quartile (25%)</option>
                  <option value="H">High (30%)</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
