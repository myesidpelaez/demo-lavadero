import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Layers,
  Zap,
  Palette,
  Code2,
  Globe,
  Shield,
  GitBranch,
  Package,
  Cpu,
  Smartphone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STACK = [
  {
    icon: Code2,
    name: "Next.js 15",
    role: "Framework principal",
    desc: "App Router, React Server Components, output export estático para máxima compatibilidad de deploy.",
    color: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200",
    badge: "Core",
  },
  {
    icon: Shield,
    name: "TypeScript",
    role: "Tipado estático",
    desc: "Configuración strict. Interfaces claras para los datos del formulario, props de componentes y utilidades.",
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    badge: "DX",
  },
  {
    icon: Palette,
    name: "Tailwind CSS v3",
    role: "Sistema de diseño",
    desc: "Utility-first con paleta brand personalizada, modo oscuro (class strategy), animaciones custom y variantes glass/gradient.",
    color: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
    badge: "UI",
  },
  {
    icon: Zap,
    name: "Framer Motion",
    role: "Animaciones",
    desc: "Transiciones de entrada (fade-up), hover effects en cards y animación float del hero SVG.",
    color: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    badge: "UX",
  },
  {
    icon: Package,
    name: "Lucide React",
    role: "Iconografía",
    desc: "Sistema de iconos consistente, tree-shakeable, con tamaños uniformes (w-4/w-5/w-6).",
    color: "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
    badge: "UI",
  },
  {
    icon: Globe,
    name: "Vercel",
    role: "Hosting & CI/CD",
    desc: "Deploy automático desde GitHub. Edge Network global, HTTPS por defecto, preview URLs por PR.",
    color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    badge: "Infra",
  },
];

const ARCHITECTURE = [
  {
    title: "Routing — App Router",
    desc: "Estructura basada en carpetas bajo src/app/. Cada página es un Server Component por defecto; los componentes interactivos llevan \"use client\" explícito. Las páginas /reservar y /docs son rutas independientes.",
    icon: Layers,
  },
  {
    title: "Componentización",
    desc: "Separación clara: Header, Hero, Services, HowItWorks, Pricing, Testimonials, CTA y Footer. Cada uno importa únicamente lo que necesita. El estado de tema (dark/light) vive en Header y propaga via clase en <html>.",
    icon: GitBranch,
  },
  {
    title: "Multi-step Form",
    desc: "La reserva implementa un wizard de 4 pasos con estado local (useState). Validación inline antes de avanzar — el botón Continuar permanece deshabilitado hasta que los campos requeridos estén llenos.",
    icon: Cpu,
  },
  {
    title: "Static Export",
    desc: "next.config.ts usa output: 'export' para generar HTML estático compatible con cualquier CDN o hosting. Imágenes configuradas como unoptimized para evitar dependencias de servidor.",
    icon: Globe,
  },
  {
    title: "Dark Mode",
    desc: "Estrategia class en Tailwind. Toggle en Header que manipula classList de <html>. Sin flash en la carga inicial (no requiere server) gracias a la inicialización en el cliente.",
    icon: Palette,
  },
  {
    title: "Responsive Design",
    desc: "Mobile-first con breakpoints sm, md, lg de Tailwind. Grid adaptable: 1 col (mobile) → 2 cols (sm) → 3 cols (lg). Header colapsa a menú hamburguesa con overlay glass.",
    icon: Smartphone,
  },
];

