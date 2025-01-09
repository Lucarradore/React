import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup";
import logo from "../assets/logo.png";

// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: Yup.string()
    .required("El apellido es obligatorio")
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  asunto: Yup.string()
    .required("El asunto es obligatorio")
    .min(5, "El asunto debe tener al menos 5 caracteres"),
});

const ContactPage = () => {
  return (
    <div className="fixed left-44 top-12 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between p-4 bg-gray-900/30 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-lg lg:shadow-lg">
        <div>
          <img 
            src={logo} 
            alt="restaura" 
            width={80} 
            height={22} 
            className="mb-4 mx-auto"
          />
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-100">
            Formulario de Contacto
          </h2>
          <Formik
            initialValues={{ nombre: "", apellido: "", email: "", asunto: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert("Formulario enviado correctamente 🎉");
                resetForm();
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold">Nombre</label>
                  <Field
                    type="text"
                    name="nombre"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage
                    name="nombre"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold">Apellido</label>
                  <Field
                    type="text"
                    name="apellido"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage
                    name="apellido"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold">Asunto</label>
                  <Field
                    as="textarea"
                    name="asunto"
                    rows="3"
                    className="w-full p-2 border rounded"
                  />
                  <ErrorMessage
                    name="asunto"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

