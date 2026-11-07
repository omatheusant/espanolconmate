import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.espanolconmate.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Español con Mate — Tu guía de español",
  description:
    "Aprenda espanhol de verdade, no seu ritmo. Español con Mate é o seu guia para falar espanhol com naturalidade e confiança.",
  openGraph: {
    title: "Español con Mate — Tu guía de español",
    description:
      "Aprenda espanhol de verdade, no seu ritmo. Español con Mate é o seu guia para falar espanhol com naturalidade e confiança.",
    url: siteUrl,
    siteName: "Español con Mate",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-5 focus-visible:py-3 focus-visible:text-sm focus-visible:font-medium focus-visible:text-cream"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
