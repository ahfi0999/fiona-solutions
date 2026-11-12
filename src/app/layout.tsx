import type { Metadata } from "next";
import { Lato, Poppins, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Only used by the AI/ML page tab labels, which use Roboto on the live site.
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Header mega-menu labels use Lato on the live site.
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Fiona Solutions | Transforming Businesses with Advanced IT Solutions",
  description:
    "Empowering organizations across industries, we combine digital expertise and strategic advisory to drive innovation with tailored IT solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${lato.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
