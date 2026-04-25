import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IVAPROA IMPORT | Innovación en Importaciones – Conocoto, Quito",
  description:
    "Tienda de tecnología en Conocoto, Valle de los Chillos. Celulares nuevos y sellados, garantía real, envíos a todo Ecuador por Servientrega y Urbano. Xiaomi, Samsung, Infinix, Honor, Tecno, Motorola, Apple.",
  openGraph: {
    title: "IVAPROA IMPORT | Innovación en Importaciones",
    description: "Importaciones directas. Garantía real. Envíos a todo Ecuador.",
    type: "website",
    locale: "es_EC",
  },
  keywords: [
    "celulares Conocoto",
    "tecnología Valle de los Chillos",
    "importaciones Quito",
    "Xiaomi Ecuador",
    "Samsung Ecuador",
    "celulares nuevos sellados",
    "IVAPROA IMPORT",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
