"use client";

export default function Marquee() {

  const items = [
    "DIGITAL MARKETING",
    "SEO",
    "AI AUTOMATION",
    "WEB DEVELOPMENT",
    "META ADS",
    "BRANDING",
    "LEAD GENERATION",
  ];

  return (

    <section className="py-10 overflow-hidden border-y border-white/10">

      <div className="flex gap-10 whitespace-nowrap animate-[marquee_20s_linear_infinite]">

        {[...items, ...items].map((item, index) => (

          <div
            key={index}
            className="text-4xl md:text-6xl heading-font text-white/20"
          >

            {item}

          </div>

        ))}

      </div>

    </section>

  );
}