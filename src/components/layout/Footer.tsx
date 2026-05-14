import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-brand-100/20 glass rounded-t-[3rem]">
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-md text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2 mb-8 group">
              <img src="https://iloveqrco.de/logo.png" alt="I Love QR Code" className="h-12 w-auto group-hover:scale-110 transition-transform" />
            </Link>
            <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed">
              Elevating the world of scannable assets. Beautiful, dynamic, and forever customizable QR codes for the modern web.
            </p>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-brand-100/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <p>© 2026 I Love QR Code. All rights reserved.</p>
          <p className="flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-100/20">
            Made with <Heart className="h-4 w-4 text-red-600 fill-red-600 animate-pulse" /> by <a href="https://nawed.pp.ua" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">Nawed</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
