export type QRType = 'url' | 'vcard' | 'wifi' | 'email' | 'sms' | 'whatsapp' | 'upi' | 'call' | 'pdf';

export interface QRStyleSettings {
  width: number;
  height: number;
  margin: number;
  qrOptions: {
    typeNumber: number;
    mode: string;
    errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  };
  imageOptions: {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
  };
  dotsOptions: {
    type: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
    color: string;
    gradient?: {
      type: 'linear' | 'radial';
      rotation: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  backgroundOptions: {
    color: string;
  };
  cornersSquareOptions: {
    type: 'dot' | 'square' | 'extra-rounded';
    color: string;
  };
  cornersDotOptions: {
    type: 'dot' | 'square';
    color: string;
  };
  frameOptions: {
    enabled: boolean;
    type: 'simple' | 'banner' | 'bubble';
    text: string;
    backgroundColor: string;
    textColor: string;
  };
}

export const defaultStyle: QRStyleSettings = {
  width: 1000,
  height: 1000,
  margin: 10,
  qrOptions: {
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'Q',
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.2,
    margin: 5,
  },
  dotsOptions: {
    type: 'rounded',
    color: '#000000',
  },
  backgroundOptions: {
    color: '#ffffff',
  },
  cornersSquareOptions: {
    type: 'extra-rounded',
    color: '#000000',
  },
  cornersDotOptions: {
    type: 'dot',
    color: '#000000',
  },
  frameOptions: {
    enabled: false,
    type: 'simple',
    text: 'SCAN ME',
    backgroundColor: '#000000',
    textColor: '#ffffff',
  },
};
