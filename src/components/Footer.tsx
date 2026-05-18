"use client";

import Link from "next/link";
import { Droplets, Github, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              AquaWash
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Demo profesional de sistema de gestión para lavadero de vehículos.
              Construido con Next.js 15 + TypeScript.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/myesidpelaez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {["Lavado Básico", "Lavado Premium", "Detailing VIP", "Desodorización", "Plan Express"].map((s) => (
                <li key={s}>
                  <Link href="#servicios" className="hover:text-blue-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Proyecto</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Reservar Turno", href: "/reservar" },
                { label: "Documentación", href: "/docs" },
                { label: "Cómo Funciona", href: "#como-funciona" },
                { label: "Precios", href: "#precios" },
                { label: "Repositorio GitHub", href: "https://github.com/myesidpelaez" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-blue-400 transition-colors"
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Demo Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Riohacha, La Guajira, Colombia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:myesidpelaez@gmail.com" className="hover:text-blue-400 transition-colors">
                  myesidpelaez@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+57 300 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2025 AquaWash Demo. Construido por Mario Esid Peláez.</p>
          <div className="flex items-center gap-2">
            <span>Stack:</span>
            {["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-slate-800 rounded text-slate-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
