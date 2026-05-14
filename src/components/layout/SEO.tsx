import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  name?: string;
}

export const SEO = ({ 
  title = "I Love QR Code | Professional QR Generator", 
  description = "Generate beautiful, custom QR codes for URLs, WiFi, VCards, UPI, and more. Highly customizable patterns, colors, and logos.",
  canonical = "https://iloveqrco.de",
  type = "website",
  name = "I Love QR Code"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};
