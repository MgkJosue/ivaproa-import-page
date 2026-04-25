"use client";

import { useState } from "react";
import ProductImage from "@/components/ProductImage";
import { products, brands, waLink, originalPrice, type Product } from "@/lib/products";
import { MessageCircle, ExternalLink, Cpu, HardDrive, Palette } from "lucide-react";

const brandColors: Record<string, string> = {
  Xiaomi:      "#ff6900",
  Samsung:     "#1428a0",
  Infinix:     "#cc0000",
  Honor:       "#c8102e",
  Tecno:       "#009bde",
  Motorola:    "#000000",
  Apple:       "#555555",
  Accesorios:  "#1565c0",
};

function fmt(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function ProductCard({ p }: { p: Product }) {
  const orig = originalPrice(p.price, p.discount);

  return (
    <div
      className="bg-white rounded-2xl flex flex-col overflow-hidden group transition-shadow hover:shadow-xl"
      style={{ boxShadow: "0 4px 20px rgba(10,31,68,.09)" }}
    >
      {/* Image */}
      <div className="relative h-48 bg-[#f8fafc] flex items-center justify-center overflow-hidden">
        <ProductImage
          src={p.photoUrl}
          alt={p.model}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {p.discount > 0 && (
          <span
            className="absolute top-3 right-3 text-xs font-black px-2.5 py-1 rounded-full z-10"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            -{p.discount}%
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <span
            className="text-[11px] font-bold tracking-wide px-2 py-0.5 rounded-md"
            style={{
              backgroundColor: `${brandColors[p.brand] ?? "#1565c0"}18`,
              color: brandColors[p.brand] ?? "#1565c0",
            }}
          >
            {p.brand}
          </span>
          <h3 className="text-[var(--navy)] font-bold text-sm leading-snug mt-2">{p.model}</h3>
        </div>

        <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--muted-foreground)" }}>
          <span className="flex items-center gap-1.5"><Palette size={12} /> {p.colors}</span>
          {p.ram && <span className="flex items-center gap-1.5"><Cpu size={12} /> {p.ram} RAM</span>}
          {p.rom && <span className="flex items-center gap-1.5"><HardDrive size={12} /> {p.rom}</span>}
        </div>

        {/* Price: before + after */}
        <div className="mt-auto flex flex-col gap-0.5">
          {orig && (
            <span className="text-xs line-through" style={{ color: "var(--muted-foreground)" }}>
              Antes: ${fmt(orig)}
            </span>
          )}
          <div className="flex items-baseline gap-1.5">
            <span className="text-[var(--navy)] font-extrabold text-xl">${fmt(p.price)}</span>
            <span className="text-xs font-normal" style={{ color: "var(--muted-foreground)" }}>USD</span>
            {p.discount > 0 && (
              <span className="text-xs font-bold ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(249,168,37,.15)", color: "var(--gold)" }}>
                Ahorrás ${fmt((orig ?? 0) - p.price)}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={waLink(p.model)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all hover:brightness-110"
            style={{ backgroundColor: "#25d366", color: "#fff" }}
          >
            <MessageCircle size={13} />
            Consultar precio
          </a>
          <a
            href={p.specsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl border transition-all hover:bg-gray-50"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
            aria-label="Ver especificaciones"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Catalogo() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? products
    : products.filter((p) => p.brand === active);

  return (
    <section id="catalogo" style={{ backgroundColor: "var(--light)" }} className="py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color: "var(--blue)", backgroundColor: "rgba(21,101,192,.1)" }}
          >
            Catálogo Completo
          </span>
          <h2 className="text-[var(--navy)] text-4xl font-extrabold mt-3 mb-2">
            Todos nuestros productos.
          </h2>
          <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""} disponible{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por marca">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setActive(b)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer"
              style={
                active === b
                  ? { backgroundColor: "var(--blue)", color: "#fff" }
                  : { backgroundColor: "#fff", color: "var(--navy)", border: "1px solid var(--border)" }
              }
              aria-pressed={active === b}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
