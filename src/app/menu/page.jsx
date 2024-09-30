"use client";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="">
      <NavbarMiddle />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
};

export default page;
