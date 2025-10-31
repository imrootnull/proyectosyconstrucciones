// app/servicios/Servicios.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import {
  Building2,
  Ruler,
  HardHat,
  ClipboardList,
  BadgeCheck,
  LineChart,
  ShieldCheck,
  FileCheck2,
  Leaf,
  Warehouse,
  Store,
  Landmark,
  Home,
  Factory,
  Truck,
  ArrowRight,
  CheckCircle2,
  Timer,
  PhoneCall,
} from "lucide-react";

/* Animaciones */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
});

/* Catálogo */
const services = [
  {
    icon: Building2,
    title: "Obra civil y construcción",
    desc: "Cimentaciones, estructuras, albañilería y acabados. Planeación, costos y tiempos bajo control.",
  },
  {
    icon: Ruler,
    title: "Proyectos ejecutivos",
    desc: "Arquitectura, estructura e instalaciones con catálogos de conceptos, presupuestos y cronogramas.",
  },
  {
    icon: HardHat,
    title: "Dirección y supervisión",
    desc: "Coordinación de contratistas, verificación de avances y cumplimiento normativo y de seguridad.",
  },
  {
    icon: ClipboardList,
    title: "Remodelaciones integrales",
    desc: "Actualizaciones comerciales, residenciales e industriales con mínima interrupción operativa.",
  },
  {
    icon: BadgeCheck,
    title: "Calidad y documentación",
    desc: "Control de materiales, estimaciones, bitácora digital y cierre técnico completo.",
  },
  {
    icon: LineChart,
    title: "Atención a empresas",
    desc: "Ampliaciones, mantenimiento mayor y soluciones llave en mano para operación continua.",
  },
];

const extras = [
  {
    icon: Factory,
    title: "Naves industriales",
    desc: "Obra civil, pisos industriales y adecuaciones para producción y logística.",
  },
  {
    icon: Warehouse,
    title: "Centros logísticos",
    desc: "Racks, andenes, oficinas y adecuaciones MEP (eléctrico, voz y datos).",
  },
  {
    icon: Store,
    title: "Comercial y retail",
    desc: "Unidad de imagen, mobiliario, iluminación y acabados premium.",
  },
  {
    icon: Home,
    title: "Residencial",
    desc: "Vivienda nueva y remodelaciones con acabados de alto nivel.",
  },
  {
    icon: Landmark,
    title: "Obra institucional",
    desc: "Cumplimiento de especificaciones, normativas y procedimientos de auditoría.",
  },
  {
    icon: Truck,
    title: "Cobertura nacional",
    desc: "Planeación logística y personal certificado para proyectos en todo México.",
  },
];

