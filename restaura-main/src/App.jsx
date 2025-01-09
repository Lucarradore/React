import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Dish from "./components/Dish";
import DishContent from "./components/DishContent";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Contact from "./components/ContactPage";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Review from "./components/Review";
import SobreNosotros from "./components/AboutUs";
import DishesConfirm from "./components/DishesConfirm"; // Importa el componente DishesConfirm
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <Router>
      <Routes>
  {/* Otras rutas */}
  <Route
    path="/sobre-nosotros"
    element={
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <SobreNosotros />
      </main>
    }
  />
  <Route
    path="/contacto"
    element={
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Contact />
      </main>
    }
  />
  <Route
    path="/dishes"
    element={
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Dish />
        <Footer />
      </main>
    }
  />
  <Route
    path="/confirmationForm"
    element={
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <DishesConfirm />
      </main>
    }
  />
  {/* Ruta principal como última opción */}
  <Route
    path="/"
    element={
      <>
        <Navbar />
        <main className="overflow-y-hidden text-neutral-200 antialiased">
          <HeroSection />
          <DishContent />
          <About />
          <Mission />
          <Expertise />
          <Review />
          <ContactSection />
          <Footer />
        </main>
      </>
    }
  />
</Routes>
    </Router>
    </ErrorBoundary>
  );
}

export default App;

