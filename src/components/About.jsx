import { PiCalendarBlankFill } from "react-icons/pi";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-9 py-16 px-64">
      <div className="w-full flex flex-col gap-2 p-3" data-aos="fade-right">
        <div className="font-bold italic text-primary_8">
          Moroccan Soul Food
        </div>
        <div className="text-4xl font-semibold pb-4">Restaurant Le Salama</div>
        <p className="font-medium text-sm leading-7 text-gray-500 pb-3">
          Located in the heart of Djema el Fna square, it’s a cozy place to
          enjoy a drink after a shopping spree in the souks!
          <br />
          An elegant and hospitable spot that harmonizes colonial style with
          Moroccan craftsmanship, where everything from the tones to the subdued
          lighting has been perfectly chosen for a coffee, lunch, or even a
          romantic dinner.
          <br />
          At sunset, it’s the ideal place to enjoy an aperitif with a fantastic
          panorama of the Atlas Mountains. In the kitchen, you’ll find the
          must-try dishes of Moroccan cuisine: shoulder of lamb, Tangia,
          Kemias... all cooked with subtlety.
          <br />
          As for the ambiance, there’s a pianist, DJ, or dancers, depending on
          the evening. And there’s more to discover! Come and explore the
          secrets this fascinating place hides.
        </p>
        <div className="flex justify-between items-center w-fit gap-2 text-primary_8">
          <PiCalendarBlankFill size={55} />
          <div className="flex flex-col ">
            <span className="uppercase font-semibold">Reservation</span>
            <span className="text-black font-medium text-xl">
              +212 675-480018
            </span>
          </div>
        </div>
      </div>
      <div className="w-full relative" data-aos="fade-left">
        <div className="absolute top-1 right-4 shadow-lg shadow-primary_9 rounded-lg hover:scale-105 transition-all ease-linear">
          <Image
            src="/assets/images/lesalama_6.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="absolute bottom-1 left-4  shadow-lg shadow-primary_9 rounded-lg z-30 hover:scale-105 transition-all ease-linear">
          <Image
            src="/assets/images/lesalama_7.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
