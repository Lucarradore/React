import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Dish from "./components/Dish/Dish";
import DishContent from "./components/Dish/DishContent";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Expertise from "./components/Expertise/Expertise";
import Contact from "./components/Contact/ContactPage";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";
import SobreNosotros from "./components/About/AboutUs";
import DishesConfirm from "./components/Dish/DishesConfirm"; 
import "../css/index.css"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar toggleCart={toggleCart} />
              <main className="main-container">
                <HeroSection />
                <DishContent />
                <About />
                <Mission />
                <Expertise />
                <Review />
                <ContactSection />
                <Footer />
              </main>
              {isCartOpen && <div className="cart">Carrito abierto</div>}
            </>
          }
        />
        <Route
          path="/sobre-nosotros"
          element={
            <main className="main-container">
              <SobreNosotros />
            </main>
          }
        />
        <Route
          path="/contacto"
          element={
            <main className="main-container">
              <Contact />
            </main>
          }
        />
        <Route
          path="/dishes"
          element={
            <main className="main-container">
              <Dish />
              <Footer />
            </main>
          }
        />
        <Route
          path="/confirmationForm"
          element={
            <main className="main-container">
              <DishesConfirm />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
