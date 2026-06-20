import type {Metadata} from 'next';
import './globals.css';
import { CustomCursor } from '@/components/portfolio/custom-cursor';

export const metadata: Metadata = {
  title: 'Syed Sharfuddin Shuaib | Product Builder & Founder',
  description: 'Building Products That Matter. Full Stack Developer, Product Architect, and Founder focused on solving meaningful problems.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Inter+Tight:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden lg:cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
