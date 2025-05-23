import { ReactNode } from "react";
import { Bebas_Neue } from "next/font/google";
import StyledComponentsRegistry from "../registry";
import "./globals.css"; // Ensure global styles are imported

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

interface RootLayoutProps {
  children: ReactNode;
}

// Metadata for SEO
export const metadata = {
  title: "Sandvika Platemesse",
  description: "Høl i Cvén - Studio 51 - Folkebadet - Ungdom og fritid Bærum Kommune",
  keywords: "Sandvika Platemesse, Høl i Cvén, Studio 51, Folkebadet, Ungdom og fritid, Bærum Kommune",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Sandvika Platemesse" />
        <meta name="description" content="Høl i Cvén - Studio 51 - Folkebadet - Ungdom og fritid Bærum Kommune" />
        <meta name="keywords" content="Sandvika Platemesse, Høl i Cvén, Studio 51, Folkebadet, Ungdom og fritid, Bærum Kommune" />
        
        {/* Google Analytics Script with your specific tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3423EF1KKM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-20VGERTNV7');
            `,
          }}
        />
      </head>
      <body className={`${bebas.className} antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}