import type { Metadata } from "next";
import { Syne, Geist_Mono } from "next/font/google"; // Import Syne here
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// Configure Syne
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Matches your link weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Modern dashboard built with Next.js, Supabase, and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // Add syne.variable here
      className={`${syne.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}