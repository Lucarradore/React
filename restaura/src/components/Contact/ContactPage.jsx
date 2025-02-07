import Footer from "../Footer/Footer"; 
import HeroSection from "../Hero/HeroSection";
import Contact from "./Contact"; 
import "../../src/index.css"; 

const SobreNosotros = () => {
  return (
    <>
      {/* HeroSection */}
      <HeroSection />

      {/* Contenido de Sobre Nosotros */}
      <main className="sobre-nosotros-main">
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SobreNosotros;
