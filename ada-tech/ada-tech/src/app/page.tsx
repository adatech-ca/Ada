"use client";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import AboutUs  from "@/components/AboutUs";


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
      <AboutUs/>
      <Services />
    </main>
  );
}
