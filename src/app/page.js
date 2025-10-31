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
  Shield,
  FileCheck2,
  Leaf,
  Warehouse,
  Store,
  Landmark,
  Home,
  Factory,
  Truck,
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

export default function HomePage() {
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
                "cemex-logo-color.png",
                "autocad-seeklogo.png",
                "hilti-logo.svg",
                "holcim.svg",
                "Milwaukee-logo-1.png",
                "Logo-es.avif",
                "Sketchup_Pagina_web-11.png",
                "dewalt-seeklogo.png",
              ].map((logo, i) => (
                <div key={i} className="relative h-8 w-28 shrink-0">
                  <Image
                    src={`/logos/${logo}`}
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
          DIFERENCIALES — por qué elegirnos
      ========================== */}
      <Section
        id="diferenciales"
        title="Por qué elegirnos"
        subtitle="Experiencia comprobada, procesos robustos y cumplimiento en cada detalle."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Seguridad primero",
              desc: "Protocolos SST, EPP y análisis de riesgo en cada frente de obra.",
            },
            {
              icon: FileCheck2,
              title: "Documentación al día",
              desc: "Bitácoras, estimaciones, reportes fotográficos y cierres auditables.",
            },
            {
              icon: Leaf,
              title: "Enfoque sustentable",
              desc: "Buenas prácticas de manejo de residuos y eficiencia de materiales.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(0.05 * i)}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <f.icon className="h-8 w-8 text-amber-500" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-1 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

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
              img: "/images/naveindustrial.jpg",
              title: "Nave industrial",
              scope: "Obra civil + supervisión",
            },
            {
              img: "/images/complejocorporativo.jpg",
              title: "Complejo corporativo",
              scope: "Proyecto ejecutivo + dirección",
            },
            {
              img: "/images/remodelacion.jpg",
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
          COBERTURA Y SECTORES
      ========================== */}
      <Section
        id="cobertura"
        title="Cobertura y sectores"
        subtitle="Atendemos proyectos en todo México con enfoque en seguridad, tiempos y calidad."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Factory, label: "Industrial" },
            { icon: Warehouse, label: "Logístico" },
            { icon: Store, label: "Comercial" },
            { icon: Home, label: "Residencial" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.05 * i)}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <s.icon className="h-6 w-6 text-amber-600" />
              <span className="font-semibold text-slate-900">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-amber-600" />
            Cobertura nacional — planificación logística y equipos certificados.
          </p>
        </div>
      </Section>

      {/* =========================
          CERTIFICACIONES & CUMPLIMIENTO
      ========================== */}
      <Section
        id="cumplimiento"
        title="Certificaciones & Cumplimiento"
        subtitle="Normativas y estándares que forman parte de nuestro proceso."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "NOM / NMX",
              desc: "Cumplimiento normativo y de seguridad aplicable.",
            },
            {
              icon: FileCheck2,
              title: "Bitácora digital",
              desc: "Evidencia de avances y calidad por etapa.",
            },
            {
              icon: BadgeCheck,
              title: "Pruebas de materiales",
              desc: "Registros de laboratorio y conformidad.",
            },
            {
              icon: Leaf,
              title: "Buenas prácticas",
              desc: "Manejo de residuos y eficiencia de recursos.",
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

      {/* =========================
          PREGUNTAS FRECUENTES (sin testimonios)
      ========================== */}
      <Section
        id="faq"
        title="Preguntas frecuentes"
        subtitle="Resuelve dudas rápidas sobre tiempos, costos y alcance."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "¿Cómo cotizan un proyecto?",
              a: "Partimos de un levantamiento y alcance. Entregamos propuesta técnica, presupuesto y cronograma. Ajustamos con el cliente hasta cerrar el plan de obra.",
            },
            {
              q: "¿Qué garantías ofrecen?",
              a: "Garantía en instalación según contrato, cierres técnicos, entrega de manuales y documentación completa de obra.",
            },
            {
              q: "¿En qué plazos trabajan?",
              a: "Definimos un programa por etapas con hitos verificables y entregas parciales. Reportes semanales y control de cambios.",
            },
            {
              q: "¿Dan servicio fuera de Tabasco?",
              a: "Sí, coordinamos logística y personal certificado para proyectos en todo México.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* =========================
    CTA FINAL — CPC
    ========================= */}
      <section id="cta-cpc" className="relative isolate overflow-hidden">
        {/* Fondo elegante */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white"
        />
        {/* Brillos suaves */}
        <div
          aria-hidden
          className="absolute -top-20 -left-20 h-60 w-60 -z-10 rounded-full bg-amber-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-72 w-72 -z-10 rounded-full bg-amber-300/30 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-amber-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-md md:grid-cols-2">
            {/* Lado izquierdo: texto + acciones */}
            <div>
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

              {/* Bullets rápidos de valor */}
              <ul className="mt-6 grid gap-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                  Propuesta técnica + cronograma
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                  Supervisión y control de calidad
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
                  href={`https://wa.me/529933895245?text=${encodeURIComponent(
                    "Hola CPC, me gustaría cotizar un proyecto. ¿Me pueden apoyar?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                  WhatsApp
                </a>

                <a
                  href="tel:+529933895245"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-slate-700 underline-offset-4 transition hover:underline"
                >
                  <PhoneCall className="h-5 w-5" />
                  Llamar
                </a>
              </div>
            </div>

            {/* Lado derecho: tarjeta de confianza */}
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

                {/* Detalle decorativo */}
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
