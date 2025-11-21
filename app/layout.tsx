import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassHeader from "./components/GlassHeader";
import SocialFloat from "./components/SocialFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeffrey Solomon",
  description: "Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlassHeader brand="Jeffrey Solomon" />
        {children}
        <SocialFloat
          linkedin="https://linkedin.com/in/jeffreysolomon123"
          github="https://github.com/jeffreysolomon123"
          instagram="https://instagram.com/jefffffrey"
          youtube="https://www.youtube.com/@jeffreysolomon1107"
        />
      </body>
    </html>
  );
}
