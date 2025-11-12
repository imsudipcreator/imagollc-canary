import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from '@clerk/nextjs';
import 'framework7-icons';
import { type Metadata } from "next";
import { Beau_Rivage, BenchNine } from "next/font/google";
import FooterWrapper from "./_components/FooterWrapper";
import NavbarWrapper from "./_components/NavbarWrapper";
import { NavbarProvider } from "./_contexts/NavbarContext";

const beauRivage = Beau_Rivage({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-beau",
});

const benchnine = BenchNine({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-bench",
});


export const metadata: Metadata = {
  title: "Imago (India)",
  description: "Imago is the central platform for all your apps and websites, featuring Imago Intelligence to enhance your digital experience. Access your tools, explore new projects, and tap into powerful AI features in one place.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  openGraph: {
    title: "Imago llc",
    description: "Welcome to imago llc. Here we craft intelligent digital solutions — Apps, Websites & AI That Work for You.",
    url: "https://imagollc.vercel.app",
    siteName: "Imago llc",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imago llc"
      }
    ],
    locale: "en-US",
    type: "website"
  },
  authors: [
    {
      name: "Sudip Mahata",
      url: "https://portofolio-eight-orcin.vercel.app/"
    },
    {
      name: "Imagollc Team",
      url: "https://imagollc.vercel.app/"
    }
  ],
  keywords: [
    "Imago llc",
    "Imago hub",
    "Imago Intelligence",
    "Imago AI",
    "Imago Creator",
    "ICreator",
    "Imago Editor",
    "IEditor",
    "AI app builder",
    "AI web development",
    "custom web apps",
    "business automation AI",
    "AI-powered tools",
    "next-gen apps",
    "SaaS platform",
    "cloud app solutions",
    "AI development services",
    "web design and AI",
    "intelligent software solutions",
    "app and website hub",
    "AI for small business",
    "digital transformation tools",
    "AI content creator",
    "modern web platform",
    "AI startup tools"
  ],
  creator: "Sudip Mahata",
  publisher: "Imagollc"
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${beauRivage.variable} ${benchnine.variable}`}>
          <TRPCReactProvider>
            <NavbarProvider>
              <NavbarWrapper />
              {children}
              <FooterWrapper />
            </NavbarProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
