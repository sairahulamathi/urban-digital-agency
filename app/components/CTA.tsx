export default function CTA() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-24">
      <div className="glass glow rounded-[40px] p-10 md:p-14 text-center">
        <h2 className="heading-font text-4xl md:text-6xl gradient-text mb-6">
          READY TO GROW?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Let's build a powerful digital presence for your business and generate more leads.
        </p>

        <a
          href="https://wa.me/917702611958?text=Hi%20Urban%20Digital,%20I%20would%20like%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            px-10
            py-5
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            font-bold
            hover:scale-105
            transition-all
          "
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}