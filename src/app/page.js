"use client";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="flex flex-col h-[200vh]"></div>
    </>
  );
}