const DECISIONS = [
  {
    decision: "Static Export vs. Server-Side",
    reason: "Un demo de portfolio no necesita server-side rendering. El export estático permite deploy en GitHub Pages, Netlify o Vercel sin costo, con máxima velocidad de carga.",
  },
  {
    decision: "No backend / base de datos",
    reason: "Es una demo de UI/UX. El formulario de reservas simula el flujo completo en el cliente — el valor está en mostrar la arquitectura de la UI, no en el backend.",
  },
  {
    decision: "SVG en lugar de imágenes externas",
    reason: "Sin dependencias de CDN de imágenes. El hero usa un SVG inline que carga instantáneamente y escala perfectamente en todos los tamaños.",
  },
  {
    decision: "Tailwind v3 vs. v4",
    reason: "Mayor madurez del ecosistema y compatibilidad con postcss/autoprefixer estándar. La v4 aún está en adopción temprana y hubiera complicado la config.",
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          {/* Header section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4 border border-blue-100 dark:border-blue-800">
              <Code2 className="w-3.5 h-3.5" />
              Documentación Técnica
            </div>

            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
              Cómo está{" "}
              <span className="gradient-text">construido</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-6">
              AquaWash es un demo de portfolio diseñado para mostrar capacidades
              de desarrollo frontend moderno. Este documento describe las
              decisiones técnicas, la arquitectura y el stack utilizado.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/myesidpelaez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                Ver Repositorio
              </a>
              <Link
                href="/reservar"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                <Zap className="w-4 h-4" />
                Probar el Demo
              </Link>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { value: "Next.js 15", label: "Framework" },
              { value: "TypeScript", label: "Lenguaje" },
              { value: "3 páginas", label: "Rutas" },
              { value: "8 componentes", label: "UI Components" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-4 text-center"
              >
                <div className="text-lg font-black text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Stack Tecnológico
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Cada herramienta fue elegida por una razón específica.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {STACK.map((item) => (
                <div
                  key={item.name}
                  className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-0.5">
                    {item.name}
                  </div>
                  <div className="text-xs text-blue-500 dark:text-blue-400 font-medium mb-2">
                    {item.role}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Arquitectura
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Patrones y decisiones de estructura del código.
            </p>
            <div className="space-y-4">
              {ARCHITECTURE.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Structure */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Estructura de Archivos
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Organización del proyecto bajo src/.
            </p>
            <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-300 leading-7">
                <span className="text-blue-400">demo-lavadero/</span>{"\n"}
                {"├── "}
                <span className="text-blue-400">src/</span>{"\n"}
                {"│   ├── "}
                <span className="text-cyan-400">app/</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-green-400">layout.tsx</span>
                {"         "}<span className="text-slate-500"># Root layout, metadata, fuentes</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-green-400">page.tsx</span>
                {"           "}<span className="text-slate-500"># Landing page (ensamble de secciones)</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-green-400">globals.css</span>
                {"        "}<span className="text-slate-500"># Tailwind base + utilities custom</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-cyan-400">reservar/</span>{"\n"}
                {"│   │   │   └── "}
                <span className="text-green-400">page.tsx</span>
                {"       "}<span className="text-slate-500"># Wizard de reserva (4 pasos)</span>{"\n"}
                {"│   │   └── "}
                <span className="text-cyan-400">docs/</span>{"\n"}
                {"│   │       └── "}
                <span className="text-green-400">page.tsx</span>
                {"       "}<span className="text-slate-500"># Esta página de documentación</span>{"\n"}
                {"│   ├── "}
                <span className="text-cyan-400">components/</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">Header.tsx</span>
                {"         "}<span className="text-slate-500"># Nav sticky + dark mode toggle</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">Hero.tsx</span>
                {"           "}<span className="text-slate-500"># Sección hero con SVG animado</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">Services.tsx</span>
                {"       "}<span className="text-slate-500"># Grid de 6 servicios</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">HowItWorks.tsx</span>
                {"     "}<span className="text-slate-500"># 3 pasos con línea conectora</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">Pricing.tsx</span>
                {"        "}<span className="text-slate-500"># 3 planes de precios</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">Testimonials.tsx</span>
                {"   "}<span className="text-slate-500"># 6 reseñas de clientes</span>{"\n"}
                {"│   │   ├── "}
                <span className="text-yellow-400">CTA.tsx</span>
                {"            "}<span className="text-slate-500"># Call-to-action final</span>{"\n"}
                {"│   │   └── "}
                <span className="text-yellow-400">Footer.tsx</span>
                {"         "}<span className="text-slate-500"># Footer con links y stack</span>{"\n"}
                {"│   └── "}
                <span className="text-cyan-400">lib/</span>{"\n"}
                {"│       └── "}
                <span className="text-green-400">utils.ts</span>
                {"           "}<span className="text-slate-500"># cn() helper (clsx + twMerge)</span>{"\n"}
                {"├── "}
                <span className="text-green-400">next.config.ts</span>
                {"         "}<span className="text-slate-500"># static export config</span>{"\n"}
                {"├── "}
                <span className="text-green-400">tailwind.config.ts</span>
                {"     "}<span className="text-slate-500"># custom colors, animations</span>{"\n"}
                {"└── "}
                <span className="text-green-400">tsconfig.json</span>
                {"          "}<span className="text-slate-500"># strict mode, path aliases</span>
              </pre>
            </div>
          </section>

          {/* Design decisions */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Decisiones de Diseño
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Por qué se eligió cada enfoque.
            </p>
            <div className="space-y-4">
              {DECISIONS.map((d, i) => (
                <div
                  key={d.decision}
                  className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-black rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {d.decision}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-9">
                    {d.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dev setup */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
              Correr en local
            </h2>
            <div className="space-y-4">
              {[
                { step: "1. Clonar el repositorio", cmd: "git clone https://github.com/myesidpelaez/demo-lavadero\ncd demo-lavadero" },
                { step: "2. Instalar dependencias", cmd: "npm install" },
                { step: "3. Servidor de desarrollo", cmd: "npm run dev\n# Abre http://localhost:3000" },
                { step: "4. Build de producción", cmd: "npm run build\n# Genera carpeta /out con HTML estático" },
              ].map(({ step, cmd }) => (
                <div key={step} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {step}
                    </span>
                  </div>
                  <div className="bg-slate-950 px-5 py-4">
                    <pre className="text-sm font-mono text-green-400">
                      <code>{cmd}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-black mb-3">Sobre este proyecto</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-6 text-sm leading-relaxed">
              AquaWash es una demo de portfolio creada para mostrar habilidades en
              desarrollo frontend moderno. Diseñada y construida por{" "}
              <strong className="text-white">Mario Esid Peláez</strong> — desarrollador
              full-stack con sede en Riohacha, Colombia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://github.com/myesidpelaez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
              <a
                href="mailto:myesidpelaez@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
              >
                myesidpelaez@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
