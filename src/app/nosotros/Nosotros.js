// app/nosotros/Nosotros.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import {
  ShieldCheck,
  BadgeCheck,
  HardHat,
  LineChart,
  Users,
  Target,
  HeartHandshake,
  Hammer,
  CheckCircle2,
} from "lucide-react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d } },
});

export default function Nosotros() {
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
              Ingeniería · Seguridad · Precisión
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Corporativo de Proyectos y Construcciones
            </motion.h1>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 max-w-xl text-white/80 md:text-lg"
            >
              Diseñamos y ejecutamos obras con procesos claros, documentación
              completa y cumplimiento de tiempos.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/silueta-de-construccion.jpg"
                alt="Equipo CPC en obra"
                fill
                priority
                className="object-cover"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-slate-900/70 p-3 backdrop-blur ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <BadgeCheck className="h-4 w-4 text-amber-400" />
                  Más de 10 años · 120+ proyectos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <Section
        id="mision-vision"
        title="Quiénes somos"
        subtitle="Nuestra razón de ser y hacia dónde vamos."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Target className="h-8 w-8 text-amber-600" />
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              Misión
            </h3>
            <p className="mt-2 text-slate-600">
              Ejecutar proyectos de construcción con altos estándares de
              calidad, seguridad y eficiencia, asegurando transparencia en
              costos, cumplimiento en tiempos y satisfacción del cliente.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.05)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <LineChart className="h-8 w-8 text-amber-600" />
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              Visión
            </h3>
            <p className="mt-2 text-slate-600">
              Ser un referente regional en construcción integral y dirección de
              obra, reconocido por procesos robustos, innovación y resultados
              consistentes.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* VALORES */}
      <Section
        id="valores"
        title="Nuestros valores"
        subtitle="Principios que guían cada decisión en obra y oficina."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: HardHat,
              t: "Seguridad",
              d: "Protocolos SST, EPP y análisis de riesgos por frente de obra.",
            },
            {
              icon: HeartHandshake,
              t: "Integridad",
              d: "Transparencia, trato justo y cumplimiento de acuerdos.",
            },
            {
              icon: Hammer,
              t: "Excelencia",
              d: "Control de calidad, pruebas de materiales y cierre técnico.",
            },
            {
              icon: Users,
              t: "Trabajo en equipo",
              d: "Coordinación con contratistas y comunicación clara.",
            },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <v.icon className="h-8 w-8 text-amber-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {v.t}
              </h3>
              <p className="mt-1 text-slate-600">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DIFERENCIALES / CÓMO TRABAJAMOS */}
      <Section
        id="diferenciales"
        title="Cómo trabajamos"
        subtitle="Procesos claros, evidencia y seguimiento puntual."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Planeación y alcance",
              d: "Levantamiento, propuesta técnica y cronograma por hitos.",
              i: Target,
            },
            {
              t: "Ejecución segura",
              d: "Verificaciones, SST y documentación continua.",
              i: HardHat,
            },
            {
              t: "Cierre técnico",
              d: "Bitácoras, estimaciones, pruebas y acta de entrega.",
              i: CheckCircle2,
            },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <b.i className="h-8 w-8 text-amber-600" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {b.t}
              </h3>
              <p className="mt-1 text-slate-600">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
