"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  CalendarCheck,
  Droplets,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const SERVICES = [
  { id: "basico", name: "Lavado Básico", price: "8.000", time: "20 min" },
  { id: "premium", name: "Lavado Premium", price: "18.000", time: "45 min" },
  { id: "vip", name: "Detailing VIP", price: "45.000", time: "2-3 h" },
  { id: "express", name: "Plan Express", price: "5.000", time: "10 min" },
  { id: "desodorizacion", name: "Desodorización", price: "12.000", time: "30 min" },
  { id: "tapiceria", name: "Limpieza de Tapicería", price: "22.000", time: "1 h" },
];

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

type Step = 1 | 2 | 3 | 4;

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  notes: string;
}

export default function ReservarPage() {
  const [step, setStep] = useState<Step>(1);
  const [booking, setBooking] = useState<BookingData>({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    notes: "",
  });

  const selectedService = SERVICES.find((s) => s.id === booking.service);

  const updateBooking = (field: keyof BookingData, value: string) => {
    setBooking((prev) => ({ ...prev, [field]: value }));
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          {/* Progress stepper */}
          {step < 4 && (
            <div className="flex items-center gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                      step > s
                        ? "bg-green-500 text-white"
                        : step === s
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                    )}
                  >
                    {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium hidden sm:block",
                      step >= s
                        ? "text-slate-700 dark:text-slate-200"
                        : "text-slate-400"
                    )}
                  >
                    {s === 1 ? "Servicio" : s === 2 ? "Fecha & Hora" : "Datos"}
                  </span>
                  {s < 3 && (
                    <div
                      className={cn(
                        "flex-1 h-px",
                        step > s
                          ? "bg-green-400"
                          : "bg-slate-200 dark:bg-slate-700"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step 1 — Select service */}
          {step === 1 && (
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                ¿Qué servicio necesitas?
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Selecciona el tipo de lavado que deseas.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => updateBooking("service", svc.id)}
                    className={cn(
                      "text-left p-5 rounded-2xl border-2 transition-all",
                      booking.service === svc.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-blue-300 bg-white dark:bg-slate-800"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white mb-1">
                          {svc.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          ⏱ {svc.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-blue-600 dark:text-blue-400">
                          ${svc.price}
                        </div>
                        <div className="text-xs text-slate-400">COP</div>
                      </div>
                    </div>
                    {booking.service === svc.id && (
                      <div className="mt-3 flex items-center gap-1 text-xs text-blue-600 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Seleccionado
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <button
                disabled={!booking.service}
                onClick={() => setStep(2)}
                className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step 2 — Date & time */}
          {step === 2 && (
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                ¿Cuándo lo necesitas?
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Elige la fecha y hora que mejor te quede.
              </p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  min={minDate}
                  value={booking.date}
                  onChange={(e) => updateBooking("date", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                  Hora
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => updateBooking("time", slot)}
                      className={cn(
                        "py-2.5 px-3 text-sm font-medium rounded-xl border transition-all",
                        booking.time === slot
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                >
                  ← Atrás
                </button>
                <button
                  disabled={!booking.date || !booking.time}
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-blue-500/25 transition-all"
                >
                  Continuar →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Personal data */}
          {step === 3 && (
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Tus datos
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Para confirmar tu reserva y enviarte el recordatorio.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { field: "name" as const, label: "Nombre completo", placeholder: "Juan García", type: "text" },
                    { field: "phone" as const, label: "Teléfono / WhatsApp", placeholder: "+57 300 000 0000", type: "tel" },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={booking[field]}
                        onChange={(e) => updateBooking(field, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={booking.email}
                    onChange={(e) => updateBooking("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Vehículo (marca, modelo y año)
                  </label>
                  <input
                    type="text"
                    placeholder="Toyota Corolla 2021"
                    value={booking.vehicle}
                    onChange={(e) => updateBooking("vehicle", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Notas adicionales{" "}
                    <span className="font-normal text-slate-400">(opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Alguna indicación especial..."
                    value={booking.notes}
                    onChange={(e) => updateBooking("notes", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Resumen de tu reserva
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-blue-700 dark:text-blue-300">
                  <div>
                    <span className="text-blue-400 block text-xs">Servicio</span>
                    {selectedService?.name}
                  </div>
                  <div>
                    <span className="text-blue-400 block text-xs">Fecha</span>
                    {booking.date}
                  </div>
                  <div>
                    <span className="text-blue-400 block text-xs">Hora</span>
                    {booking.time}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                >
                  ← Atrás
                </button>
                <button
                  disabled={!booking.name || !booking.phone || !booking.email || !booking.vehicle}
                  onClick={() => setStep(4)}
                  className="flex-[2] py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-blue-500/25 transition-all"
                >
                  Confirmar Reserva ✓
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>

              <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
                ¡Reserva confirmada!
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
                Te enviamos la confirmación a{" "}
                <strong className="text-slate-700 dark:text-slate-200">
                  {booking.email}
                </strong>
                . Te esperamos el{" "}
                <strong className="text-blue-600">{booking.date}</strong> a las{" "}
                <strong className="text-blue-600">{booking.time}</strong>.
              </p>

              <div className="glass rounded-2xl p-6 text-left mb-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {selectedService?.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {booking.date} — {booking.time}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: "Cliente", value: booking.name },
                    { label: "Vehículo", value: booking.vehicle },
                    { label: "Duración", value: selectedService?.time ?? "" },
                    { label: "Total", value: `$${selectedService?.price} COP` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <span className="text-xs text-slate-400 block">{label}</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Droplets className="w-4 h-4" />
                  Volver al inicio
                </Link>
                <button
                  onClick={() => {
                    setStep(1);
                    setBooking({ service: "", date: "", time: "", name: "", phone: "", email: "", vehicle: "", notes: "" });
                  }}
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  Nueva Reserva
                </button>
              </div>

              <p className="mt-8 text-xs text-slate-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-xl px-4 py-2 inline-block">
                ⚡ Esto es un demo — no se procesa ni almacena ningún dato real
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
