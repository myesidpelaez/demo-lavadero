"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Sparkles } from "lucide-react";

const STATS = [
  { value: "4.9", label: "Rating promedio", icon: "⭐" },
  { value: "2,400+", label: "Autos lavados", icon: "🚗" },
  { value: "98%", label: "Clientes satisfechos", icon: "✅" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b6bfb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 border border-blue-100 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5" />
              Demo — Sistema de Gestión para Lavadero
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6 text-balance">
              Tu auto,{" "}
              <span className="gradient-text">impecable</span>
              {" "}en minutos
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Reserva tu turno online, elige tu paquete y recibe tu vehículo
              reluciente. Sin colas, sin sorpresas — solo resultados perfectos.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Reserva en 2 minutos",
                "Seguimiento en tiempo real",
                "Garantía de satisfacción",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 text-base"
              >
                Reservar Turno
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 text-base shadow-sm"
              >
                Ver Servicios
              </Link>
            </div>
          </div>

          {/* Right — visual card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 shadow-2xl shadow-blue-500/10">
                {/* Car wash illustration with SVG */}
                <div className="relative h-48 flex items-center justify-center mb-6">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-xl shadow-blue-500/30 animate-float">
                    <svg
                      viewBox="0 0 80 60"
                      className="w-20 h-20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Car body */}
                      <rect x="8" y="32" width="64" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      {/* Car top */}
                      <path d="M20 32 L26 18 H54 L60 32 Z" fill="white" fillOpacity="0.9" />
                      {/* Windows */}
                      <rect x="28" y="21" width="10" height="9" rx="1" fill="#60A5FA" fillOpacity="0.6" />
                      <rect x="42" y="21" width="10" height="9" rx="1" fill="#60A5FA" fillOpacity="0.6" />
                      {/* Wheels */}
                      <circle cx="22" cy="50" r="7" fill="#1E3A8A" />
                      <circle cx="22" cy="50" r="4" fill="#DBEAFE" />
                      <circle cx="58" cy="50" r="7" fill="#1E3A8A" />
                      <circle cx="58" cy="50" r="4" fill="#DBEAFE" />
                      {/* Water drops */}
                      <circle cx="10" cy="10" r="3" fill="#7DD3FC" fillOpacity="0.8" />
                      <circle cx="40" cy="5" r="2" fill="#93C5FD" fillOpacity="0.7" />
                      <circle cx="68" cy="12" r="3.5" fill="#BAE6FD" fillOpacity="0.8" />
                    </svg>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                    ✓ Disponible
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl"
                    >
                      <div className="text-xl mb-0.5">{stat.icon}</div>
                      <div className="text-xl font-black text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 max-w-[200px]">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Juan García
                  </div>
                  <div className="text-xs text-slate-500">
                    &ldquo;Increíble servicio ⭐⭐⭐⭐⭐&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
