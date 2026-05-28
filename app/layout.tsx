import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "EPS Services — Professional Property Maintenance & Cleaning in Singapore",
  description: "Trusted Singapore home services since 2014. Cleaning, painting, repairs, marble polishing, plumbing, electrical works and move-in solutions.",
  metadataBase: new URL("https://epsservices.sg"),
  openGraph: {
    title: "EPS Services — Premium Property Maintenance & Cleaning in Singapore",
    description: "One-stop property solutions for landlords, tenants, agents and homeowners. Trusted since 2014.",
    url: "https://epsservices.sg",
    siteName: "EPS Services",
    locale: "en_SG",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPS Services — Premium Property Maintenance & Cleaning in Singapore",
    description: "Trusted Singapore home services since 2014.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}