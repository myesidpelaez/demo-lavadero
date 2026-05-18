"use client";

import { CalendarCheck, Wrench, Car } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Reserva Online",
    desc: "Elige tu servicio, selecciona la fecha y hora que más te convenga. Confirmación instantánea en tu email.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Llevamos tu Auto",
    desc: "Nuestro equipo recibe tu vehículo y comienza el proceso con productos profesionales y técnicas certificadas.",
    color: "from-violet-500 to-purple-400",
  },
  {
    step: "03",
    icon: Car,
    title: "Listo para Brillar",
    desc: "Te notificamos cuando está listo. Recoge tu auto reluciente o pide que te lo entreguemos.",
    color: "from-green-500 to-emerald-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 border border-blue-100 dark:border-blue-800 uppercase tracking-wider">
            Proceso Simple
          </span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            3 pasos hacia un auto{" "}
            <span className="gradient-text">perfecto</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Diseñamos cada paso pensando en tu comodidad y en que tu tiempo es
            valioso.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-blue-300 via-violet-300 to-green-300 dark:from-blue-700 dark:via-violet-700 dark:to-green-700" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative text-center group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-black text-slate-400 dark:text-slate-500 tracking-widest">
                    PASO {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
