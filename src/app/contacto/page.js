// app/contacto/Contacto.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } },
});

const WHATSAPP = "+529932414563";
const EMAIL = "contacto@proyectosyconstrucciones.mx";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    tipo: "",
    presupuesto: "",
    mensaje: "",
    aceptar: false,
  });
  const [status, setStatus] = useState({ ok: false, msg: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validar = () => {
    if (!form.nombre.trim()) return "Ingresa tu nombre.";
    if (!form.correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Ingresa un correo válido.";
    if (!form.telefono.trim()) return "Ingresa tu teléfono.";
    if (!form.mensaje.trim()) return "Cuéntanos brevemente tu proyecto.";
    if (!form.aceptar) return "Debes aceptar el aviso de privacidad.";
    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validar();
    if (error) {
      setStatus({ ok: false, msg: error });
      return;
    }

    // Construimos mensaje para WhatsApp como acción rápida
    const texto = [
      `Hola CPC, quiero cotizar un proyecto:`,
      `• Nombre: ${form.nombre}`,
      form.empresa ? `• Empresa: ${form.empresa}` : null,
      `• Tel: ${form.telefono}`,
      `• Correo: ${form.correo}`,
      form.tipo ? `• Tipo: ${form.tipo}` : null,
      form.presupuesto ? `• Presupuesto: ${form.presupuesto}` : null,
      `• Mensaje: ${form.mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
      texto
    )}`;

    // Abrimos WhatsApp y mostramos confirmación local
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus({ ok: true, msg: "¡Gracias! Abrimos WhatsApp para continuar la atención." });
  };

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
              Presupuesto claro · Cumplimiento garantizado
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Hablemos de tu proyecto
            </motion.h1>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-4 max-w-xl text-white/80 md:text-lg"
            >
              Respuesta el mismo día. Te acompañamos desde el anteproyecto
              hasta la entrega, con control de calidad y tiempos.
            </motion.p>

            {/* Datos rápidos */}
            <motion.ul {...fadeUp(0.3)} className="mt-6 grid gap-3 text-white/80">
              <li className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-amber-400" />
                <a href={`tel:${WHATSAPP}`} className="hover:underline">
                  +52 993 241 4563
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <a href={`mailto:${EMAIL}`} className="hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                Villahermosa, Tabasco · Cobertura nacional
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-400" />
                L–V 9:00–18:00
              </li>
            </motion.ul>
          </div>

          {/* Card lateral de confianza */}
          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <Building2 className="h-10 w-10 text-amber-400" />
                <div>
                  <p className="text-lg font-semibold">CPC · Proyectos y Construcciones</p>
                  <p className="text-white/80">Más de 10 años de experiencia · 120+ proyectos</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-slate-900/50 p-4 ring-1 ring-white/10">
                <p className="text-sm text-white/80">
                  “Cotizaciones claras, seguimiento puntual y documentación completa de obra.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMULARIO */}
      <Section
        id="contacto-form"
        title="Solicita tu cotización"
        subtitle="Cuéntanos tu necesidad; te responderemos el mismo día hábil."
      >
        <div className="grid gap-8 md:grid-cols-3">
          <form
            onSubmit={onSubmit}
            className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Nombre y apellidos"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Opcional"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Correo *</label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="+52 993 ..."
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Tipo de proyecto</label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Selecciona…</option>
                  <option>Obra civil</option>
                  <option>Proyecto ejecutivo</option>
                  <option>Dirección / Supervisión</option>
                  <option>Remodelación</option>
                  <option>Atención empresarial</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Presupuesto aproximado</label>
                <select
                  name="presupuesto"
                  value={form.presupuesto}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Selecciona…</option>
                  <option>Hasta $200,000 MXN</option>
                  <option>$200,000 – $1,000,000 MXN</option>
                  <option>$1,000,000 – $5,000,000 MXN</option>
                  <option>$5,000,000+ MXN</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Mensaje *</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Describe brevemente alcances, ubicación y tiempos."
                  required
                />
              </div>
              <label className="sm:col-span-2 inline-flex items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="aceptar"
                  checked={form.aceptar}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  required
                />
                Acepto el{" "}
                <Link href="/aviso-de-privacidad" className="font-medium underline">
                  aviso de privacidad
                </Link>
                .
              </label>
            </div>

            {status.msg && (
              <p className={`mt-4 text-sm ${status.ok ? "text-emerald-600" : "text-rose-600"}`}>
                {status.msg}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-md shadow-amber-200 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                Enviar por WhatsApp
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Solicitud de cotización"
                )}&body=${encodeURIComponent(
                  `${form.nombre}\n${form.empresa}\n${form.telefono}\n${form.tipo}\n${form.presupuesto}\n\n${form.mensaje}`
                )}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Enviar por correo
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </form>

          {/* Tarjeta lateral: contacto directo */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contacto directo</h3>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-amber-600" />
                <a href={`tel:${WHATSAPP}`} className="hover:underline">
                  +52 993 241 4563
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-600" />
                <a href={`mailto:${EMAIL}`} className="hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                Villahermosa, Tabasco · México
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                L–V 9:00–18:00
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
              <p className="text-sm text-slate-800">
                <ShieldCheck className="mr-2 inline h-4 w-4 text-amber-600" />
                Respuesta el mismo día · Presupuesto claro · Seguimiento puntual
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* MAPA */}
      <Section id="mapa" title="Ubicación y cobertura" subtitle="Atendemos proyectos en todo México.">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="Mapa Villahermosa"
            src="https://www.google.com/maps?q=Villahermosa%2C%20Tabasco&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </Section>

      {/* CTA MINI */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-amber-200 bg-white p-6 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              ¿Listo para cotizar? Recibe tu propuesta hoy mismo.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver servicios
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
                  "Hola CPC, quiero cotizar un proyecto."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow-sm hover:bg-amber-400"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
