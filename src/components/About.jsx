import { PiCalendarBlankFill } from "react-icons/pi";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center gap-9 py-2 px-3 lg:px-10 lg:py-16  xl:px-28"
    >
      <div
        className="w-full flex flex-col gap-2 p-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className="lg:text-lg text-base italic text-primary_8">
          Moroccan Soul Food
        </div>
        <div className="lg:text-5xl text-2xl text-primary  pb-4">
          Restaurant Le Salama
        </div>
        <p className="font-medium text-base text-gray-700 mb-10 lg:mb-16">
          {t("section_about.content_1")}
          <br />
          {t("section_about.content_2")}
          <br />
          {t("section_about.content_3")}
          <br />
          {t("section_about.content_4")}
        </p>
        <div className="flex justify-between items-center w-fit gap-2 text-primary_8">
          <PiCalendarBlankFill size={55} />
          <div className="flex flex-col ">
            <span className="text-lg font-semibold">
              {t("menu.reservation")}
            </span>
            <span className="text-black font-semibold text-lg lg:text-2xl">
              +212 675-480018
            </span>
          </div>
        </div>
      </div>

      <div
        className="w-full flex gap-8 items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className="w-full h-[90%]  self-end ">
          <Image
            src="/assets/images/salama_16.jpg"
            alt="le salama 2"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[90%] self-start ">
          <Image
            src="/assets/images/salama_21.jpg"
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
