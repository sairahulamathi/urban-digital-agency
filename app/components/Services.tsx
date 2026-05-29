"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Megaphone,
  Smartphone,
  Search,
  Bot,
  Brush,
  BarChart3,
  Monitor,
} from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: Megaphone,
    description:
      "Build awareness, engagement and customer loyalty through strategic social media campaigns.",
    items: [
      "Strategy & Planning",
      "Content Creation",
      "Account Management",
      "Paid Advertising",
      "Performance Reporting",
    ],
  },
  {
    title: "Social Media Optimization",
    icon: Monitor,
    description:
      "Improve social visibility and audience engagement across platforms.",
    items: [
      "Goal Setting",
      "Hashtag Research",
      "Content Strategy",
      "Facebook Marketing",
      "Instagram Marketing",
    ],
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description:
      "Drive organic traffic and improve rankings with proven SEO strategies.",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Link Building",
    ],
  },
  {
    title: "Content Marketing",
    icon: Brush,
    description:
      "Create compelling content that attracts, engages and converts customers.",
    items: [
      "Content Strategy",
      "SEO Content",
      "Landing Pages",
      "Social Content",
      "Video Scripts",
    ],
  },
  {
    title: "Lead Generation",
    icon: BarChart3,
    description:
      "Generate qualified leads and maximize business growth.",
    items: [
      "Targeted Ads",
      "Landing Pages",
      "Lead Funnels",
      "Retargeting",
      "Analytics",
    ],
  },
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Build premium websites designed for speed, conversions and growth.",
    items: [
      "Custom Websites",
      "Responsive Design",
      "WordPress",
      "E-Commerce",
      "Landing Pages",
    ],
  },
  {
    title: "WhatsApp Automation",
    icon: Bot,
    description:
      "Automate communication and improve customer engagement.",
    items: [
      "API Setup",
      "Chatbots",
      "Broadcast Campaigns",
      "CRM Integration",
      "Auto Replies",
    ],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Powerful Android and iOS applications built for scale.",
    items: [
      "Android Apps",
      "iOS Apps",
      "UI / UX Design",
      "Integrated Services",
      "Testing Automation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-14 md:py-24 px-5 md:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="tracking-[8px] text-pink-400 uppercase mb-4 text-sm">
            Our Services
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            WHAT WE DO
          </h2>

          <p className="text-white/60 text-base md:text-xl mt-6 max-w-3xl mx-auto">
            Complete digital growth solutions for businesses,
            startups and brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
                  group
                  relative
                  bg-white/5
                  border
                  border-white/10
                  rounded-[32px]
                  p-7
                  backdrop-blur-xl
                  overflow-hidden
                  h-[430px]
                  flex
                  flex-col
                  hover:border-pink-500/40
                  hover:shadow-[0_0_50px_rgba(236,72,153,0.18)]
                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="
                      w-20
                      h-20
                      rounded-[24px]
                      bg-gradient-to-br
                      from-cyan-400
                      via-blue-500
                      to-pink-500
                      flex
                      items-center
                      justify-center
                      mb-7
                      shadow-[0_0_30px_rgba(59,130,246,0.35)]
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Services */}
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/75 text-sm flex items-center gap-2"
                      >
                        <span className="text-pink-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}