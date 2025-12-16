import React from "react";
import { motion } from "framer-motion";

const CardContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full p-8 overflow-hidden border shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border-gray-200/50 dark:border-gray-700/50"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default CardContainer;
