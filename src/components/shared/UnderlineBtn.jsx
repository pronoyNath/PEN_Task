// shared/UnderlineBtn.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const UnderlineBtn = ({ to, text, lineColor = "bg-primary", textColor = "text-black" }) => {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const isActive = location.pathname === to;

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to={to}
        className={`text-lg py-2 transition-colors ${textColor} ${
          isActive ? "font-semibold" : ""
        }`}
      >
        {text}
      </Link>

      <motion.span
        className={`absolute left-0 -bottom-1 h-0.5 ${lineColor} rounded-full`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={
          isActive
            ? { scaleX: 1, originX: 0 }
            : hovered
            ? { scaleX: 1, originX: 0 }
            : { scaleX: 0, originX: 1 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ width: "100%" }}
      />
    </motion.div>
  );
};

export default UnderlineBtn;
