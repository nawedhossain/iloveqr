import React, { useState, useCallback, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TypeSelector } from '../components/qr/TypeSelector';
import { TypeForm } from '../components/qr/TypeForm';
import { StyleConfig } from '../components/qr/StyleConfig';
import { QRPreview, downloadQR } from '../components/qr/QRPreview';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { QRType, defaultStyle, QRStyleSettings } from '../types/qr';
import { generateQRContent } from '../lib/qr-utils';
import { Download, Save, Share2, Sparkles, Wand2, FileText, ChevronDown, Twitter, Facebook, Linkedin, Send, Mail, Link2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const XIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.451h2.038L6.486 3.243H4.3z"/>
  </svg>
);

export const GeneratorPage = () => {
  const [type, setType] = useState<QRType>('url');
  const [data, setData] = useState<any>({ url: 'https://iloveqrcode.com' });
  const [style, setStyle] = useState<QRStyleSettings>(defaultStyle);
  const [logo, setLogo] = useState<string | null>('https://iloveqrco.de/logo.png');
  const [title, setTitle] = useState('My Awesome QR');
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const qrContent = generateQRContent(type, data);

  const qrOptions = useMemo(() => ({
    ...style,
    data: qrContent,
    image: logo || undefined,
  }), [style, qrContent, logo]);

  const handleDownload = (format: any) => {
    downloadQR(qrOptions as any, format, style);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=Check out my QR Code!&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    whatsapp: `https://api.whatsapp.com/send?text=Check out my QR Code: ${encodeURIComponent(window.location.href)}`,
    email: `mailto:?subject=My QR Code&body=Check out the QR code I generated: ${encodeURIComponent(window.location.href)}`
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ILOVEQR Generator',
          text: `Check out this QR Code: ${title}`,
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
          setShowShareMenu(true);
        }
      }
    } else {
      setShowShareMenu(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-brand-100/50 text-brand-600 text-xs font-bold mb-6"
          >
            <Sparkles className="h-3 w-3" />
            STYLISH QR GENERATOR
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-foreground">
            Create Your <span className="text-gradient">Perfect</span> QR Code
          </h1>
          <p className="text-muted-foreground text-lg">
            Customize everything from patterns to colors. Add your brand logo and make it stand out.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.02),transparent_70%)] pointer-events-none -z-10" />
          
          <div className="xl:col-span-8">
            <div className="space-y-6">
              {/* Step 1: Type Selection */}
              <section>
                <div className="glass-card p-6 rounded-[2rem] border-brand-100/30 shadow-xl bg-white/50">
                  <TypeSelector selected={type} onChange={setType} />
                </div>
              </section>

              {/* Step 2: Content Details */}
              <section>
                <Card className="glass-card border-none shadow-xl rounded-[2.5rem] overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-6 p-6 rounded-2xl bg-brand-50/50 border border-brand-100/30">
                        <label className="text-[10px] font-black mb-3 block text-brand-600 uppercase tracking-[0.2em] leading-none">Project Title</label>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-white border-2 border-brand-100/50 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold placeholder:opacity-30"
                            placeholder="E.g. My Awesome QR"
                        />
                    </div>
                    <TypeForm type={type} data={data} onChange={setData} />
                  </CardContent>
                </Card>
              </section>

              {/* Step 3: Style Config */}
              <section>
                <Card className="glass-card border-none shadow-xl rounded-[2.5rem] overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <StyleConfig settings={style} currentLogo={logo} onChange={setStyle} onLogoUpload={setLogo} />
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>

          {/* Sticky Preview Sidebar */}
          <div className="xl:col-span-4 xl:sticky xl:top-24 mt-12 xl:mt-0">
             <Card className="overflow-hidden border-brand-100/30 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] relative rounded-[2.5rem]">
                <div className="absolute top-6 right-6 z-10">
                     <span className="flex items-center gap-1.5 text-[10px] font-black text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-widest ring-1 ring-brand-500/10 shadow-sm">
                        <Wand2 className="h-3 w-3" /> LIVE PREVIEW
                     </span>
                </div>
                
                <div className="p-10 flex flex-col items-center justify-center bg-brand-50/10 border-b border-brand-100/10">
                    <motion.div
                      key={qrContent + JSON.stringify(style.frameOptions)}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-6 bg-brand-500/5 rounded-[4rem] blur-2xl group-hover:bg-brand-500/10 transition-colors duration-500" />
                        <QRPreview options={qrOptions as any} settings={style} className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl ring-1 ring-brand-100/50 w-full max-w-[320px]" />
                      </div>
                    </motion.div>
                </div>

                <div className="p-8 space-y-4">
                        <div className="relative">
                            <Button 
                              className="w-full h-14 text-sm font-black rounded-2xl gap-2 shadow-xl shadow-brand-600/20 tracking-widest" 
                              variant="primary" 
                              onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                            >
                                <Download className="h-4 w-4" /> DOWNLOAD QR <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDownloadMenu ? 'rotate-180' : ''}`} />
                            </Button>

                            <AnimatePresence>
                              {showDownloadMenu && (
                                <>
                                  <div className="fixed inset-0 z-40" onClick={() => setShowDownloadMenu(false)} />
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute bottom-full mb-4 left-0 right-0 z-50 glass-card p-2 border-brand-100/50 shadow-2xl overflow-hidden rounded-2xl"
                                  >
                                    <div className="grid grid-cols-2 gap-2">
                                      {[
                                        { id: 'png', label: 'PNG', icon: Download },
                                        { id: 'svg', label: 'SVG', icon: Download },
                                        { id: 'jpeg', label: 'JPG', icon: Download },
                                        { id: 'pdf', label: 'PDF', icon: FileText },
                                      ].map((fmt) => (
                                        <button
                                          key={fmt.id}
                                          onClick={() => {
                                            handleDownload(fmt.id);
                                            setShowDownloadMenu(false);
                                          }}
                                          className="flex items-center gap-3 p-4 rounded-xl hover:bg-brand-600 hover:text-white transition-all duration-300 text-left group"
                                        >
                                          <div className="h-10 w-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                            <fmt.icon className="h-5 w-5" />
                                          </div>
                                          <div className="text-xs font-black tracking-widest">{fmt.label}</div>
                                        </button>
                                      ))}
                                    </div>
                                  </motion.div>
                                </>
                              )}
                            </AnimatePresence>
                        </div>

                        <div className="relative">
                            <Button 
                              className="w-full h-12 rounded-2xl gap-2 font-black text-xs uppercase tracking-widest bg-brand-50 text-brand-600 border-none hover:bg-brand-100 transition-colors" 
                              variant="ghost" 
                              onClick={handleShare}
                            >
                                <Share2 className="h-5 w-5" /> Share With Friends
                            </Button>

                            <AnimatePresence>
                            {showShareMenu && (
                              <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowShareMenu(false)} />
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                  className="absolute bottom-full right-0 mb-4 z-50 glass-card p-2 border-brand-100/50 shadow-2xl min-w-[200px] rounded-2xl"
                                >
                                  <div className="flex flex-col gap-1">
                                    <div className="px-3 py-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest border-b border-brand-100/30 mb-1">Share via</div>
                                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold">
                                      <XIcon className="h-4 w-4 text-black" /> Twitter / X
                                    </a>
                                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold">
                                      <Facebook className="h-4 w-4 text-[#1877F2]" /> Facebook
                                    </a>
                                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold">
                                      <Send className="h-4 w-4 text-[#25D366]" /> WhatsApp
                                    </a>
                                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold">
                                      <Linkedin className="h-4 w-4 text-[#0A66C2]" /> LinkedIn
                                    </a>
                                    <a href={shareLinks.email} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold">
                                      <Mail className="h-4 w-4 text-gray-500" /> Email
                                    </a>
                                    <button 
                                      onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        setShowShareMenu(false);
                                      }}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 text-brand-700 transition-colors text-xs font-bold w-full text-left"
                                    >
                                      <Link2 className="h-4 w-4 text-brand-600" /> Copy Link
                                    </button>
                                  </div>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                </div>

             </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
