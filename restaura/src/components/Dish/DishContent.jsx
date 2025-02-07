import { DISHES } from "../../constants";
import DishCard from "./DishCard";
import "../../src/index.css";

const DishContent = () => {
  return (
    <section className="dishes-section" id="dishes">
      <h2 className="dishes-title">
        Nuestros Platos
      </h2>
      <div className="dishes-grid">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
      <div className="dishes-button-container">
        <a
          href="/dishes"
          target="_blank"
          rel="noopener noreferrer"
          className="dishes-button"
        >
          Ver más
        </a>
      </div>
    </section>
  );
};

export default DishContent;

