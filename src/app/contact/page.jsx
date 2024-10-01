import Footer from "@/components/Footer";
import NavbarMiddle from "@/components/NavbarMiddle";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <div className="h-32"></div>
      <Footer />
    </div>
  );
};

export default page;
