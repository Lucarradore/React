import { motion } from "framer-motion";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Acerca De 
      </h2>
      <div className="flex flex-wrap">
      <div className="w-full p-4 lg:w-1/2">
          <motion.img
            src={about}
            alt="Sobre Nosotros"
            className="rounded-3xl lg:-rotate-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            className="text-4xl tracking-tighter lg:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>

      {/* Botón "Saber más" */}
      <div className="flex justify-center mt-8">
        <a
          href="/sobre-nosotros"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Saber más
        </a>
      </div>
    </section>
  );
};

export default About;

