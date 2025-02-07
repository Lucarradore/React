import { useLocation, useNavigate } from "react-router-dom"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "../../src/dish.css"; 

const ConfirmationForm = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const { cart = [] } = location.state || {}; 

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const estimatedDeliveryTime = `${30 + Math.floor(Math.random() * 20)} minutos`;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      paymentMethod: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Requerido"),
      paymentMethod: Yup.string().required("Seleccione un método de pago"),
    }),
    onSubmit: (values) => {
      alert(
        `Gracias por tu compra, ${values.firstName}!\n` +
          `Número de orden: ${orderNumber}\n` +
          `Total: $${totalPrice}\n` +
          `Tiempo de entrega estimado: ${estimatedDeliveryTime}`
      );
      navigate("/"); 
    },
  });

  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">Confirmación de Compra</h2>
        <form onSubmit={formik.handleSubmit} className="form-fields">
          <div>
            <label className="form-label" htmlFor="firstName">Nombre</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={`form-input ${formik.touched.firstName && formik.errors.firstName ? "input-error" : ""}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="error-message">{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="form-label" htmlFor="lastName">Apellido</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={`form-input ${formik.touched.lastName && formik.errors.lastName ? "input-error" : ""}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="error-message">{formik.errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="form-label" htmlFor="paymentMethod">Método de Pago</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              className={`form-input ${formik.touched.paymentMethod && formik.errors.paymentMethod ? "input-error" : ""}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.paymentMethod}
            >
              <option value="" label="Seleccione un método de pago" />
              <option value="creditCard" label="Tarjeta de Crédito" />
              <option value="cash" label="Efectivo" />
              <option value="paypal" label="PayPal" />
            </select>
            {formik.touched.paymentMethod && formik.errors.paymentMethod && (
              <p className="error-message">{formik.errors.paymentMethod}</p>
            )}
          </div>

          <div className="order-summary">
            <p>Total: ${totalPrice}</p>
            <p>Número de Orden: {orderNumber}</p>
            <p>Tiempo Estimado: {estimatedDeliveryTime}</p>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/")}
            >
              Cancelar Compra
            </button>
            <button
              type="submit"
              className="confirm-btn"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ConfirmationForm.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default ConfirmationForm;

