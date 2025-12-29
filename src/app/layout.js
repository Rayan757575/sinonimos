import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GoogleTranslate from "@/components/GoogleTranslate";
import { LanguageProvider } from "@/context/LanguageContext";
import PageLoader from "@/components/PageLoader"; // <--- Importe aqui

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
  description: "Find synonyms fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>

          <PageLoader />
          <GoogleTranslate />
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}