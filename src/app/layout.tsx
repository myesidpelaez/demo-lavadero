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
  title: "AquaWash — Lavadero Inteligente",
  description:
    "Demo profesional de sistema de gestión para lavadero de vehículos. Reservas online, seguimiento en tiempo real y gestión de servicios.",
  keywords: ["lavadero", "car wash", "reservas", "demo", "next.js"],
  openGraph: {
    title: "AquaWash — Lavadero Inteligente",
    description: "Demo profesional de sistema de gestión para lavadero",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
