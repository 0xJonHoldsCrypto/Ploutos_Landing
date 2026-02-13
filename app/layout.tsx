import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ploutos.money"),
  title: "Ploutos | The Future of On-Chain Lending",
  description: "Ploutos is the premier non-custodial liquidity market protocol on Hemi. Earn interest on deposits and borrow assets with industry-leading efficiency.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Ploutos | The Future of On-Chain Lending",
    description: "Ploutos is the premier non-custodial liquidity market protocol on Hemi.",
    url: "https://ploutos.money",
    siteName: "Ploutos",
    images: [
      {
        url: "/logo.png", // Ideally a larger OG image
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ploutos | The Future of On-Chain Lending",
    description: "Ploutos is the premier non-custodial liquidity market protocol on Hemi.",
    images: ["/logo.png"],
    creator: "@ploutos_money",
  },
  keywords: ["DeFi", "Lending", "Borrowing", "Hemi Network", "Crypto", "Ploutos", "Finance", "Yield"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
