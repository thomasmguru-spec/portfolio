import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Thomas McKinney",
    template: "%s | Thomas McKinney",
  },
  description: "Senior AI Engineer | Ex-Google | Full-Stack Architect - Portfolio & Blog",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { ResumeProvider } from "@/components/ResumeModal";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col pt-16 bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ResumeProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <Toaster position="bottom-right" richColors />
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
