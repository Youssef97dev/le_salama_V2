import Footer from "@/components/Footer";
import NavbarMiddle from "@/components/NavbarMiddle";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Reserve from "@/components/Reserve";
import WtspButton from "@/components/WtspButton";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <div>
      <NavbarMiddle />
      <Hero />
      <ContactUs />
      <ContactForm />
      <div className="w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3397.2810280229282!2d-7.985970000000001!3d31.626155000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee422b547dcb%3A0x77d12fb6b8ea2d42!2sLe%20Salama!5e0!3m2!1sfr!2sma!4v1727864619629!5m2!1sfr!2sma"
          height="500"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Reserve />
      <Footer />
      <WtspButton />
    </div>
  );
};

export default page;
