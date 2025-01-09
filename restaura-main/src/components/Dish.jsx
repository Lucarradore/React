// import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Dishes from "../components/Dishes"; 

const Dish = () => {
  return (
    <>
    

      {/* HeroSection */}
      <HeroSection />
      

      {/* Contenido de Sobre Nosotros */}
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Dishes />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Dish;