import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/Card';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Are these QR codes permanent?",
    a: "Yes, the static QR codes generated on our platform are permanent and will never expire."
  },
  {
    q: "Can I add my logo?",
    a: "Absolutely! You can upload your brand logo and place it in the center of your QR code with a custom background and size."
  },
  {
    q: "What formats can I download?",
    a: "We support PNG, JPEG, SVG (vector), and PDF formats. SVG is recommended for high-quality printing."
  },
  {
    q: "Is there a limit on scans?",
    a: "No, there are no limits on how many times your QR codes can be scanned."
  },
  {
     q: "Can I edit a code after generating it?",
     a: "Since these are static QR codes, the data is encoded directly into the pattern. If you need to change the content, you'll need to generate a new code. Saved codes can be easily regenerated with new data."
  }
];

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.05),transparent_60%)] pointer-events-none -z-10" />
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black font-display text-center mb-8 tracking-tight"
          >
            Got <span className="text-gradient">Questions?</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground font-medium">Everything you need to know about I Love QR Code.</p>
        </div>

        <div className="space-y-6">
           {faqs.map((faq, i) => (
             <Card key={i} className="glass-card border-none shadow-xl overflow-hidden group">
                <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-8 text-left flex justify-between items-center transition-colors hover:bg-brand-50/5"
                >
                    <span className="font-bold text-xl font-display tracking-tight group-hover:text-brand-600 transition-colors">{faq.q}</span>
                    <div className={cn(
                      "h-10 w-10 rounded-xl glass flex items-center justify-center transition-all",
                      openIndex === i ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30" : "text-muted-foreground"
                    )}>
                      {openIndex === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </div>
                </button>
                {openIndex === i && (
                    <CardContent className="px-8 pb-8 pt-0">
                        <p className="text-muted-foreground leading-relaxed text-lg font-medium border-t border-brand-100/10 pt-6">{faq.a}</p>
                    </CardContent>
                )}
             </Card>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
