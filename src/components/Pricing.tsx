"use client";

import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Básico",
    price: "8.000",
    period: "por servicio",
    desc: "Ideal para mantenimiento semanal rápido.",
    features: [
      "Lavado exterior",
      "Enjuague a presión",
      "Secado manual",
      "Duración: 20 min",
    ],
    cta: "Reservar Básico",
    popular: false,
    gradient: "from-slate-600 to-slate-800",
  },
  {
    name: "Premium",
    price: "18.000",
    period: "por servicio",
    desc: "El favorito. Interior y exterior como nuevo.",
    features: [
      "Todo lo del Básico",
      "Interior aspirado",
      "Limpieza de cristales",
      "Cera protectora",
      "Duración: 45 min",
      "Aromatizante incluido",
    ],
    cta: "Reservar Premium",
    popular: true,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "VIP Detailing",
    price: "45.000",
    period: "por servicio",
    desc: "Tratamiento profesional de máximo nivel.",
    features: [
      "Todo lo del Premium",
      "Pulido de carrocería",
      "Protección cerámica",
      "Restauración plásticos",
      "Duración: 2-3 h",
      "Garantía 30 días",
    ],
    cta: "Reservar VIP",
    popular: false,
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 border border-blue-100 dark:border-blue-800 uppercase tracking-wider">
            Precios Claros
          </span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Sin letras pequeñas,{" "}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Precios justos y transparentes. Paga solo lo que necesitas, cuando
            lo necesitas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl p-6 sm:p-8 transition-all duration-300",
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/30 md:scale-105 md:-translate-y-2"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-white text-blue-600 text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                  <Zap className="w-3 h-3 fill-current" />
                  MÁS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "font-bold text-xl mb-1",
                    plan.popular
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    plan.popular
                      ? "text-blue-100"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={cn(
                    "text-4xl font-black",
                    plan.popular
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  )}
                >
                  ${plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm ml-1",
                    plan.popular
                      ? "text-blue-100"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  COP /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "w-4 h-4 flex-shrink-0",
                        plan.popular ? "text-cyan-200" : "text-green-500"
                      )}
                    />
                    <span
                      className={
                        plan.popular
                          ? "text-blue-50"
                          : "text-slate-700 dark:text-slate-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/reservar"
                className={cn(
                  "block text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 min-h-[48px] flex items-center justify-center",
                  plan.popular
                    ? "bg-white text-blue-600 active:bg-blue-50 shadow-lg"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white active:opacity-90"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
