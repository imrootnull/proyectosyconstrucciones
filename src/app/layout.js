// app/layout.js
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://proyectosyconstrucciones.mx"),
  title: {
    default: "Corporativo de Proyectos y Construcciones",
    template: "%s | Corporativo de Proyectos y Construcciones",
  },
  description:
    "Diseño y construcción de obra civil, remodelaciones, dirección de obra y ejecución integral con calidad y seguridad.",
  keywords: [
    "construcción",
    "obra civil",
    "remodelaciones",
    "dirección de obra",
    "presupuestos",
    "supervisión",
    "proyectos ejecutivos",
    "Villahermosa",
    "Tabasco",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://proyectosyconstrucciones.mx",
    title: "Corporativo de Proyectos y Construcciones",
    description:
      "Soluciones profesionales en construcción: proyectos ejecutivos, obra civil, acabados, dirección y supervisión.",
    siteName: "Proyectos y Construcciones",
    locale: "es_MX",
    images: [
      {
        url: "https://proyectosyconstrucciones.mx/og-cover.jpg", // ⚠️ ruta absoluta, no relativa
        width: 1200,
        height: 630,
        alt: "Corporativo de Proyectos y Construcciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@proyectosyconstrucciones", // opcional
    title: "Corporativo de Proyectos y Construcciones",
    description:
      "Diseño y ejecución de proyectos de construcción con calidad, seguridad y tiempos controlados.",
    images: ["https://proyectosyconstrucciones.mx/og-cover.jpg"], // ⚠️ también absoluta
  },
  alternates: {
    canonical: "https://proyectosyconstrucciones.mx",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Corporativo de Proyectos y Construcciones",
              url: "https://proyectosyconstrucciones.mx",
              image: "https://proyectosyconstrucciones.mx/og-cover.jpg",
              telephone: "+52 993 000 0000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Villahermosa, Tabasco, México",
                addressRegion: "Tabasco",
                addressCountry: "MX",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
