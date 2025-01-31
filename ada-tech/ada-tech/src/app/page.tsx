import Image from "next/image";

export default function Home() {
  return (
    <main>
    {/* Hero Section */}
    <section id="hero" className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to ADA Tech</h1>
    </section>

    {/* Services Section */}
    <section id="services" className="h-screen flex items-center justify-center bg-gray-800 text-white">
      <h2 className="text-3xl font-bold">Our Services</h2>
    </section>

    {/* Consultation Section */}
    <section id="consultation" className="h-screen flex items-center justify-center bg-gray-700 text-white">
      <h2 className="text-3xl font-bold">Consultation</h2>
    </section>

    {/* Donate Section */}
    <section id="donate" className="h-screen flex items-center justify-center bg-gray-600 text-white">
      <h2 className="text-3xl font-bold">Support Us</h2>
    </section>

    {/* Contact Section */}
    <section id="contact" className="h-screen flex items-center justify-center bg-gray-500 text-white">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
    </section>
  </main>
  );
}
