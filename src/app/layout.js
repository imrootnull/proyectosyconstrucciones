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
  icons: {
    icon: "/public/favicon.png",
    shortcut: "/public/favicon.png",
    apple: "/public/favicon.png", // opcional para iOS
  },
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
  openGraph: {
    type: "website",
    url: "https://proyectosyconstrucciones.mx",
    title: "Corporativo de Proyectos y Construcciones",
    description:
      "Soluciones profesionales en construcción: proyectos ejecutivos, obra civil, acabados, dirección y supervisión.",
    siteName: "Proyectos y Construcciones",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Proyectos y Construcciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporativo de Proyectos y Construcciones",
    description:
      "Diseño y ejecución de proyectos de construcción con calidad, seguridad y tiempos controlados.",
    images: ["/og-cover.jpg"],
  },
  alternates: { canonical: "https://proyectosyconstrucciones.mx" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
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
