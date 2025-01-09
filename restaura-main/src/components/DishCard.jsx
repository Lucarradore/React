import PropTypes from "prop-types";

const DishCard = ({ dish, onAddToCart }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img
        src={dish.image}
        alt={dish.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold tracking-tighter text-gray-300">
          {dish.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{dish.description}</p>
        <p className="font-semibold text-gray-400 mb-4">${dish.price}</p>
        <button
          onClick={() => onAddToCart(dish)}
          className="w-full bg-gray-600 text-gray-900 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default DishCard;





