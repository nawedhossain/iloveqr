import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const LegalPage = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold font-display mb-8">{title}</h1>
        <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: May 13, 2026</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>Welcome to I Love QR Code. These terms govern your use of our website and services.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. User Accounts</h2>
            <p>You must maintain the security of your account and are responsible for all activities under your account.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Service Usage</h2>
            <p>Our service allows you to generate static QR codes. We do not track the content of your QR codes once generated.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
