import { useEffect, useRef } from 'react';
import QRCodeStyling, { Options } from 'qr-code-styling';
import { QRStyleSettings } from '../../types/qr';
import { cn } from '../../lib/utils';
import { toPng, toJpeg, toSvg } from 'html-to-image';

interface QRPreviewProps {
  options: Options;
  settings?: QRStyleSettings;
  className?: string;
}

export const QRPreview = ({ options, settings, className }: QRPreviewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling(options);
      qrCode.current.append(ref.current);
    } else {
      qrCode.current.update(options);
    }
  }, [options]);

  const frame = settings?.frameOptions;

  if (frame?.enabled) {
    return (
      <div id="qr-download-target" className={cn("p-0 overflow-hidden bg-transparent select-none", className)}>
        <div 
          className={cn(
            "flex flex-col items-center justify-center p-8 transition-all duration-500",
            frame.type === 'banner' ? 'rounded-b-[3rem]' : 'rounded-[3rem]',
            frame.type === 'bubble' ? 'rounded-full overflow-hidden aspect-square' : ''
          )}
          style={{ backgroundColor: frame.backgroundColor }}
        >
          <div 
             className={cn(
               "bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center",
               frame.type === 'bubble' ? 'rounded-full' : ''
             )}
          >
            <div ref={ref} className="overflow-hidden flex items-center justify-center" />
          </div>
          
          <div 
            className={cn(
              "mt-6 text-center font-black uppercase tracking-[0.2em] transition-all duration-500",
              frame.type === 'banner' ? 'bg-black/10 px-6 py-2 rounded-full border border-white/10' : '',
              frame.type === 'bubble' ? 'text-lg mt-4' : 'text-base'
            )}
            style={{ color: frame.textColor }}
          >
            {frame.text || 'SCAN ME'}
          </div>
        </div>
      </div>
    );
  }

  return <div id="qr-download-target" ref={ref} className={cn("flex items-center justify-center", className)} />;
};

export const downloadQR = async (
  options: Options, 
  format: 'png' | 'svg' | 'jpeg' | 'webp' | 'pdf',
  settings?: QRStyleSettings
) => {
  const isFramed = settings?.frameOptions?.enabled;
  
  if (isFramed) {
    const node = document.getElementById('qr-download-target');
    if (node) {
      try {
        const width = settings?.width || 1000;
        const height = settings?.height || 1000;
        const exportOptions = {
          width,
          height,
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left',
            width: `${width}px`,
            height: `${height}px`,
            maxWidth: 'none',
            maxHeight: 'none',
          },
        };

        let dataUrl = '';
        if (format === 'png') dataUrl = await toPng(node, exportOptions);
        else if (format === 'jpeg' || format === 'webp') dataUrl = await toJpeg(node, { ...exportOptions, quality: 0.95 });
        else if (format === 'svg') dataUrl = await toSvg(node, exportOptions);
        else if (format === 'pdf') {
          const imgData = await toPng(node, exportOptions);
          const { jsPDF } = await import('jspdf');
          const doc = new jsPDF();
          doc.addImage(imgData, 'PNG', 10, 10, 60, 80);
          doc.save('qrcode-framed.pdf');
          return;
        }
        
        if (dataUrl) {
           const link = document.createElement('a');
           link.download = `qrcode-${Date.now()}.${format}`;
           link.href = dataUrl;
           link.click();
           return;
        }
      } catch (err) {
        console.error('Failed to generate framed QR:', err);
      }
    }
  }

  const qrCode = new QRCodeStyling(options);
  if (format === 'pdf') {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      const rawData = await qrCode.getRawData('png');
      if (rawData) {
        const url = URL.createObjectURL(rawData);
        doc.addImage(url, 'PNG', 10, 10, 50, 50);
        doc.save('qrcode.pdf');
      }
      return;
  }
  await qrCode.download({ name: 'qrcode', extension: format });
};
