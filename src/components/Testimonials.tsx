"use client";

import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carlos Méndez",
    role: "Ejecutivo — Toyota Camry",
    text: "Reservé en 2 minutos desde el celular. Llegué a recoger el auto y quedé impresionado, como si fuera nuevo. El Premium vale cada peso.",
    rating: 5,
    avatar: "CM",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Laura Jiménez",
    role: "Diseñadora — Honda CR-V",
    text: "Tenía manchas de café que nadie había podido quitar. El detailing VIP las eliminó completamente. ¡El interior huele increíble!",
    rating: 5,
    avatar: "LJ",
    color: "from-purple-400 to-violet-600",
  },
  {
    name: "Andrés Torres",
    role: "Emprendedor — Ford Explorer",
    text: "Uso el plan básico cada semana. La puntualidad y calidad son consistentes. El sistema de reservas online hace todo súper fácil.",
    rating: 5,
    avatar: "AT",
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Valentina Cruz",
    role: "Médica — Mazda CX-5",
    text: "Tengo Mazda negra y siempre daba miedo lavarla en otro lado. Acá la cuidan como si fuera de ellos. 100% recomendado.",
    rating: 5,
    avatar: "VC",
    color: "from-pink-400 to-rose-600",
  },
  {
    name: "Sebastián Ruiz",
    role: "Ingeniero — Kia Sportage",
    text: "La notificación cuando el auto estaba listo es un detalle que marca diferencia. Profesionalismo de principio a fin.",
    rating: 5,
    avatar: "SR",
    color: "from-amber-400 to-orange-600",
  },
  {
    name: "María Fernanda Ossa",
    role: "Abogada — Renault Duster",
    text: "Servicio express perfecto para los días que voy al juzgado con prisa. 10 minutos y el auto impecable. Ideal.",
    rating: 5,
    avatar: "MO",
    color: "from-teal-400 to-cyan-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 border border-blue-100 dark:border-blue-800 uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Más de 2,400 vehículos atendidos y una calificación promedio de 4.9
            estrellas hablan por sí solos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-100 dark:text-slate-700" />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </div>
                </div>
              </div>

              <Stars count={t.rating} />

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
