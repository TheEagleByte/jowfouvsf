"use client";

import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
