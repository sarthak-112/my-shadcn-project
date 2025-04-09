"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation and Creativity",
    description: "We push boundaries and think outside the box to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration and Teamwork",
    description: "We believe in the power of working together to achieve exceptional results.",
  },
  {
    title: "Excellence in Delivery",
    description: "We maintain the highest standards in everything we do.",
  },
  {
    title: "Continuous Learning",
    description: "We stay ahead of industry trends and constantly improve our skills.",
  },
];

const Culture = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;