import { motion } from "framer-motion";
import { useState, Fragment } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

export const FooterList = ({ categories }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 font-semibold px-5 lg:px-16">
      {categories.map((cat, i) => (
        <div key={i} className="space-y-2 lg:space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 tracking-widest">
            {cat.title}
          </h3>

          <ul className="space-y-2 lg:space-y-4">
            {cat.items.map((item, j) => (
              <Fragment key={`${i}-${j}`}>
                <li
                  className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black"
                  onMouseEnter={() => setHovered(`${i}-${j}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span>{item}</span>

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

                {/* subItem directly under its corresponding item */}
                {Array.isArray(cat.subItem) && cat.subItem[j] && (
                  <li className=" text-sm text-gray-500">
                    {/* optional: make phone/email clickable */}
                    {isEmailOrPhone(cat.subItem[j]) ? (
                      <a
                        href={makeHref(cat.subItem[j])}
                        className="hover:underline"
                      >
                        {cat.subItem[j]}
                      </a>
                    ) : (
                      cat.subItem[j]
                    )}
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* --- helpers: make email/phone clickable (optional) --- */
const isEmailOrPhone = (s) =>
  typeof s === "string" &&
  (/\S+@\S+\.\S+/.test(s) || /^[+()\d\s-]+$/.test(s.trim()));

const makeHref = (s) =>
  /\S+@\S+\.\S+/.test(s) ? `mailto:${s.trim()}` : `tel:${s.replace(/\s+/g, "")}`;
