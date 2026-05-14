import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CheckCircle2, Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Label } from '../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { motion } from 'motion/react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_60%)] pointer-events-none -z-10" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-brand-100/50 text-brand-600 text-xs font-bold mb-8"
                >
                  <MessageSquare className="h-3 w-3" /> DIRECT SUPPORT
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black font-display tracking-tight mb-10 leading-[0.95]">
                  Let's <span className="text-gradient">Talk.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium max-w-lg">
                  Have questions about our QR engine or need help with custom requirements? Our team of experts is ready to assist you.
                </p>

                <div className="space-y-10">
                    {[
                        { icon: Mail, label: 'Email Support', value: 'hello@iloveqrcode.com' },
                        { icon: MessageSquare, label: 'Slack Community', value: '@qr-designers' },
                        { icon: Phone, label: 'Direct Line', value: '+1 (555) 042-SCAN' }
                    ].map(item => (
                        <div key={item.label} className="flex items-center gap-6 group">
                            <div className="bg-brand-50 text-brand-600 p-4 rounded-2xl shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1 opacity-60">{item.label}</p>
                                <p className="text-xl font-bold font-display">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             <Card className="glass-card border-none shadow-2xl p-4 md:p-8 rounded-[2.5rem]">
                 <CardHeader className="mb-6">
                    <CardTitle className="text-3xl font-black font-display tracking-tight">Send a message</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <Label className="font-bold text-xs uppercase tracking-widest opacity-60">First Name</Label>
                             <Input placeholder="John" className="h-14 bg-background/50 border-brand-100/50 rounded-xl focus:ring-4 focus:ring-brand-500/10" />
                        </div>
                        <div className="space-y-2">
                             <Label className="font-bold text-xs uppercase tracking-widest opacity-60">Last Name</Label>
                             <Input placeholder="Doe" className="h-14 bg-background/50 border-brand-100/50 rounded-xl focus:ring-4 focus:ring-brand-500/10" />
                        </div>
                    </div>
                    <div className="space-y-2">
                         <Label className="font-bold text-xs uppercase tracking-widest opacity-60">Email Address</Label>
                         <Input type="email" placeholder="john@example.com" className="h-14 bg-background/50 border-brand-100/50 rounded-xl focus:ring-4 focus:ring-brand-500/10" />
                    </div>
                    <div className="space-y-2">
                         <Label className="font-bold text-xs uppercase tracking-widest opacity-60">Your Message</Label>
                         <textarea 
                            className="flex min-h-[160px] w-full rounded-xl border border-brand-100/50 bg-background/50 px-4 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-medium" 
                            placeholder="Tell us what you're building..."
                         />
                    </div>
                    <Button className="w-full h-16 gap-3 text-lg font-bold rounded-2xl shadow-xl shadow-brand-600/20 active:scale-95 transition-all">
                        Dispatch Message <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                    </Button>
                 </CardContent>
             </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};
