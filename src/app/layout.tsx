import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/css/slider.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componetns/Navbar";
import Footer from "./componetns/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Bhavani Dryfruit Dish Gola - No.1 Gola",
  description: "We are known for best quality gola serve in rajkot like Cadbury, Butterscotch, Choco Ball, Ferrero Rocher Gola, Brownie Gola and many more other Flavours. We are giving best gola service since 1990.",
  keywords: "rajkot famous gola, jay bhavani dry fruit dish gola, gola, bhavani gola, jay bhavani gola,"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
