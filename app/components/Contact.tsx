"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");

        (
          e.target as HTMLFormElement
        ).reset();
      } else {
        setSuccess("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Unable to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-14 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="tracking-[8px] text-pink-400 uppercase mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            LET'S TALK
          </h2>

          <p className="text-white/60 text-base md:text-xl mt-6 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we
            can help grow your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-pink-400 text-sm mb-1">
                  Email
                </p>

                <p className="text-white/80 text-lg">
                  hello@urbandigital.com
                </p>
              </div>

              <div>
                <p className="text-pink-400 text-sm mb-1">
                  Phone
                </p>

                <p className="text-white/80 text-lg">
                  +91 77026 11958
                </p>
              </div>

              <div>
                <p className="text-pink-400 text-sm mb-1">
                  Location
                </p>

                <p className="text-white/80 text-lg">
                  Hyderabad, India
                </p>
              </div>

              <div>
                <p className="text-pink-400 text-sm mb-1">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/917702611958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-lg hover:text-pink-400 transition"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-pink-500
                "
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-pink-500
                "
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project"
                required
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/20
                  border
                  border-white/10
                  text-white
                  placeholder:text-white/40
                  outline-none
                  resize-none
                  focus:border-pink-500
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  font-bold
                  text-white
                  hover:scale-[1.02]
                  transition-all
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-green-400 mt-4">
                  {success}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}