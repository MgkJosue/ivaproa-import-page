import { PackageCheck, Truck, ShieldCheck } from "lucide-react";

const valores = [
  {
    icon: <PackageCheck size={28} />,
    title: "Importación Directa",
    desc: "Todos nuestros equipos llegan directo de importación. Caja sellada, sin uso, con todos sus accesorios originales.",
  },
  {
    icon: <Truck size={28} />,
    title: "Envíos a Todo Ecuador",
    desc: "Despachamos por Servientrega y Urbano Express. Tu pedido llega a cualquier provincia en 24 a 72 horas.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Garantía Real",
    desc: "Respaldamos cada venta con atención post-compra directa por WhatsApp. Sin trámites, sin vueltas.",
  },
];

export default function Valores() {
  return (
    <section id="valores" className="py-24 px-[5%]" style={{ backgroundColor: "var(--light)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-xl">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color: "var(--blue)", backgroundColor: "rgba(21,101,192,.1)" }}
          >
            Por qué elegirnos
          </span>
          <h2 className="text-[var(--navy)] text-4xl font-extrabold mt-3">
            Todo lo que necesitas, garantizado.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4"
              style={{ boxShadow: "0 4px 24px rgba(10,31,68,.08)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(21,101,192,.1)", color: "var(--blue)" }}
              >
                {v.icon}
              </div>
              <h3 className="text-[var(--navy)] font-bold text-xl">{v.title}</h3>
              <p style={{ color: "var(--muted-foreground)" }} className="text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
