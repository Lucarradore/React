import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const ConfirmationForm = () => {
  const location = useLocation(); // Obtiene los datos pasados mediante navigate
  const navigate = useNavigate(); // Para redirigir al usuario después de confirmar la compra
  const { cart = [] } = location.state || {}; // Recupera el carrito o lo inicializa como vacío

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
      navigate("/"); // Redirige al usuario a la página principal después de la compra
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-900/30 backdrop-blur-lg lg:w-[50rem] lg:rounded-lg lg:shadow-lg container mx-auto p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Confirmación de Compra</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium" htmlFor="firstName">Nombre</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={`w-full px-3 py-2 border rounded-lg ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium" htmlFor="lastName">Apellido</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={`w-full px-3 py-2 border rounded-lg ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium" htmlFor="paymentMethod">Método de Pago</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              className={`w-full px-3 py-2 border rounded-lg ${
                formik.touched.paymentMethod && formik.errors.paymentMethod
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
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
              <p className="text-red-500 text-sm">{formik.errors.paymentMethod}</p>
            )}
          </div>

          <div className="text-lg font-bold">
            <p>Total: ${totalPrice}</p>
            <p>Número de Orden: {orderNumber}</p>
            <p>Tiempo Estimado: {estimatedDeliveryTime}</p>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900"
              onClick={() => navigate("/")}
            >
              Cancelar Compra
            </button>
            <button
              type="submit"
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900"
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
