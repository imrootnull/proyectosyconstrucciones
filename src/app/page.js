"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "../components/Section";
import {
  Building2,
  Ruler,
  HardHat,
  BadgeCheck,
  ClipboardList,
  PhoneCall,
  ShieldCheck,
  Timer,
  CheckCircle2,
  LineChart,
  ArrowRight,
} from "lucide-react";

/* =========================
   Helpers (animación)
========================= */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});
const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO — impacto inmediato
      ========================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Fondo animado con gradientes / malla */}
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

        {/* Blob suave */}
        <motion.div
          className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-amber-500/20 blur-3xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/90"
            >
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Calidad certificada — Obra civil, proyectos y dirección
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Construimos espacios con{" "}
              <span className="text-amber-400">ingeniería</span>,{" "}
              <span className="text-amber-400">seguridad</span> y{" "}
              <span className="text-amber-400">precisión</span>.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 max-w-xl text-white/80 md:text-lg"
            >
              En <strong>Corporativo de Proyectos y Construcciones</strong>{" "}
              ejecutamos obra civil, desarrollamos proyectos ejecutivos y
              dirigimos obras con control de calidad y cumplimiento puntual.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                <PhoneCall className="h-5 w-5" />
                Solicitar cotización
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Métricas de confianza */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 grid grid-cols-3 gap-4 text-center text-sm text-white/80 md:max-w-md"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-black text-white">10+</p>
                <p>Años de experiencia</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-black text-white">120+</p>
                <p>Proyectos entregados</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-black text-white">100%</p>
                <p>Entrega a tiempo</p>
              </div>
            </motion.div>
          </div>

          {/* Imagen hero */}
          <motion.div {...scaleIn(0.2)} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/obracivil.jpg"
                alt="Obra civil profesional"
                fill
                priority
                className="object-cover"
              />
              {/* Tarjeta superpuesta: garantías */}
              <div className="pointer-events-none absolute bottom-4 left-4 flex gap-3">
                <div className="rounded-xl bg-slate-900/70 p-3 backdrop-blur ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Timer className="h-4 w-4 text-amber-400" />
                    Entregas programadas
                  </div>
                </div>
                <div className="rounded-xl bg-slate-900/70 p-3 backdrop-blur ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-amber-400" />
                    Control de calidad
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tira de logos (auto-scroll simple) */}
        <div className="relative z-10 border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-10 opacity-80 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[
                "logo-1.svg",
                "logo-2.svg",
                "logo-3.svg",
                "logo-4.svg",
                "logo-5.svg",
                "logo-1.svg",
                "logo-2.svg",
              ].map((logo, i) => (
                <div key={i} className="relative h-8 w-28 shrink-0">
                  <Image
                    src={`/images/${logo}`}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICIOS — cards pro
      ========================== */}
      <Section
        id="servicios"
        title="Servicios que resuelven de principio a fin"
        subtitle="Soluciones integrales para anteproyecto, ejecución y cierre, con supervisión y seguridad."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Obra civil y construcción",
              desc: "Cimentaciones, estructura, albañilería y acabados. Planeación, costo y tiempo bajo control.",
            },
            {
              icon: Ruler,
              title: "Proyectos ejecutivos",
              desc: "Arquitectura, estructura e instalaciones con presupuestos, cronogramas y especificaciones.",
            },
            {
              icon: HardHat,
              title: "Dirección y supervisión",
              desc: "Coordinación de contratistas, verificaciones y cumplimiento normativo y de seguridad.",
            },
            {
              icon: ClipboardList,
              title: "Remodelaciones",
              desc: "Comerciales, residenciales e industriales, con mínima interrupción operativa.",
            },
            {
              icon: BadgeCheck,
              title: "Calidad y documentación",
              desc: "Pruebas de materiales, bitácoras, estimaciones y cierre técnico completo.",
            },
            {
              icon: LineChart,
              title: "Atención empresarial",
              desc: "Mantenimiento mayor, ampliaciones y soluciones llave en mano para empresas.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.05 * i)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <s.icon className="h-8 w-8 text-amber-500 transition group-hover:scale-110" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <Link
                href="/servicios"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-600"
              >
                Saber más <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =========================
          PROYECTOS — destacados
      ========================== */}
      <Section
        id="proyectos"
        title="Proyectos destacados"
        subtitle="Una muestra de nuestra ejecución en diferentes sectores."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: "/images/project-1.jpg",
              title: "Nave industrial",
              scope: "Obra civil + supervisión",
            },
            {
              img: "/images/project-2.jpg",
              title: "Complejo corporativo",
              scope: "Proyecto ejecutivo + dirección",
            },
            {
              img: "/images/project-3.jpg",
              title: "Remodelación comercial",
              scope: "Llave en mano",
            },
          ].map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp(0.05 * i)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{p.scope}</p>
                <Link
                  href="/proyectos"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-600"
                >
                  Ver portafolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* =========================
          PROCESO — línea clara
      ========================== */}
      <Section
        id="proceso"
        title="Proceso claro y controlado"
        subtitle="Transparencia y comunicación constante en cada etapa."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Anteproyecto",
              desc: "Levantamiento, alcance y propuesta técnica.",
            },
            {
              step: "2",
              title: "Proyecto ejecutivo",
              desc: "Planos, especificaciones y presupuesto.",
            },
            {
              step: "3",
              title: "Ejecución",
              desc: "Seguridad, coordinación y control de calidad.",
            },
            {
              step: "4",
              title: "Entrega",
              desc: "Cierre técnico, garantías y documentación.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                {s.step}
              </div>
              <h4 className="mt-3 text-lg font-semibold text-slate-900">
                {s.title}
              </h4>
              <p className="mt-1 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =========================
          TESTIMONIO — social proof
      ========================== */}
      <Section id="testimonio" title="Lo que dicen nuestros clientes">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
          <blockquote className="text-lg text-slate-700 md:text-xl">
            “Su planeación y control en obra nos dieron tranquilidad total.
            Entregaron en tiempo y con una calidad notable. Son un aliado
            estratégico.”
          </blockquote>
          <div className="mt-4 text-sm text-slate-500">
            — Dirección de Operaciones, Cliente Corporativo
          </div>
        </div>
      </Section>

      {/* =========================
          CTA FINAL — conversión
      ========================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-amber-200 bg-white p-8 shadow-sm md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                ¿Listo para cotizar tu proyecto?
              </h3>
              <p className="mt-2 text-slate-600">
                Respuesta el mismo día. Te acompañamos desde el anteproyecto
                hasta la entrega.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
                >
                  Solicitar cotización
                </Link>
                <a
                  href="https://wa.me/529930000000"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-56 w-full md:h-64">
              <Image
                src="/images/project-2.jpg"
                alt="Calidad de ejecución"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animación keyframes (logos) */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
