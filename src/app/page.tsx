import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ofertas from "@/components/Ofertas";
import Valores from "@/components/Valores";
import Catalogo from "@/components/Catalogo";
import ComoComprar from "@/components/ComoComprar";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ofertas />
        <Valores />
        <Catalogo />
        <ComoComprar />
        <Contacto />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
