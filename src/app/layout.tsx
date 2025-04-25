import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Updated import path
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Booster Lovers - Authentic Ethiopian Coffee in Nanjing",
  description:
    "Experience the rich tradition of Ethiopian coffee ceremony in the heart of Nanjing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
