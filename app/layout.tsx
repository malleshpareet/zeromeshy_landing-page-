import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "ZeroMeshy - Social Media Automation",
  description: "Automate your social presence with AI-driven precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} dark`} suppressHydrationWarning>
      <body className="antialiased bg-black text-white selection:bg-[#b0ff2e] selection:text-black">
        {children}
      </body>
    </html>
  );
}
