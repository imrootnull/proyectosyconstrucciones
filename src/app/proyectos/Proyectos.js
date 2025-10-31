// app/proyectos/Proyectos.js
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import {
  ShieldCheck,
  Building2,
  Factory,
  Store,
  Home,
  Landmark,
  ArrowRight,
  X,
} from "lucide-react";

/* Animaciones */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } },
});

/* Datos de ejemplo (ajusta paths/fechas/alcance) */
const ALL_PROJECTS = [
  {
    id: "p1",
    title: "Nave Industrial · Línea de Producción",
    sector: "Industrial",
    cover: "/images/nave-industrial.jpg",
    location: "Parque Industrial, Tabasco",
    scope: "Obra civil + supervisión + piso industrial",
    year: "2024",
  },
  {
    id: "p2",
    title: "Complejo Corporativo",
    sector: "Comercial",
    cover: "/images/vista-del-edificio-disenado-con-vidrio.jpg",
    location: "Villahermosa, Tabasco",
    scope: "Proyecto ejecutivo + dirección de obra",
    year: "2023",
  },
  {
    id: "p3",
    title: "Remodelación de Tienda Ancla",
    sector: "Comercial",
    cover: "/images/tienda-de-joyas-borrosa.jpg",
    location: "Centro Comercial, Tabasco",
    scope: "Remodelación integral · mínima interrupción",
    year: "2023",
  },
  {
    id: "p4",
    title: "Edificio Institucional",
    sector: "Institucional",
    cover: "/images/paisaje-analogico-de-ciudad-con-edificios.jpg",
    location: "Centro, Tabasco",
    scope: "Obra civil + instalaciones + acabados",
    year: "2022",
  },
  {
    id: "p5",
    title: "Residencia de Alto Nivel",
    sector: "Residencial",
    cover: "/images/edificio-beige-y-verde-durante-el-dia.jpg",
    location: "Villahermosa, Tabasco",
    scope: "Dirección de obra + acabados premium",
    year: "2022",
  },
  {
    id: "p6",
    title: "Centro Logístico",
    sector: "Industrial",
    cover: "/images/vista-de-almacen-completo-con-carretilla-elevadora.jpg",
    location: "Cunduacán, Tabasco",
    scope: "Adecuaciones MEP + oficinas + andenes",
    year: "2021",
  },
];

/* Filtros disponibles */
const FILTERS = [
  { label: "Todos", value: "Todos", icon: Building2 },
  { label: "Industrial", value: "Industrial", icon: Factory },
  { label: "Comercial", value: "Comercial", icon: Store },
  { label: "Institucional", value: "Institucional", icon: Landmark },
  { label: "Residencial", value: "Residencial", icon: Home },
];

export default function Proyectos() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState(null); // {src, title}

  const projects = useMemo(() => {
    if (active === "Todos") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.sector === active);
  }, [active]);

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
              Portafolio de obras ejecutadas
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Proyectos con <span className="text-amber-400">ingeniería</span>,{" "}
              <span className="text-amber-400">seguridad</span> y{" "}
              <span className="text-amber-400">precisión</span>.
            </motion.h1>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 max-w-xl text-white/80 md:text-lg"
            >
              Una muestra de nuestros trabajos en sectores industrial,
              comercial, institucional y residencial.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/escena-en-blanco-y-negro-que-muestra-la-vida-de-los-trabajadores-de-la-construccion-en-el-sitio.jpg"
                alt="Portafolio de proyectos"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTROS */}
      <Section
        id="filtros"
        title="Explora nuestros proyectos"
        subtitle="Filtra por sector para ver casos representativos."
      >
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const activeBtn = active === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                  activeBtn
                    ? "border-amber-400 bg-amber-100 text-slate-900"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Icon className="h-4 w-4 text-amber-600" />
                {f.label}
              </button>
            );
          })}
        </div>
      </Section>

      {/* GRID DE PROYECTOS */}
      <Section id="grid" title="Casos destacados">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              {...fadeUp(0.04 * i)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className="relative aspect-[16/10] cursor-zoom-in"
                onClick={() => setLightbox({ src: p.cover, title: p.title })}
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
              </div>

              {/* Contenido flexible */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {p.title}
                    </h3>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-800">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{p.scope}</p>
                  <p className="mt-1 text-xs text-slate-500">{p.location}</p>
                </div>

                {/* Footer fijo */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-600">
                    {p.sector}
                  </span>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-amber-600"
                  >
                    Cotizar similar <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* LIGHTBOX sencillo */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/9]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center text-white/90">
                {lightbox.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA FINAL */}
      <section id="cta-cpc" className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white"
        />
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid items-center gap-8 rounded-3xl border border-amber-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-md md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                <ShieldCheck className="h-4 w-4 text-amber-600" />
                Presupuesto claro · Cumplimiento garantizado
              </span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                ¿Quieres una obra similar?
              </h3>
              <p className="mt-2 text-slate-700">
                Te asesoramos sin costo. Entregamos propuesta técnica y
                cronograma por etapas.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:bg-amber-400"
                >
                  Solicitar cotización
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`https://wa.me/529932414563?text=${encodeURIComponent(
                    "Hola CPC, me interesa un proyecto similar a los del portafolio."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-md">
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
                <p className="text-sm text-slate-800">
                  Propuesta clara, estimaciones y cierre técnico documentado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
