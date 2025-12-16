import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full -top-20 -left-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full top-1/3 -right-32 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.45, 0.25],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute rounded-full -bottom-32 left-1/3 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 blur-3xl"
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 rounded-full bg-blue-500/30 dark:bg-blue-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Grid pattern */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
