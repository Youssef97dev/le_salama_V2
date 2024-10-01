"use client";
import { useEffect } from "react";
import AOS from "aos";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoofTop from "@/components/RoofTop";
import Events from "@/components/Events";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

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
      <Events />
      <Reserve />
      <Footer />
    </div>
  );
}
