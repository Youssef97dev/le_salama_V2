"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoofTop from "@/components/RoofTop";
import Events from "@/components/Events";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";
import WtspButton from "@/components/WtspButton";
import Image from "next/image";

import dynamic from "next/dynamic";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);
  return isClient ? (
    <div>
      <NavbarMiddle />
      <Hero />
      <About />
      <RoofTop />
      <Events />
      <Reserve />
      <Footer />
      <WtspButton />
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen w-full ">
      <Image
        src="/assets/images/loader.png"
        alt="Logo loader"
        width={500}
        height={500}
        className="w-40 h-40 object-cover animate-spin-slow"
      />
    </div>
  );
}
