"use client";

import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-xl">
          <Droplets className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
          ¿Listo para un auto
          <br />
          <span className="text-cyan-200">que brilla de verdad?</span>
        </h2>

        <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          Reserva en menos de 2 minutos. Sin registros complicados,
          sin tarjetas requeridas para agendar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-200 text-base"
          >
            Reservar Turno Gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-200 text-base"
          >
            Ver Documentación Técnica
          </Link>
        </div>
      </div>
    </section>
  );
}
