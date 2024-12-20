import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/theme/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark">
      <I18nProvider>
        <ThemeProvider>
          <body className={`${dmSans.variable} antialiased min-h-screen`}>
            <Navigation />
            {children}
          </body>
        </ThemeProvider>
      </I18nProvider>
    </html>
  );
}
