export default function Testimonials() {

  const reviews = [
    {
      name: "Rahul",
      text: "Amazing premium website and marketing services.",
    },
    {
      name: "Arjun",
      text: "Helped us scale our business digitally.",
    },
    {
      name: "Kiran",
      text: "Modern futuristic design and excellent support.",
    },
  ];

  return (

    <section className="px-5 md:px-16 py-8 md:py-20">

      <div className="text-center mb-8 md:mb-16">

        <p className="uppercase tracking-[6px] text-pink-400 mb-4">
          Testimonials
        </p>

        <h2 className="heading-font text-6xl gradient-text">
          CLIENT REVIEWS
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="glass glow rounded-[30px] p-10"
          >

            <p className="text-gray-300 leading-relaxed mb-6">
              "{review.text}"
            </p>

            <h3 className="text-xl font-bold">
              {review.name}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );
}