"use client";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Team from "@/components/Team";


export default function Home() {
  return (
    <main
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
      }}
    >
    <Header />
      <Hero />
      <Services />
      <Team />
    </main>
  );
}
