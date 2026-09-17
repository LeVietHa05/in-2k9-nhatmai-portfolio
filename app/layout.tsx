import type { Metadata } from "next";
import { Inter, Moul } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const moul = Moul({
  variable: "--font-geist",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nhat Mai Portfolio",
  description: "Nhat Mai Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${moul.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-[#eee]">{children}</body>
    </html>
  );
}
