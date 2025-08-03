import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "USS Enterprises",
  description: "USS Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${inter.variable} dark`}>
        {children}
      </body>
    </html>
  );
}
