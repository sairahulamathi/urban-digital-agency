
"use client";

import { motion } from "framer-motion";

const brands = [
  "Google",
  "Meta",
  "Netflix",
  "Spotify",
  "Adobe",
  "Amazon",
];

export default function Clients() {
  return (
    <section
  className="relative overflow-hidden px-4 sm:px-6 py-8 md:py-16"
>
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center tracking-[8px] uppercase text-white/50 text-xs sm:text-sm mb-10"
        >
          Trusted By Brands
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl h-28 md:h-36 flex items-center justify-center backdrop-blur-sm"
            >
              <span className="text-white text-xl md:text-3xl font-bold">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

