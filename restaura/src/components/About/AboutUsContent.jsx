import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpeg";
import aboutImageUno from "../assets/about1.jpg";
import aboutImageDos from "../assets/about2.jpg";
import "../../src/about.css";

// Componente para títulos
const SectionTitle = ({ title }) => (
  <>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="section-title-line"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    ></motion.div>
  </>
);

// Componente para párrafos
const SectionParagraph = ({ children }) => (
  <motion.p
    className="section-paragraph"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    {children}
  </motion.p>
);

const SobreNosotrosContent = () => {
  return (
    <section className="about-us-section" id="sobre-nosotros">
      <h2 className="about-us-title">Sobre Nosotros</h2>
      <div className="about-us-content">
        {/* Contenido (Texto) */}
        <div className="about-us-text">
          <SectionTitle title="La Historia de Restaura: Donde los Sabores Cuentan Historias" />
          <SectionParagraph>
            En un rincón tranquilo de un pueblo costero, donde las olas susurraban secretos y el aire olía a mar, nació Restaura...
          </SectionParagraph>

          <SectionTitle title="Los Inicios" />
          <SectionParagraph>
            Todo comenzó hace 30 años, cuando Mateo Mariani, un chef con sueños grandes y bolsillos vacíos, llegó al pueblo buscando un nuevo comienzo...
          </SectionParagraph>

          <SectionTitle title="El Primer Plato" />
          <SectionParagraph>
            El día de la inauguración, Restaura abrió sus puertas con un menú limitado pero especial...
          </SectionParagraph>

          <SectionTitle title="La Magia de Restaura" />
          <SectionParagraph>
            Lo que hizo a Restaura especial no fueron solo sus platos, sino la experiencia que ofrecía...
          </SectionParagraph>

          <SectionTitle title="El Renacimiento" />
          <SectionParagraph>
            Con el tiempo, Restaura se convirtió en un destino turístico...
          </SectionParagraph>

          <SectionTitle title="El Legado" />
          <SectionParagraph>
            Hoy, Restaura sigue siendo un lugar mágico...
          </SectionParagraph>
        </div>

        {/* Imagen */}
        <div className="about-us-images">
          <motion.img
            src={aboutImage}
            alt="Sobre Nosotros"
            className="about-us-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src={aboutImageUno}
            alt="Sobre Nosotros"
            className="about-us-image mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src={aboutImageDos}
            alt="Sobre Nosotros"
            className="about-us-image mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SobreNosotrosContent;

