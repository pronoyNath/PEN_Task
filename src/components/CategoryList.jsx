import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";



export const CategoryList = ({ categories }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-semibold px-16">
      {categories.map((cat, i) => (
        <div key={i} className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 tracking-widest">
            {cat.title}
          </h3>

          <ul className="space-y-3">
            {cat.items.map((item, j) => (
              <li
                key={j}
                className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black"
                onMouseEnter={() => setHovered(`${i}-${j}`)}
                onMouseLeave={() => setHovered(null)}
              >
                {item}
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={
                    hovered === `${i}-${j}`
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -5 }
                  }
                  transition={{ duration: 0.2 }}
                  className="text-gray-500"
                >
                  <FaChevronCircleRight />

                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
