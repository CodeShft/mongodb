import { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700", "700"],
});

export const metadata: Metadata = {
  title: "Click.com",
  description: "Discover amazing shoes on Click.com",
  icons: {
    icon: "https://icones.pro/wp-content/uploads/2021/06/cliquez-sur-le-symbole-orange.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} flex flex-col `}>
        <Navbar />
        <main className="flex-grow pt-16 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
