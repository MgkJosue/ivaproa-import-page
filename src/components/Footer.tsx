import Image from "next/image";
import { MessageCircle, Camera, Share2 } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cómo Comprar", href: "#como-comprar" },
  { label: "Contacto", href: "#contacto" },
];

const brands = ["Xiaomi", "Samsung", "Infinix", "Honor", "Tecno", "Motorola", "Apple", "Accesorios"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060f1f", color: "rgba(255,255,255,.55)" }} className="pt-16 pb-8 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-3">
              <Image src="/logo.png" alt="IVAPROA IMPORT" width={38} height={38} className="rounded object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-sm tracking-wide">IVAPROA IMPORT</span>
                <span style={{ color: "var(--gold)" }} className="text-[0.58rem] font-medium tracking-wider uppercase">
                  Innovación en Importaciones
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed">
              Tienda de tecnología en Conocoto, Valle de los Chillos. Celulares importados, nuevos y sellados.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/593995093687" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/8 hover:bg-white/15 transition-colors text-white">
                <MessageCircle size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/8 hover:bg-white/15 transition-colors text-white">
                <Camera size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/8 hover:bg-white/15 transition-colors text-white">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Marcas</h4>
            <ul className="flex flex-col gap-2">
              {brands.map((b) => (
                <li key={b}>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm">
              <p>📍 Conocoto, Valle de los Chillos, Quito</p>
              <p>📱 +593 99 509 3687</p>
              <p>🕐 Lun–Sáb: 9:00–19:00</p>
              <a
                href="https://wa.me/593995093687"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:brightness-110 w-fit"
                style={{ backgroundColor: "#25d366", color: "#fff" }}
              >
                <MessageCircle size={14} />
                Escribir ahora
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 IVAPROA IMPORT. Todos los derechos reservados.</p>
          <p>
            Construido por{" "}
            <a
              href="https://aj-digital-studio.vercel.app/es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              AJ Digital Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
