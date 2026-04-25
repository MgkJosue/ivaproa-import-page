import { MessageCircle, CreditCard, Truck, MapPin } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: <MessageCircle size={24} />,
    title: "Escríbenos",
    desc: "Contáctanos por WhatsApp con el modelo que te interesa. Te respondemos en minutos.",
  },
  {
    num: "02",
    icon: <CreditCard size={24} />,
    title: "Elige cómo pagar",
    desc: "Transferencia, efectivo en tienda, o crédito con solo tu cédula. Sin complicaciones.",
  },
  {
    num: "03",
    icon: <Truck size={24} />,
    title: "Recibe en casa",
    desc: "Enviamos por Servientrega y Urbano Express a todo Ecuador. 24 a 72 horas.",
  },
  {
    num: "04",
    icon: <MapPin size={24} />,
    title: "O visítanos",
    desc: "Estamos en Conocoto. Llévate tu celular hoy mismo, en mano.",
  },
];

export default function ComoComprar() {
  return (
    <section id="como-comprar" className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-xl">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color: "var(--blue)", backgroundColor: "rgba(21,101,192,.1)" }}
          >
            Proceso de compra
          </span>
          <h2 className="text-[var(--navy)] text-4xl font-extrabold mt-3">
            Comprar es fácil.
          </h2>
          <p style={{ color: "var(--muted-foreground)" }} className="mt-2 text-sm leading-relaxed">
            Estamos en Conocoto, pero vendemos a todo Ecuador. El trato es directo, sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((p, i) => (
            <div
              key={p.num}
              className="relative rounded-2xl p-7 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--light)",
                borderLeft: i === 0 ? "4px solid var(--gold)" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-4xl font-black opacity-10 select-none"
                  style={{ color: "var(--navy)" }}
                >
                  {p.num}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center ml-auto"
                  style={{ backgroundColor: "rgba(21,101,192,.1)", color: "var(--blue)" }}
                >
                  {p.icon}
                </div>
              </div>
              <h3 className="text-[var(--navy)] font-bold text-base">{p.title}</h3>
              <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credito highlight */}
        <div
          className="mt-10 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ backgroundColor: "rgba(21,101,192,.06)", border: "1px solid rgba(21,101,192,.15)" }}
        >
          <div className="flex-1">
            <h3 className="text-[var(--navy)] font-bold text-lg mb-1">Lleva tu celular hoy en crédito</h3>
            <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
              Solo tu cédula y ser mayor de 18 años. Sin enganche mínimo.
            </p>
          </div>
          <a
            href="https://wa.me/593995093687?text=Hola%2C+quiero+info+sobre+cr%C3%A9dito"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:brightness-110 whitespace-nowrap"
            style={{ backgroundColor: "var(--blue)", color: "#fff" }}
          >
            <MessageCircle size={15} />
            Preguntar sobre crédito
          </a>
        </div>
      </div>
    </section>
  );
}
