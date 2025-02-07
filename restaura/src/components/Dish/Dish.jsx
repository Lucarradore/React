import HeroSection from "../Hero/HeroSection"; 
import Dishes from "../Dishes"; 
import "../../src/index.css"; 

const Dish = () => {
  return (
    <>
      <HeroSection />
      
      <main className="main-content">
        <Dishes />
      </main>
    </>
  );
};

export default Dish;
