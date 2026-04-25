import { MessageCircle, MapPin, Clock, Truck } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 px-[5%]" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ color: "var(--gold)", backgroundColor: "rgba(249,168,37,.12)" }}
          >
            Contáctanos
          </span>
          <h2 className="text-white text-4xl font-extrabold mt-3 mb-2">
            Hablemos.
          </h2>
          <p className="text-white/55 text-base max-w-md">
            Estamos en Conocoto, pero vendemos a todo Ecuador. El trato es directo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <MessageCircle size={20} />,
                title: "WhatsApp",
                value: "+593 99 509 3687",
                sub: "Respuesta en minutos",
                href: "https://wa.me/593995093687",
              },
              {
                icon: <MapPin size={20} />,
                title: "Tienda física",
                value: "Conocoto, Valle de los Chillos",
                sub: "Quito, Ecuador",
                href: "https://maps.google.com/?q=Conocoto+Valle+de+los+Chillos+Quito",
              },
              {
                icon: <Clock size={20} />,
                title: "Horario de atención",
                value: "Lun – Sáb: 9:00 – 19:00",
                sub: "Dom: 10:00 – 15:00",
                href: null,
              },
              {
                icon: <Truck size={20} />,
                title: "Envíos nacionales",
                value: "Servientrega & Urbano Express",
                sub: "A todo Ecuador",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(249,168,37,.12)", color: "var(--gold)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold text-sm hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  )}
                  <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder + CTA */}
          <div className="flex flex-col gap-5">
            <a
              href="https://maps.google.com/?q=Conocoto+Valle+de+los+Chillos+Quito"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[220px] rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:brightness-110"
              style={{ backgroundColor: "rgba(21,101,192,.15)", border: "1px solid rgba(21,101,192,.25)" }}
            >
              <MapPin size={44} style={{ color: "var(--gold)" }} />
              <p className="text-white font-semibold text-base">Ver en Google Maps</p>
              <p className="text-white/45 text-xs">Conocoto · Valle de los Chillos · Quito</p>
            </a>

            <a
              href="https://wa.me/593995093687?text=Hola%2C+quiero+consultar+sobre+un+producto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-5 rounded-2xl text-base font-bold transition-all hover:brightness-110"
              style={{ backgroundColor: "#25d366", color: "#fff" }}
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
