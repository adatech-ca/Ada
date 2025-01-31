import Image from "next/image";

export default function Home() {
  return (
      <main>
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to ADA Tech</h1>
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
  {/* Section Title */}
  <h2 className="text-4xl font-extrabold text-center mb-8">Our Services</h2>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
    {/* Service 1 */}
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center transition transform hover:scale-105">
      <div className="text-blue-400 text-5xl mb-4">💡</div>
      <h3 className="text-2xl font-semibold mb-2">AI-Powered Business Strategies</h3>
      <p className="text-gray-300">Custom AI-driven marketing & tech solutions tailored to your business.</p>
    </div>

    {/* Service 2 */}
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center transition transform hover:scale-105">
      <div className="text-green-400 text-5xl mb-4">📊</div>
      <h3 className="text-2xl font-semibold mb-2">Data-Driven Consulting</h3>
      <p className="text-gray-300">Optimize your business operations with advanced data insights.</p>
    </div>

    {/* Service 3 */}
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center transition transform hover:scale-105">
      <div className="text-yellow-400 text-5xl mb-4">🌐</div>
      <h3 className="text-2xl font-semibold mb-2">Custom Web & App Development</h3>
      <p className="text-gray-300">Modern, scalable websites & applications built for your business.</p>
    </div>
  </div>
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