export default function Servicios() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 500px at 10% 0%, rgba(255,255,255,0.08), transparent 60%),
              radial-gradient(700px 400px at 90% 30%, rgba(245,158,11,0.15), transparent 60%),
              radial-gradient(700px 400px at 50% 100%, rgba(255,255,255,0.06), transparent 60%)
            `,
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/90"
            >
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Portafolio integral de construcción
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Servicios de construcción con{" "}
              <span className="text-amber-400">ingeniería</span>,{" "}
              <span className="text-amber-400">seguridad</span> y{" "}
              <span className="text-amber-400">precisión</span>.
            </motion.h1>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 max-w-xl text-white/80 md:text-lg"
            >
              Ejecutamos desde el anteproyecto hasta la entrega con
              documentación, control de calidad y cumplimiento en cada etapa.
            </motion.p>
            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Solicitar cotización <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver catálogo de servicios
              </Link>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/maquinas-pesadas-y-trabajadores-de-la-construccion-trabajando-en-un-edificio.jpg"
                alt="Equipo de construcción en obra"
                fill
                priority
                className="object-cover"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex gap-3">
                <div className="rounded-xl bg-slate-900/70 p-3 backdrop-blur ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <FileCheck2 className="h-4 w-4 text-amber-400" />
                    Bitácora y estimaciones
                  </div>
                </div>
                <div className="rounded-xl bg-slate-900/70 p-3 backdrop-blur ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <BadgeCheck className="h-4 w-4 text-amber-400" />
                    Control de calidad
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <Section
        id="catalogo"
        title="Servicios que ejecutamos de principio a fin"
        subtitle="Soluciones para cada etapa del proyecto: diseño, obra y cierre técnico."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.05 * i)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <s.icon className="h-8 w-8 text-amber-600 transition group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-600"
              >
                Solicitar información <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTORES */}
      <Section
        id="sectores"
        title="Áreas y sectores que atendemos"
        subtitle="Experiencia en entornos industriales, comerciales, institucionales y residenciales."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {extras.map((x, i) => (
            <motion.div
              key={x.title}
              {...fadeUp(0.05 * i)}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <x.icon className="h-8 w-8 text-amber-600" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {x.title}
                </h3>
                <p className="mt-1 text-slate-600">{x.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CUMPLIMIENTO */}
      <Section
        id="cumplimiento"
        title="Cumplimiento y buenas prácticas"
        subtitle="Procesos claros, evidencia y responsabilidad ambiental."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Normativas y seguridad (NOM/NMX)",
              desc: "Protocolos de seguridad y cumplimiento aplicable en obra.",
            },
            {
              icon: FileCheck2,
              title: "Documentación completa",
              desc: "Bitácora digital, estimaciones y evidencias fotográficas por etapa.",
            },
            {
              icon: BadgeCheck,
              title: "Control de calidad",
              desc: "Pruebas de materiales y conformidad de especificaciones.",
            },
            {
              icon: Leaf,
              title: "Sustentabilidad",
              desc: "Manejo de residuos y uso eficiente de materiales.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <c.icon className="h-8 w-8 text-amber-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-1 text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL*/}
      <section id="cta-cpc" className="relative isolate overflow-hidden">
        {/* Fondo con patrón y brillo suave */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-10 rounded-3xl border border-amber-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-md md:grid-cols-3">
            {/* Columna 1: Claim principal */}
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                <ShieldCheck className="h-4 w-4 text-amber-600" />
                Presupuesto claro · Cumplimiento garantizado
              </span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                ¿Listo para cotizar tu obra o proyecto?
              </h3>
              <p className="mt-2 text-slate-700">
                Respuesta el mismo día. Te acompañamos desde el anteproyecto
                hasta la entrega, con control de calidad y tiempos.
              </p>

              {/* Checklist de valor */}
              <ul className="mt-6 grid gap-2 text-slate-700 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                  Propuesta técnica + cronograma
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck2 className="mt-0.5 h-5 w-5 text-amber-600" />
                  Bitácora, estimaciones y cierre técnico
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="mt-0.5 h-5 w-5 text-amber-600" />
                  Seguimiento y reportes de avance
                </li>
                <li className="flex items-start gap-2">
                  <Timer className="mt-0.5 h-5 w-5 text-amber-600" />
                  Entregas programadas por etapa
                </li>
              </ul>

              {/* Botones */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-md shadow-amber-200 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  Solicitar cotización
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`https://wa.me/529932414563?text=${encodeURIComponent(
                    "Hola CPC, me gustaría cotizar un proyecto. ¿Me pueden apoyar?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+529932414563"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-slate-700 underline-offset-4 transition hover:underline"
                >
                  <PhoneCall className="h-5 w-5" />
                  Llamar
                </a>
              </div>
            </div>

            {/* Columna 2: Tarjeta de confianza compacta */}
            <div className="relative">
              <div className="relative rounded-2xl border border-amber-100 bg-white p-6 shadow-md">
                <dl className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <dt className="text-sm text-slate-500">
                      Proyectos entregados
                    </dt>
                    <dd className="text-3xl font-bold text-slate-900">120+</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Entrega a tiempo</dt>
                    <dd className="text-3xl font-bold text-slate-900">100%</dd>
                  </div>
                </dl>
                <div className="mt-5 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
                  <p className="flex items-start gap-2 text-sm text-slate-800">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-amber-600" />
                    <span>
                      Garantía de instalación según contrato y documentación
                      completa de cierre.
                    </span>
                  </p>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl"
                />
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">
                Cotizaciones claras, sin letra chiquita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
