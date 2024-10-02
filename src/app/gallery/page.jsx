"use client";
import Hero from "./components/Hero";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Content from "./components/Content";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
