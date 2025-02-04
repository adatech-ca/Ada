"use client";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      <Hero />
      <Contact />
      <Services />
    </main>
  );
}
