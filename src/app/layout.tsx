import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Caremax",
  description:
    "Modern pharmacy management software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}