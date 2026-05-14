import { Link } from 'react-router-dom';
import { QrCode, Mail, Twitter, Github, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-brand-100/20 glass rounded-t-[3rem]">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-600/20 group-hover:scale-110 transition-transform">
                 <QrCode className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black font-display tracking-tight">
                I Love <span className="text-gradient">QR Code</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground mb-8 max-w-sm font-medium leading-relaxed">
              Elevating the world of scannable assets. Beautiful, dynamic, and forever customizable QR codes for the modern web.
            </p>
            <div className="flex gap-5">
              {[Twitter, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-brand-600 hover:border-brand-500/50 hover:shadow-lg transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 font-display">Product</h4>
            <ul className="space-y-4 text-base text-muted-foreground font-medium">
              <li><Link to="/generator" className="hover:text-brand-600 transition-colors">QR Generator</Link></li>
              <li><Link to="/faq" className="hover:text-brand-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 font-display">Company</h4>
            <ul className="space-y-4 text-base text-muted-foreground font-medium">
              <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-brand-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-8 font-display">Newsletter</h4>
            <p className="text-base text-muted-foreground mb-6 font-medium leading-relaxed">
              Join 5,000+ creators receiving the weekly "Scan & Grow" newsletter.
            </p>
            <div className="flex gap-3 p-1.5 glass rounded-2xl border-brand-100/30">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="bg-transparent border-none px-4 py-2 text-sm w-full focus:outline-none placeholder:text-muted-foreground/50 font-medium"
              />
              <button className="bg-brand-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-brand-100/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <p>© 2026 I Love QR Code. All rights reserved.</p>
          <p className="flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-100/20">
            Made with <Heart className="h-4 w-4 text-brand-600 fill-brand-600 animate-pulse" /> by the <span className="text-brand-600 font-bold">QR Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
