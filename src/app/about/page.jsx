import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import NavbarMiddle from "@/components/NavbarMiddle";
import Footer from "@/components/Footer";
import Reserve from "@/components/Reserve";

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <AboutUs />
      <Reserve />
      <Footer />
    </div>
  );
};

export default page;
