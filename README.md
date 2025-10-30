# 🏗️ Corporativo de Proyectos y Construcciones

**Sitio web oficial de [proyectosyconstrucciones.mx](https://proyectosyconstrucciones.mx)**  
Desarrollado con **Next.js + TailwindCSS + SEO técnico avanzado**, diseñado para presentar los servicios de construcción, dirección de obra y proyectos ejecutivos de la empresa.

---

## 🚀 Tecnologías principales

- ⚡ **Next.js 14 (App Router)**
- 🎨 **Tailwind CSS 3**
- 🧭 **Framer Motion** (animaciones fluidas)
- 🧩 **Lucide React** (íconos profesionales)
- 🔍 **next-seo** + **next-sitemap** (optimización SEO)
- ⚙️ **Vercel** (hosting y CI/CD)

---

## 🧱 Estructura del proyecto

proyectosyconstrucciones/
├─ app/
│ ├─ (marketing)/
│ │ ├─ components/
│ │ │ ├─ Section.js
│ │ │ └─ CtaButton.js
│ │ └─ HomeHero.js
│ ├─ layout.js
│ ├─ page.js
│ ├─ robots.txt/route.js
│ └─ sitemap.js
├─ public/
│ ├─ og-cover.jpg
│ └─ favicon.ico
├─ tailwind.config.js
├─ next.config.mjs
└─ package.json

yaml
Copiar código

---

## 🛠️ Instalación local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/imrootnull/proyectosyconstrucciones.git
   cd proyectosyconstrucciones
Instalar dependencias:

bash
Copiar código
npm install
# o
pnpm install
Iniciar el servidor de desarrollo:

bash
Copiar código
npm run dev
Luego abre http://localhost:3000

📦 Scripts útiles
Comando	Descripción
npm run dev	Ejecuta el entorno de desarrollo
npm run build	Genera la versión optimizada para producción
npm run start	Inicia el servidor de producción
npm run lint	Analiza errores de código
npm run sitemap	Genera sitemap y robots.txt

🌐 SEO & Marketing
Metadata avanzada: configurada en app/layout.js con metadataBase, OpenGraph y Twitter Cards.

JSON-LD LocalBusiness: define nombre, teléfono y dirección para SEO local.

Sitemap y robots.txt: generados dinámicamente para indexación automática.

CTA de WhatsApp: acceso directo a contacto inmediato desde hero y formulario.

📸 Próximas secciones
🧱 Proyectos destacados / portafolio

👷‍♂️ Nosotros (misión, visión, equipo)

📩 Contacto (formulario funcional con API Route)

📊 Blog (estrategia de posicionamiento orgánico)

📍 Información de la empresa
Corporativo de Proyectos y Construcciones
Villahermosa, Tabasco, México
📞 Tel. +52 993 000 0000
🌎 proyectosyconstrucciones.mx