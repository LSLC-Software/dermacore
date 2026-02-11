import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "DermaCore",
  description: "DermaCore Application",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LSLC Software
  DermaCore System
  
  Architects & Lead Developers:
    - LautAp
    - Senkupai Joelox
    - LuiG
    - Calisinho
  
  © 2026 LSLC Software
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/}
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
