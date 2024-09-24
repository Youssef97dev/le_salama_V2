"use client";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoofTop from "@/components/RoofTop";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <RoofTop />
      <div className="flex flex-col h-[200vh]"></div>
    </div>
  );
}
