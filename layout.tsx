import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asistencia al cuidadano de Atizapán de Zaragosa",
  description: "crea una app con crewAI para dar soporte a los ciudadanos de ese municipio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}
