
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="tracking-[8px] uppercase text-pink-400 mb-6 text-xs sm:text-sm"
            >
              AI Powered Digital Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none"
            >
              <span className="text-white">Build</span>
              <br />
              <span className="text-white">Your</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">Empire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-white/70 text-base sm:text-lg md:text-xl mt-8 max-w-2xl leading-relaxed"
            >
              We help businesses grow with futuristic websites,
              AI automation, performance marketing,
              branding and lead generation.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="flex flex-col sm:flex-row gap-5 mt-10"
            >
              <a
                href="https://wa.me/917702611958?text=Hi%20Urban%20Digital,%20I%20need%20more%20information."
                target="_blank"
rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-center hover:scale-105 transition"
              >
                Contact Us
              </a>

              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-center hover:bg-white/10 transition"
              >
                View Portfolio
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
                alt="Agency"
                className="w-full h-[320px] sm:h-[450px] lg:h-[650px] object-cover"
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

