"use client";

import { motion } from "framer-motion";

const portfolio = [
  {
    title: "Social Media Marketing",
    image: "/portfolio/smm.png",
    description:
      "Strategic campaigns that build engagement and brand awareness.",
    results: ["3M+ Reach", "120% Engagement", "Meta & Instagram Ads"],
  },

  {
    title: "Social Media Optimization",
    image: "/portfolio/smo.png",
    description:
      "Optimized social presence for stronger audience growth.",
    results: ["Profile Optimization", "Organic Growth", "Content Strategy"],
  },

  {
    title: "SEO Optimization",
    image: "/portfolio/seo.png",
    description:
      "Higher rankings and sustainable organic traffic growth.",
    results: ["Top Rankings", "250% Traffic Growth", "Lead Generation"],
  },

  {
    title: "Content Marketing",
    image: "/portfolio/content.png",
    description:
      "Content that educates, engages and converts visitors.",
    results: ["SEO Content", "Blogs", "Brand Storytelling"],
  },

  {
    title: "Lead Generation",
    image: "/portfolio/leads.png",
    description:
      "Data-driven campaigns that deliver qualified leads.",
    results: ["500+ Leads", "Meta Ads", "Landing Pages"],
  },

  {
    title: "Website Development",
    image: "/portfolio/website.png",
    description:
      "Premium websites designed for performance and conversions.",
    results: ["Responsive Design", "Modern UI/UX", "Fast Loading"],
  },

  {
    title: "WhatsApp Automation",
    image: "/portfolio/whatsapp.png",
    description:
      "Automated customer engagement and lead nurturing.",
    results: ["Chatbots", "CRM Integration", "24/7 Support"],
  },

  {
    title: "Mobile App Development",
    image: "/portfolio/mobile.png",
    description:
      "Android and iOS applications built for scale.",
    results: ["Android Apps", "iOS Apps", "Custom Solutions"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="tracking-[8px] text-cyan-400 uppercase mb-4 text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            OUR EXPERTISE
          </h2>

          <p className="text-white/60 text-base md:text-xl mt-6 max-w-3xl mx-auto">
            Services and solutions that help brands grow faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                bg-white/5
                border
                border-white/10
                rounded-[30px]
                overflow-hidden
                backdrop-blur-xl
                hover:border-pink-500/40
                hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.results.map((result) => (
                    <div
                      key={result}
                      className="text-white/75 text-sm flex items-center gap-2"
                    >
                      <span className="text-pink-400">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}