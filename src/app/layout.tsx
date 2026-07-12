import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import { Footer, Header } from "@/components";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <div className="pageContent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
