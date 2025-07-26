import Hero from "./components/Hero";
import Footer from "@/components/Footer";
import Content from "./components/Content";
import dynamic from "next/dynamic";
import Reserve from "@/components/Reserve";
import WtspButton from "@/components/WtspButton";
const NavbarMiddle = dynamic(() => import("@/components/NavbarMiddle"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <Content />
      <Reserve />
      <Footer />
      <WtspButton />
    </div>
  );
};

export default page;
