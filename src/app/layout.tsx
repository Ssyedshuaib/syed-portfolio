
import type {Metadata} from 'next';
import './globals.css';
import { CustomCursor } from '@/components/portfolio/custom-cursor';

export const metadata: Metadata = {
  title: 'Syed Sharfuddin Shuaib | Founder & Product Architect',
  description: 'Syed Sharfuddin Shuaib is the Founder of Axora, a venture studio architecting digital ecosystems across education, memory, and productivity. Building systems that outlive trends.',
  keywords: ['Syed Sharfuddin Shuaib', 'Axora', 'Product Architect', 'Founder', 'Venture Studio', 'Product Builder', 'Bangalore', 'DevNexus', 'Reverie'],
  authors: [{ name: 'Syed Sharfuddin Shuaib' }],
  creator: 'Syed Sharfuddin Shuaib',
  publisher: 'Axora Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://axora.in',
    title: 'Syed Sharfuddin Shuaib | Founder & Product Architect',
    description: 'Architecting digital ecosystems that solve meaningful problems. Founder of Axora.',
    siteName: 'Syed Sharfuddin Shuaib',
    images: [
      {
        url: 'https://picsum.photos/seed/axora-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'Syed Sharfuddin Shuaib - Axora Venture Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Sharfuddin Shuaib | Founder & Product Architect',
    description: 'Building systems that outlive trends. Founder of Axora Venture Studio.',
    images: ['https://picsum.photos/seed/axora-og/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical font stylesheet */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Inter+Tight:wght@500;600;700;800;900&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Inter+Tight:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Syed Sharfuddin Shuaib",
              "jobTitle": "Founder & Product Architect",
              "url": "https://axora.in",
              "sameAs": [
                "https://www.linkedin.com/in/syedshuaib485/"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Axora Studio"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden lg:cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
