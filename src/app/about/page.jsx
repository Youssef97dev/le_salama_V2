import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import NavbarMiddle from "@/components/NavbarMiddle";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default page;
