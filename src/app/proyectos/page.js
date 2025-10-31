// app/proyectos/page.js
import Proyectos from "./Proyectos";

export const metadata = {
  metadataBase: new URL("https://proyectosyconstrucciones.mx"),
  title: "Proyectos | Corporativo de Proyectos y Construcciones",
  description:
    "Portafolio de obras y proyectos ejecutados: industrial, comercial, institucional y residencial. Ingeniería, seguridad y precisión.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    type: "website",
    url: "https://proyectosyconstrucciones.mx/proyectos",
    title: "Proyectos | CPC Proyectos y Construcciones",
    description:
      "Muestra de naves industriales, complejos corporativos, remodelaciones y obras llave en mano.",
    images: [{ url: "https://proyectosyconstrucciones.mx/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos | CPC Proyectos y Construcciones",
    description:
      "Ejecución integral con control de calidad y cumplimiento en tiempos.",
    images: ["https://proyectosyconstrucciones.mx/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <Proyectos />;
}
