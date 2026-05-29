"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
    },
    {
      number: "250+",
      label: "Happy Clients",
    },
    {
      number: "12M+",
      label: "Ad Reach",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section
  id="stats"
  className="relative py-8 md:py-20 px-5 md:px-8 overflow-hidden"
>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-8 md:mb-20">
        <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">
          Achievements
        </p>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          OUR IMPACT
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              glass
              glow
              rounded-[24px]
              md:rounded-[30px]
              p-6
              md:p-10
              text-center
              transition
              duration-300
            "
          >
            <motion.h2
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                text-4xl
                md:text-6xl
                font-black
                mb-3
                bg-linear-to-r
                from-blue-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              {item.number}
            </motion.h2>

            <p className="text-white/70 text-sm md:text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}