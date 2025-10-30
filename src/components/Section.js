"use client";

import { motion } from "framer-motion";

/**
 * Sección reutilizable con animaciones suaves
 * Props:
 * - id: ancla HTML (para navegación)
 * - title: título principal
 * - subtitle: texto secundario opcional
 * - children: contenido dentro de la sección
 */
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-slate-600 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
