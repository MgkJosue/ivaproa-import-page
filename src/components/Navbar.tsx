"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cómo Comprar", href: "#como-comprar" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      id="navbar"
      style={{ backgroundColor: "var(--navy)" }}
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,.35)]" : ""}`}
    >
      <nav className="flex items-center justify-between px-[5%] h-[68px]">
        <a href="#hero" className="flex items-center gap-3" onClick={close}>
          <Image
            src="/logo.png"
            alt="IVAPROA IMPORT"
            width={42}
            height={42}
            className="object-contain rounded"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-[1.05rem] tracking-wide">IVAPROA IMPORT</span>
            <span style={{ color: "var(--gold)" }} className="text-[0.6rem] font-medium tracking-[1px] uppercase">
              Innovación en Importaciones
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/593995093687"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg hover:brightness-105 transition-all ml-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--navy2)" }} className="md:hidden flex flex-col px-[5%] pb-5 pt-2 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-white/85 hover:bg-white/10 text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/593995093687"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            className="flex items-center gap-2 text-sm font-bold px-4 py-3 rounded-lg mt-2 justify-center"
          >
            <MessageCircle size={16} />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
