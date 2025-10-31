// app/nosotros/page.js
import Nosotros from "./Nosotros";

export const metadata = {
  metadataBase: new URL("https://proyectosyconstrucciones.mx"),
  title: "Nosotros | Corporativo de Proyectos y Construcciones",
  description:
    "Conoce quiénes somos: misión, visión, valores y trayectoria de Corporativo de Proyectos y Construcciones. Ingeniería, seguridad y precisión en cada obra.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    type: "website",
    url: "https://proyectosyconstrucciones.mx/nosotros",
    title: "Nosotros | CPC Proyectos y Construcciones",
    description:
      "Equipo experto, procesos claros y compromiso con la calidad. Conoce nuestra misión, visión y valores.",
    images: [{ url: "https://proyectosyconstrucciones.mx/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | CPC Proyectos y Construcciones",
    description:
      "Trayectoria, misión, visión y valores de nuestro corporativo.",
    images: ["https://proyectosyconstrucciones.mx/og-cover.jpg"],
  },
};

export default function Page() {
  return <Nosotros />;
}
