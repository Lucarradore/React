import { motion } from "framer-motion";
import { useState } from "react";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { REVIEWS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === REVIEWS.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mx-auto mb-8 mt-12 px-4" id="review">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p
          className="mb-10 text-xl font-light leading-normal tracking-tighter lg:text-2xl"
          variants={itemVariants}
        >
          {REVIEWS[currentIndex].content}
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={itemVariants}
        >
          <img
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEWS[currentIndex].name}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6 className="font-semibold">{REVIEWS[currentIndex].name}</h6>
            <p className="text-sm text-neutral-500">
              {REVIEWS[currentIndex].profession}
            </p>
          </div>
        </motion.div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            className="rounded-full bg-gray-400 p-2 hover:bg-gray-600"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-chevron-left text-lg"></i>
          </button>
          <button
            className="rounded-full bg-gray-400 p-2 hover:bg-gray-600"
            onClick={handleNext}
          >
            <i className="fa-solid fa-chevron-right text-lg"></i>
          </button>
        </div>
      </motion.div>

      <motion.div
        className="mt-14 flex flex-wrap justify-center gap-4 md:flex-row"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            src={customer}
            alt={`Customer ${index + 1}`}
            className="h-[200px] w-[150px] rounded-br-3xl rounded-tl-3xl object-cover md:h-[300px] md:w-[200px]"
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;

