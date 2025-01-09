import { DISHES } from "../constants";
import DishCard from "./DishCard";

const DishContent = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Nuestros Platos
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/dishes"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Ver más
        </a>
      </div>
    </section>
  );
};

export default DishContent;
