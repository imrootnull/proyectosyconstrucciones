// app/servicios/page.js
export const metadata = {
  metadataBase: new URL("https://proyectosyconstrucciones.mx"),
  title: "Servicios de Construcción y Proyectos | CPC Proyectos y Construcciones",
  description:
    "Obra civil, proyectos ejecutivos, dirección y supervisión, remodelaciones, calidad y documentación. Ejecutamos con seguridad, tiempos y precisión en todo México.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    type: "website",
    url: "https://proyectosyconstrucciones.mx/servicios",
    title: "Servicios | CPC Proyectos y Construcciones",
    description:
      "Soluciones integrales en construcción: desde anteproyecto hasta entrega, con control de calidad, documentación y cumplimiento normativo.",
    images: [
      {
        url: "/og/servicios.jpg", // imagen 1200x630 opcional
        width: 1200,
        height: 630,
        alt: "CPC Proyectos y Construcciones – Servicios integrales de obra civil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | CPC Proyectos y Construcciones",
    description:
      "Obra civil, proyectos ejecutivos y dirección con estándares de calidad y cumplimiento.",
    images: ["/og/servicios.jpg"],
  },
  robots: { index: true, follow: true },
};

import Servicios from "./Servicios";

export default function Page() {
  return <Servicios />;
}
