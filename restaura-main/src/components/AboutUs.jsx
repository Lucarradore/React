// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import SobreNosotrosContent from "../components/AboutUsContent"; // Contenido de la sección "Sobre Nosotros"

const SobreNosotros = () => {
  return (
    <>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* HeroSection */}
      <HeroSection />

      {/* Contenido de Sobre Nosotros */}
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <SobreNosotrosContent />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SobreNosotros;

