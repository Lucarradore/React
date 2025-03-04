import PropTypes from "prop-types";
import "../../../css/dish.css";

const DishCard = ({ dish, onAddToCart, showDetails = false }) => {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.title} className="dish-card-image" />
      <div className="dish-card-content">
        <h3 className="dish-card-title">{dish.title}</h3>
        <p className="dish-card-description">{dish.description}</p>

        {showDetails && (
          <>
            <p className="dish-card-price">${dish.price}</p>
            <button onClick={() => onAddToCart(dish)} className="dish-card-button">
              Agregar al carrito
            </button>
          </>
        )}
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
    price: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func,
  showDetails: PropTypes.bool, 
};

export default DishCard;









