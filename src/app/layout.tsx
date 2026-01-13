import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  display: 'swap',
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gwo Piña Buchanan | Seattle & Bellevue Luxury Real Estate",
  description: "Luxury Real Estate Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
