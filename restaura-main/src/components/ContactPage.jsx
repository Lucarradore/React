import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact"; // Contenido de la sección "Sobre Nosotros"

const SobreNosotros = () => {
  return (
    <>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* HeroSection */}
      <HeroSection />

      {/* Contenido de Sobre Nosotros */}
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SobreNosotros;