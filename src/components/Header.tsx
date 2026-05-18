"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Droplets, Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          /* iOS safe area: padding-top accounts for notch / Dynamic Island */
          "pt-[env(safe-area-inset-top)]",
          scrolled ? "glass shadow-lg" : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300",
            scrolled ? "py-3" : "py-4"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl min-h-[44px]"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="gradient-text">AquaWash</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Dark mode toggle — 44×44 touch target */}
            <button
              onClick={() => setDark(!dark)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
              aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              href="/reservar"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-200 min-h-[44px]"
            >
              Reservar Ahora
            </Link>

            {/* Hamburger — 44×44 touch target */}
            <button
              className="md:hidden w-11 h-11 flex items-center justify-center text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="relative mt-[72px] mx-4 glass rounded-2xl p-4 flex flex-col gap-1 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center font-medium text-slate-700 dark:text-slate-200 px-4 py-3.5 rounded-xl active:bg-blue-50 dark:active:bg-blue-900/20 transition-colors min-h-[48px]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
              <Link
                href="/reservar"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl min-h-[52px] text-base shadow-lg"
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
