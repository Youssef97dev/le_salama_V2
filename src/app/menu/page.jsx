"use client";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { I18nextProvider } from "react-i18next";
import i18next from "../../../i18n.js";
import WtspButton from "@/components/WtspButton";
import Reserve from "@/components/Reserve";

const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="">
      <I18nextProvider i18n={i18next}>
        <NavbarMiddle />
        <Hero />
        <Menu />
        <Reserve />
        <Footer />
        <WtspButton />
      </I18nextProvider>
    </div>
  );
};

export default page;
