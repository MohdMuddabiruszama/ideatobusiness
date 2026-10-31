import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const viewport: Viewport = {
  themeColor: '#0B2D1F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'IDEATOBUSINESS — Turn Your Idea Into a Real Business',
    template: '%s | IDEATOBUSINESS',
  },
  description:
    'One platform to start, build, and grow your business. Business registration, branding, website development, marketplace selling, and marketing growth services.',
  icons: {
    icon: '/logos/Favicon.svg',
    apple: '/logos/Favicon.svg',
  },
  keywords: [
    'start business India',
    'business registration assistance',
    'company launch services',
    'ecommerce setup',
    'marketplace selling Amazon Flipkart Meesho',
    'startup website development',
    'branding logo design',
  ],
  authors: [{ name: 'IDEATOBUSINESS' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ideatobusiness.in',
    title: 'IDEATOBUSINESS — Turn Your Idea Into a Real Business',
    description:
      'Turn your business idea into a launched and growing reality. Essential startup, branding, tech, and ecommerce services in one place.',
    siteName: 'IDEATOBUSINESS',
    images: [
      {
        url: '/social media logo/Social sharing  Open Graph image.png',
        width: 1200,
        height: 630,
        alt: 'IDEATOBUSINESS Launch Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDEATOBUSINESS — Turn Your Idea Into a Real Business',
    description:
      'Turn your business idea into a launched and growing reality. Essential startup, branding, tech, and ecommerce services in one place.',
    images: ['/social media logo/Social sharing  Open Graph image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-navy antialiased flex flex-col font-sans selection:bg-brand-mint selection:text-brand-deep">
        <Header />
        <main className="flex-1 pt-18 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
