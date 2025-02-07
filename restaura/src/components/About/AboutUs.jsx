import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";
import SobreNosotrosContent from "./AboutUsContent";
import "../../src/index.css";

const SobreNosotros = () => {
  return (
    <>
      <HeroSection />

      {/* Contenido de Sobre Nosotros */}
      <main className="sobre-nosotros-main">
        <SobreNosotrosContent />
      </main>

      <Footer />
    </>
  );
};

export default SobreNosotros;


