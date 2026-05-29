import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import SmoothScroll from "./components/SmoothScroll";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#05010A] text-white">

      {/* EFFECTS */}
      <SmoothScroll />
      <CursorGlow />
      <WhatsApp />

      {/* MAIN CONTENT */}
      <Navbar />

      <Hero />

      <Clients />

      <Services />

      <Stats />

      <Portfolio />

      <Testimonials />

      <About />

      <Contact />

      <CTA />

      <Footer />

    </main>
  );
}