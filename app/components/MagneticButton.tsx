"use client";

import { motion } from "framer-motion";

export default function MagneticButton() {

  return (

    <motion.button
      whileHover={{
        scale: 1.08,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-pink-500 font-semibold glow"
    >

      Get Started

    </motion.button>

  );
}