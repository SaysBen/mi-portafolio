import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://adonay-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adonay Culebro García — Physics Engineer | Data Science & HPC",
  description:
    "Portafolio de Adonay Benjamín Culebro García: ingeniero físico especializado en ciencia de datos, HPC y computación científica (DFT, TD-DFT, GW). Proyectos, publicación revisada por pares y CV.",
  openGraph: {
    title: "Adonay Culebro García — Physics Engineer | Data Science & HPC",
    description:
      "Ciencia de datos, HPC y computación científica. Proyectos, publicación revisada por pares y CV.",
    url: SITE_URL,
    siteName: "Adonay Culebro García",
    images: [{ url: "/perf.jpg", width: 400, height: 400 }],
    locale: "es_MX",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Adonay Culebro García — Physics Engineer | Data Science & HPC",
    description:
      "Ciencia de datos, HPC y computación científica. Proyectos, publicación revisada por pares y CV.",
    images: ["/perf.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
