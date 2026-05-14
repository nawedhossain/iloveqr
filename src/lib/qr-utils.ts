import { QRType } from '../types/qr';

export const generateQRContent = (type: QRType, data: any): string => {
  switch (type) {
    case 'url':
      return data.url || '';
    case 'upi':
      if (!data.vpa) return '';
      try {
        const upiUrl = new URL(`upi://pay`);
        upiUrl.searchParams.set('pa', data.vpa);
        if (data.name) upiUrl.searchParams.set('pn', data.name);
        if (data.mc) upiUrl.searchParams.set('mc', data.mc);
        if (data.tid) upiUrl.searchParams.set('tid', data.tid);
        if (data.tr) upiUrl.searchParams.set('tr', data.tr);
        if (data.tn) upiUrl.searchParams.set('tn', data.tn);
        if (data.am) {
          upiUrl.searchParams.set('am', data.am);
          upiUrl.searchParams.set('cu', 'INR');
        }
        return upiUrl.toString();
      } catch (err) {
        // Fallback to manual string building if URL constructor fails for custom protocol
        let params = `pa=${encodeURIComponent(data.vpa)}`;
        if (data.name) params += `&pn=${encodeURIComponent(data.name)}`;
        if (data.mc) params += `&mc=${encodeURIComponent(data.mc)}`;
        if (data.tid) params += `&tid=${encodeURIComponent(data.tid)}`;
        if (data.tr) params += `&tr=${encodeURIComponent(data.tr)}`;
        if (data.tn) params += `&tn=${encodeURIComponent(data.tn)}`;
        if (data.am) params += `&am=${encodeURIComponent(data.am)}&cu=INR`;
        return `upi://pay?${params}`;
      }
    case 'wifi':
      return `WIFI:S:${data.ssid};T:${data.encryption};P:${data.password};H:${data.hidden ? 'true' : 'false'};;`;
    case 'whatsapp':
      if (!data.phone) return '';
      const phone = data.phone.replace(/[^0-9]/g, '');
      const text = encodeURIComponent(data.message || '');
      return `https://wa.me/${phone}${text ? `?text=${text}` : ''}`;
    case 'vcard':
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${data.lastName || ''};${data.firstName || ''};;;`,
        `FN:${data.firstName || ''} ${data.lastName || ''}`,
        data.organization ? `ORG:${data.organization}` : '',
        data.title ? `TITLE:${data.title}` : '',
        data.phone ? `TEL;TYPE=CELL:${data.phone}` : '',
        data.email ? `EMAIL;TYPE=INTERNET:${data.email}` : '',
        data.url ? `URL:${data.url}` : '',
        data.address ? `ADR;TYPE=WORK:;;${data.address};;;;` : '',
        'END:VCARD'
      ].filter(Boolean).join('\n');
    case 'email':
      if (!data.email) return '';
      return `mailto:${data.email}?subject=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}`;
    case 'sms':
      if (!data.phone) return '';
      return `SMSTO:${data.phone}:${data.message || ''}`;
    case 'call':
      if (!data.phone) return '';
      return `tel:${data.phone}`;
    case 'pdf':
      return data.url || ''; // We just link to the PDF
    default:
      return '';
  }
};
