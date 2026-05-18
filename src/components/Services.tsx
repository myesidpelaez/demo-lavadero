"use client";

import { Droplets, Zap, Shield, Wind, Sparkles, Clock } from "lucide-react";

const SERVICES = [
  {
    icon: Droplets,
    color: "from-sky-400 to-blue-500",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    border: "border-sky-100 dark:border-sky-800",
    title: "Lavado Básico",
    desc: "Exterior completo con espuma activa, enjuague a presión y secado con paño de microfibra.",
    time: "20 min",
    features: ["Lavado exterior", "Enjuague a presión", "Secado manual"],
  },
  {
    icon: Zap,
    color: "from-violet-400 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-100 dark:border-violet-800",
    title: "Lavado Premium",
    desc: "Interior y exterior con aspirado, limpieza de tablero, cristales impecables y cera protectora.",
    time: "45 min",
    features: [
      "Todo lo del Básico",
      "Interior aspirado",
      "Limpieza de cristales",
      "Cera protectora",
    ],
  },
  {
    icon: Shield,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-100 dark:border-amber-800",
    title: "Detailing VIP",
    desc: "Tratamiento profesional completo con pulido, protección cerámica y restauración de plásticos.",
    time: "2-3 h",
    features: [
      "Todo lo del Premium",
      "Pulido de carrocería",
      "Protección cerámica",
      "Restauración plásticos",
    ],
  },
  {
    icon: Wind,
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-100 dark:border-green-800",
    title: "Desodorización",
    desc: "Eliminación de olores con ozono, ideal para vehículos con mascotas o fumadores.",
    time: "30 min",
    features: ["Tratamiento con ozono", "Elimina bacterias", "Efecto duradero"],
  },
  {
    icon: Sparkles,
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-100 dark:border-pink-800",
    title: "Limpieza de Tapicería",
    desc: "Extracción profunda en asientos de tela o cuero, devuelve vida a tu interior.",
    time: "1 h",
    features: [
      "Extracción por vapor",
      "Apto tela y cuero",
      "Neutralizador de manchas",
    ],
  },
  {
    icon: Clock,
    color: "from-slate-400 to-slate-600",
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-slate-100 dark:border-slate-800",
    title: "Plan Express",
    desc: "Lavado rápido de exterior en 10 minutos. Perfecto para cuando tienes prisa.",
    time: "10 min",
    features: ["Lavado express", "Secado al aire", "Sin espera"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 border border-blue-100 dark:border-blue-800 uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            El cuidado que{" "}
            <span className="gradient-text">tu vehículo merece</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Desde un lavado rápido hasta un detailing completo — elige el nivel
            de atención que necesitas hoy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`rounded-2xl p-6 border card-hover ${svc.bg} ${svc.border}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <svc.icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  {svc.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-lg flex-shrink-0 ml-2">
                  ⏱ {svc.time}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {svc.desc}
              </p>

              <ul className="space-y-1.5">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
