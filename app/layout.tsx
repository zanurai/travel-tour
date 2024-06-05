import Header from "@/components/Header";

import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Tour and Travel app",
  description: "Tour and Travel app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-tertiary overflow-x-hidden ${nunito.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
