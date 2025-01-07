import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["700", "800"] });

export const metadata: Metadata = {
  title: "Click.com",
  description: "Discover amazing products and services on Click.com",
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
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          <header className="w-full fixed top-0 left-0 z-10">
            <Navbar />
          </header>

          <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-0">
            {children}
          </main>

          <footer className="bg-purple-400 text-center py-4 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
