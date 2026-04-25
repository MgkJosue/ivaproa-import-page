import ProductImage from "@/components/ProductImage";
import { getTopOffers, waLink, originalPrice } from "@/lib/products";
import { MessageCircle, ExternalLink } from "lucide-react";

function fmt(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Ofertas() {
  const top = getTopOffers(6);

  return (
    <section id="ofertas" className="py-24 px-[5%]" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color: "var(--gold)", backgroundColor: "rgba(249,168,37,.12)" }}
          >
            Ofertas Destacadas
          </span>
          <h2 className="text-white text-4xl font-extrabold mt-3 mb-2">
            Los mejores descuentos.
          </h2>
          <p className="text-white/55 text-base">
            Selección de esta semana — precios directo de importación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {top.map((p) => {
            const orig = originalPrice(p.price, p.discount);
            return (
              <div
                key={p.id}
                className="rounded-2xl overflow-hidden flex flex-col group"
                style={{ backgroundColor: "var(--navy2)", border: "1px solid rgba(255,255,255,.07)" }}
              >
                {/* Image */}
                <div className="relative h-52 bg-white/5 flex items-center justify-center overflow-hidden">
                  <ProductImage
                    src={p.photoUrl}
                    alt={p.model}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className="absolute top-3 right-3 text-xs font-black px-3 py-1 rounded-full z-10"
                    style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                  >
                    -{p.discount}%
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--gold)" }}>
                      {p.brand}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mt-0.5">{p.model}</h3>
                    <p className="text-white/45 text-xs mt-1">{p.colors}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-white font-extrabold text-2xl">
                      ${fmt(p.price)}
                      <span className="text-white/40 text-sm font-normal ml-1">USD</span>
                    </span>
                    {orig && (
                      <span className="text-white/35 text-sm line-through">${fmt(orig)}</span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={waLink(p.model)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all hover:brightness-110"
                      style={{ backgroundColor: "#25d366", color: "#fff" }}
                    >
                      <MessageCircle size={15} />
                      Quiero este
                    </a>
                    <a
                      href={p.specsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-xl border transition-all hover:bg-white/10"
                      style={{ borderColor: "rgba(255,255,255,.15)", color: "rgba(255,255,255,.6)" }}
                      aria-label="Ver especificaciones"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border transition-all hover:bg-white/10"
            style={{ color: "var(--gold)", borderColor: "rgba(249,168,37,.3)" }}
          >
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}
