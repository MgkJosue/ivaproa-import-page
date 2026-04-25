import { ShoppingBag, MapPin, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 40%, #0e3272 100%)",
      }}
      className="relative overflow-hidden min-h-[88vh] flex items-center"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full px-[5%] py-24 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border"
            style={{ color: "var(--gold)", borderColor: "rgba(249,168,37,.3)", backgroundColor: "rgba(249,168,37,.08)" }}
          >
            <MapPin size={13} />
            Conocoto · Valle de los Chillos · Quito
          </div>

          <h1 className="text-white text-5xl sm:text-6xl font-extrabold leading-[1.1] mb-6">
            Tu próximo celular{" "}
            <span style={{ color: "var(--gold)" }}>está aquí.</span>
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            Importaciones directas. Garantía real. Envíos a todo Ecuador.
            <br />
            <strong className="text-white/90">Xiaomi, Samsung, Infinix, Honor, Tecno, Motorola, Apple.</strong>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogo"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base hover:brightness-105 transition-all shadow-lg"
            >
              <ShoppingBag size={18} />
              Ver Catálogo
            </a>
            <a
              href="#ofertas"
              className="flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-white border border-white/25 hover:bg-white/10 transition-all"
            >
              Ver Ofertas
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-6">
            {[
              { icon: <ShoppingBag size={16} />, text: "Caja sellada · Sin uso" },
              { icon: <Truck size={16} />,       text: "Servientrega & Urbano Express" },
              { icon: <MapPin size={16} />,      text: "Tienda física en Conocoto" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/60 text-sm">
                <span style={{ color: "var(--gold)" }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
