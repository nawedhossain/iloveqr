import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { 
  QrCode, 
  Palette, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  ZapIcon,
  MousePointer2,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="I Love QR Code | Professional Stylish QR Generator"
        description="The ultimate QR code designer. Create professional, branded QR codes with custom logos, patterns, and high-resolution exports."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.05),transparent_50%)]">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-100/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000"
            >
              <Zap className="h-4 w-4 text-brand-600 fill-brand-600" />
              <span className="text-sm font-semibold text-brand-700 tracking-wide uppercase">The New Era of QR Design</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black font-display tracking-tight text-foreground mb-10 leading-[0.95]"
            >
              Codes that <br />
              <span className="text-gradient">People Love</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium"
            >
              Ditch the generic. Create professional, high-conversion QR codes <br className="hidden md:block" /> 
              that match your brand's unique identity in seconds.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/generator">
                <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl gap-3 shadow-2xl shadow-brand-600/30 ring-4 ring-brand-500/10">
                  <QrCode className="h-6 w-6" /> Start Building
                </Button>
              </Link>
            </motion.div>

            {/* Featured Image / Social Proof */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-20 w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-card relative"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 to-transparent pointer-events-none" />
               <div className="p-2 bg-muted/50 flex items-center gap-2 px-4 border-b">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto bg-background rounded-md px-4 py-0.5 text-[10px] text-muted-foreground border">
                    iloveqrcode.com/generator
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <div className="p-8 md:p-16 space-y-6">
                    <div className="h-px w-12 bg-brand-600" />
                    <h3 className="text-3xl font-bold font-display">Infinite Customization</h3>
                    <p className="text-muted-foreground">Patterns, colors, logos, and frame styles. Your brand, your way.</p>
                    <ul className="space-y-3">
                       {[
                         'Custom brand logos',
                         'Modern dot patterns',
                         'Professional corner styles',
                         'Gradient color support'
                       ].map(t => (
                         <li key={t} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4 text-brand-600" /> {t}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="bg-brand-50 flex items-center justify-center p-8 md:p-16">
                     <div className="relative">
                        <div className="absolute -inset-4 bg-white rounded-[40px] blur-2xl opacity-50" />
                        <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-brand-100">
                           <QrCode className="h-48 w-48 text-brand-600" />
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-2xl shadow-xl border-4 border-white">
                              <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '1M+', label: 'QRs Generated' },
              { val: '50k+', label: 'Happy Users' },
              { val: '99.9%', label: 'Uptime' },
              { val: '0', label: 'Hidden Fees' },
            ].map(s => (
               <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold font-display text-brand-600 mb-1">{s.val}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{s.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">Everything you need for QR success</h2>
          <p className="text-muted-foreground text-lg">One platform to create, manage, and track your beautiful QR codes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Palette, 
              title: "Stunning Design", 
              desc: "Don't settle for boring. Use professional templates or build your own with advanced styling tools." 
            },
            { 
              icon: Smartphone, 
              title: "Mobile Optimized", 
              desc: "Every QR code is tested for scanability across all modern smartphone cameras." 
            },
            { 
              icon: BarChart3, 
              title: "Scan Analytics", 
              desc: "Track where and when your codes are being scanned to optimize your marketing." 
            },
            { 
              icon: ZapIcon, 
              title: "Instant Export", 
              desc: "Download in high-resolution PNG, SVG, JPG, or PDF formats ready for print." 
            },
            { 
              icon: ShieldCheck, 
              title: "Safe & Secure", 
              desc: "Your data is protected with enterprise-grade security and regular backups." 
            },
            { 
              icon: MousePointer2, 
              title: "No-Code Easy", 
              desc: "Drag and drop logos, click to change colors. No design skills required." 
            }
          ].map((f, i) => (
             <Card key={i} className="glass-card border-brand-100/20">
                <CardContent className="pt-8">
                  <div className="bg-brand-50 text-brand-600 p-4 rounded-2xl inline-block mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display tracking-tight">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{f.desc}</p>
                </CardContent>
             </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-brand-600/30">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">Ready to make your codes look professional?</h2>
             <p className="text-brand-100 text-xl mb-12">Create high-quality, branded QR codes for all your needs instantly.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/generator">
                  <Button size="lg" className="h-14 px-10 bg-white text-brand-600 hover:bg-brand-50 text-lg shadow-xl shadow-black/10">
                    Create Your QR Code
                  </Button>
                </Link>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
