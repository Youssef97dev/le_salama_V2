"use client";

import Hero from "./components/Hero";
import Menu from "./components/Menu";
import dynamic from "next/dynamic";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div className=" !bg-gradient-to-b from-secondary_1 to-secondary_5">
      <NavbarMiddle />
      <Hero />
      <Menu />
    </div>
  );
};

export default page;
