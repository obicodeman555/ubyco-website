import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import { Analytics, Footer, Header } from "@/components";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fast, Secure Crypto & Gift Card Trading Through WhatsApp and Telegram - Ubycohub",
  description:
    "This is Ubycohub's official website. Ubycohub helps individuals and businesses sell crypto and gift cards securely, receive fast naira payouts, and trade directly with a real human support team through WhatsApp or Telegram.",
  metadataBase: new URL("https://acme.com"),
  openGraph: {
    url: "https://ubycohub.com",
    siteName: "Ubycohub",
    locale: "en_US",
    type: "website",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Analytics 4 (GA4) Base Code */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BHPDP12PZV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Meta Pixel Base Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <Analytics />
        <Header />
        <div className="pageContent">{children}</div>
        <Footer />
        {/* Meta Pixel Noscript Fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3245146915875158&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
