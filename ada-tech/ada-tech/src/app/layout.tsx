import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/styles/ThemeRegistry";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ada Tech",
  description: "Transforming businesses with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AppRouterCacheProvider>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
