import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lasse Mostuen Portfolio",
  description: "Portfolio for Lasse Mostuen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300 dark:bg-background dark:text-foreground`}
        suppressHydrationWarning
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
