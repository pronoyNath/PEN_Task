// AnimatedBtn.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const AnimatedBtn = ({ to, text, lineColor = "bg-pink-600" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link to={to} className={`hover:italic transition-all duration-150 ease-in-out text-lg font-medium text-gray-800`}>
        {text}
      </Link>

      {/* underline */}
      <motion.span
        className={`absolute left-0 -bottom-1 h-0.5 w-full ${lineColor} rounded-full`}
        initial={{ scaleX: 1, originX: 0 }}
        animate={
          hovered
            ? { scaleX: 0, originX: 0, transition: { duration: 0.4 } } // shrink to right
            : { scaleX: 1, originX: 1, transition: { duration: 0.4 } } // grow from right
        }
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default AnimatedBtn;
