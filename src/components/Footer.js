"use client";

import Link from "next/link";
import {
  Home,
  Users,
  FolderKanban,
  Phone,
  Clock,
  MapPin,
  Mail,
  Hammer,
  Ruler,
  HardHat,
  ClipboardList,
  ArrowUp,
  Building2,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* —— Contenido principal —— */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        {/* Marca / descripción */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-bold text-white">
            <Building2 className="h-5 w-5 text-amber-400" />
            Corporativo de Proyectos y Construcciones
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Ingeniería, diseño y construcción profesional. Obras con calidad,
            seguridad y cumplimiento.
          </p>
          <address className="mt-5 not-italic text-sm space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              Villahermosa, Tabasco, México
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-400" />
              <a href="tel:+529930000000" className="hover:text-amber-400">
                +52 993 000 0000
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-400" />
              <a
                href="mailto:contacto@proyectosyconstrucciones.mx"
                className="hover:text-amber-400"
              >
                contacto@proyectosyconstrucciones.mx
              </a>
            </p>
          </address>
        </div>

        {/* Navegación */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
            <Home className="h-4 w-4 text-amber-400" />
            Navegación
          </h5>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-amber-400"
              >
                <ChevronRight className="h-4 w-4" /> Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="flex items-center gap-2 hover:text-amber-400"
              >
                <Users className="h-4 w-4" /> Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="flex items-center gap-2 hover:text-amber-400"
              >
                <Hammer className="h-4 w-4" /> Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                className="flex items-center gap-2 hover:text-amber-400"
              >
                <FolderKanban className="h-4 w-4" /> Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="flex items-center gap-2 hover:text-amber-400"
              >
                <Phone className="h-4 w-4" /> Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
            <Hammer className="h-4 w-4 text-amber-400" />
            Servicios Destacados
          </h5>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-amber-400">
              <Hammer className="h-4 w-4" /> Obra civil
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400">
              <Ruler className="h-4 w-4" /> Proyectos ejecutivos
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400">
              <HardHat className="h-4 w-4" /> Dirección y supervisión
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400">
              <ClipboardList className="h-4 w-4" /> Remodelaciones
            </li>
          </ul>
        </div>

        {/* Horario y “Volver arriba” */}
        <div>
          <h5 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
            <Clock className="h-4 w-4 text-amber-400" />
            Horario
          </h5>
          <p className="mt-4 text-sm text-slate-400">
            Lunes a Viernes
            <br /> 9:00 – 18:00
          </p>
          <button
            onClick={scrollToTop}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-amber-400"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
            Volver arriba
          </button>
        </div>
      </div>

      {/* —— Línea inferior —— */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs sm:flex-row">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Corporativo de Proyectos y
            Construcciones. Todos los derechos reservados.
          </p>
          <p className="text-slate-500">
            Designed &amp; Engineered by{" "}
            <a
              href="https://github.com/imrootnull"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 transition hover:text-amber-300"
              title="RootNull"
            >
              RootNull ⚡
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
