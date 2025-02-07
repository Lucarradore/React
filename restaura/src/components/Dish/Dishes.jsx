import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DishCard from "./Dish/DishCard";
import dish1 from "../assets/dishes/dish1.jpg";
import dish2 from "../assets/dishes/dish2.jpg";
import dish3 from "../assets/dishes/dish3.jpg";
import dish4 from "../assets/dishes/dish4.jpg";
import dish5 from "../assets/dishes/dish5.jpg";
import dish6 from "../assets/dishes/dish6.jpg";
import dish7 from "../assets/dishes/dish7.jpg";
import dish8 from "../assets/dishes/dish8.jpg";
import dish9 from "../assets/dishes/dish9.jpg";
import dish10 from "../assets/dishes/dish10.jpg";
import dish11 from "../assets/dishes/dish11.jpg";
import dish12 from "../assets/dishes/dish12.jpg";
import dish13 from "../assets/dishes/dish13.jpg";
import dish14 from "../assets/dishes/dish14.jpg";
import dish15 from "../assets/dishes/dish15.jpg";
import dish16 from "../assets/dishes/dish16.jpg";
import dish17 from "../assets/dishes/dish17.jpg";
import dish18 from "../assets/dishes/dish18.jpg";
import dish19 from "../assets/dishes/dish19.jpg";
import dish20 from "../assets/dishes/dish20.jpg";
import dish21 from "../assets/dishes/dish21.jpg";
import dish22 from "../assets/dishes/dish22.jpg";
import dish23 from "../assets/dishes/dish23.jpg";
import dish24 from "../assets/dishes/dish24.jpg";
import dish25 from "../assets/dishes/dish25.jpg";
import "../../src/dish.css";

const DISHES = [
  { id: 1, image: dish1, title: "Sopas", description: "Calientes y deliciosas.", category: "Sopas", price: 10000 },
  { id: 7, image: dish7, title: "Pastas", description: "Pastas italianas.", category: "Pastas", price: 13000 },
  { id: 11, image: dish11, title: "Ensaladas", description: "Frescas y naturales.", category: "Ensaladas", price: 6000 },
  { id: 16, image: dish16, title: "Postres", description: "Dulces irresistibles.", category: "Postres", price: 2300 },
  { id: 21, image: dish21, title: "Carnes", description: "Pescados frescos.", category: "Carnes", price: 5000 },
  { id: 4, image: dish4, title: "Sopas", description: "Calientes y deliciosas.", category: "Sopas", price: 9000 },
  { id: 6, image: dish6, title: "Pastas", description: "Pastas italianas.", category: "Pastas", price: 15000 },
  { id: 2, image: dish2, title: "Sopas", description: "Calientes y deliciosas.", category: "Sopas", price: 8000 },
  { id: 12, image: dish12, title: "Ensaladas", description: "Frescas y naturales.", category: "Ensaladas", price: 6000 },
  { id: 17, image: dish17, title: "Postres", description: "Dulces irresistibles.", category: "Postres", price: 1550 },
  { id: 22, image: dish22, title: "Carnes", description: "Pescados frescos.", category: "Carnes", price: 8000 },
  { id: 19, image: dish19, title: "Postres", description: "Dulces irresistibles.", category: "Postres", price: 5000 },
  { id: 8, image: dish8, title: "Pastas", description: "Pastas italianas.", category: "Pastas", price: 6000 },
  { id: 23, image: dish23, title: "Carnes", description: "Pescados frescos.", category: "Carnes", price: 15000 },
  { id: 13, image: dish13, title: "Ensaladas", description: "Frescas y naturales.", category: "Ensaladas", price: 7000 },
  { id: 3, image: dish3, title: "Sopas", description: "Calientes y deliciosas.", category: "Sopas", price: 8000 },
  { id: 9, image: dish9, title: "Pastas", description: "Pastas italianas.", category: "Pastas", price: 9000 },
  { id: 10, image: dish10, title: "Pastas", description: "Pastas italianas.", category: "Pastas", price: 15000 },
  { id: 14, image: dish14, title: "Ensaladas", description: "Frescas y naturales.", category: "Ensaladas", price: 6000 },
  { id: 5, image: dish5, title: "Sopas", description: "Calientes y deliciosas.", category: "Sopas", price: 10000 },
  { id: 18, image: dish18, title: "Postres", description: "Dulces irresistibles.", category: "Postres", price: 6000 },
  { id: 15, image: dish15, title: "Ensaladas", description: "Frescas y naturales.", category: "Ensaladas", price: 1500 },
  { id: 24, image: dish24, title: "Carnes", description: "Pescados frescos.", category: "Carnes", price: 9000 },
  { id: 20, image: dish20, title: "Postres", description: "Dulces irresistibles.", category: "Postres", price: 1500 },
  { id: 25, image: dish25, title: "Carnes", description: "Pescados frescos.", category: "Carnes", price: 5700 },
];

const CATEGORIES = ["Todos", "Pastas", "Ensaladas", "Postres", "Sopas", "Carnes"];

const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredDishes =
    selectedCategory === "Todos"
      ? DISHES
      : DISHES.filter((dish) => dish.category === selectedCategory);

  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const confirmPurchase = () => {
    navigate("/confirmationForm", { state: { cart } });
  };

  return (
    <section className="dishes-section">
      <h2 className="dishes-title">
        Nuestros Platos
      </h2>

      <div className="category-buttons">
        {CATEGORIES.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="dishes-grid">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} onAddToCart={addToCart} />
        ))}
      </div>

      <aside className="cart-sidebar">
        <h3 className="cart-title">Carrito</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>{item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-button"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <button
              className="confirm-purchase-button"
              onClick={confirmPurchase}
            >
              Confirmar Compra
            </button>
            <button
              className="clear-cart-button"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </>
        )}
      </aside>
    </section>
  );
};

export default Dishes;
