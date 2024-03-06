import type { Metadata } from "next";

import { Header } from "../components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "app/sass/globals.scss";

export const metadata: Metadata = {
  title: "Next Mind Lab (Title Test)",
  description: "This is a test description in layout.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Header/>

        {children}

        <Footer/>

      </body>
    </html>
  );
}
