import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Forest's World",
  description: "Hire me to build your next project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>
          <div className="background" />
          <main className="fade-in min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
