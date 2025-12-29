import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import IdiomaSelectMenu from "@/components/IdiomaSelectMenu";
import GoogleTranslate from "@/components/GoogleTranslate"; // Importando o novo componente

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Synonyms Finder",
  description: "Synonyms Finder - Find synonyms for any word quickly and easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Google Translate */}
        <GoogleTranslate/>
      </body>
    </html>
  );
}
