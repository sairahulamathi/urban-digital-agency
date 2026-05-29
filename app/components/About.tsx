"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    "AI Automation",
    "Luxury Branding",
    "Performance Marketing",
    "Premium Websites",
  ];

  return (
    <section
      id="about"
      className="relative py-8 md:py-20 px-5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 blur-[100px] opacity-20 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 rounded-[32px] md:rounded-[50px] p-4 md:p-6 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
              alt="Urban Digital Team"
              className="
                rounded-[24px]
                md:rounded-[40px]
                w-full
                h-[300px]
                sm:h-[450px]
                lg:h-[650px]
                object-cover
              "
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="tracking-[6px] md:tracking-[10px] text-pink-400 uppercase mb-4 text-sm">
            About Us
          </p>

          <h2 className="font-black uppercase leading-tight mb-6 md:mb-10">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Future Of
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-linear-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>

          <p className="text-white/65 text-base md:text-xl leading-relaxed mb-6">
            Urban Digital is a futuristic digital agency helping businesses
            dominate online through AI automation, performance marketing,
            luxury branding and premium digital experiences.
          </p>

          <p className="text-white/65 text-base md:text-xl leading-relaxed mb-10">
            We combine creativity, strategy and cutting-edge technology
            to build unforgettable brands that scale faster and smarter.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((item) => (
              <div
                key={item}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  md:rounded-3xl
                  p-4
                  md:p-6
                  text-sm
                  md:text-lg
                  text-white
                  font-semibold
                  backdrop-blur-xl
                  hover:border-pink-500/30
                  transition
                  duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}