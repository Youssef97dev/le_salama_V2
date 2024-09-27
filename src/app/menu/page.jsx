"use client";

import Hero from "./components/Hero";
import Menu from "./components/Menu";
import dynamic from "next/dynamic";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="!bg-secondary_2 ">
      <NavbarMiddle />
      <Hero />
      <Menu />
      <div className="flex flex-col h-[200vh]"></div>
    </div>
  );
};

export default page;
