import { PiCalendarBlankFill } from "react-icons/pi";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-9 py-2 px-3 lg:px-10 lg:py-16  xl:px-28">
      <div className="w-full flex flex-col gap-2 p-3" data-aos="zoom-in">
        <div className="text-lg italic text-primary_8">Moroccan Soul Food</div>
        <div className="text-5xl text-primary  pb-4">Restaurant Le Salama</div>
        <p className="font-medium text-base text-gray-500 pb-3">
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
        <div className="flex justify-between items-center w-fit gap-2 text-primary_8 mt-auto">
          <PiCalendarBlankFill size={55} />
          <div className="flex flex-col ">
            <span className="text-lg font-semibold">Reservation</span>
            <span className="text-black font-semibold text-2xl">
              +212 675-480018
            </span>
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col md:flex-row gap-8 items-center"
        data-aos="zoom-in"
      >
        <div className="w-full md:h-[90%] h-full md:self-end self-auto">
          <Image
            src="/assets/images/salama_16.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:h-[90%] h-full md:self-start self-auto">
          <Image
            src="/assets/images/salama_15.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
