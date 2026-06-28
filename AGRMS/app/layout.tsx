import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Preloader from "./components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AGRMS Transport - Reliable Truck Transport & Logistics Services",
  description:
    "Professional truck transport and logistics services across India. FTL, Part Load, Local, and Inter-State transport solutions. Book your truck today!",
  icons: {
    icon: [
      { url: "/images/AGRMS LOGO.png", sizes: "any" },
    ],
    shortcut: "/images/AGRMS LOGO.png",
    apple: "/images/AGRMS LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Preloader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
