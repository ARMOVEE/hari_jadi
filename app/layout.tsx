import type { Metadata, Viewport } from "next";
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
  title: "Hari Jadi Kita 💕",
  description:
    "Halaman spesial merayakan hari jadi kita — setiap momen bersamamu berharga.",
};

/* ── Viewport: critical for responsive on mobile ── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,   // prevents auto-zoom on input focus (iOS)
  userScalable: false,
  viewportFit: "cover", // lets content go edge-to-edge on notch phones
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
