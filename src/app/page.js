"use client";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoofTop from "@/components/RoofTop";
import Events from "@/components/Events";
import Reserve from "@/components/Reserve";

import dynamic from "next/dynamic";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <About />
      <RoofTop />
      <Reserve />
      <Events />
      <div className="flex flex-col h-[200vh]"></div>
    </div>
  );
}
