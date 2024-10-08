import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const RoofTop = () => {
  const { t } = useTranslation();
  return (
    <div className=" w-full h-fit bg-primary flex flex-col-reverse lg:flex-row items-center align-middle justify-center gap-14  py-4 px-3 lg:px-10 lg:py-6 xl:px-28 xl:py-10 ">
      <div
        className="w-full h-full lg:h-[430px] xl:h-[600px]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <video
          className="w-full h-full object-cover hover:scale-105 transition-all ease-linear"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dz7wroord/video/upload/v1728119045/rooftop_h91y1y.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="w-full  flex flex-col gap-2 text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className="lg:text-5xl text-2xl font-normal pb-4 text-primary_2">
          Rooftop Skybar
        </div>
        <p className="font-medium text-base  text-primary_1 pb-3">
          {t("section_rooftop.content_1")}
          <br />
          {t("section_rooftop.content_2")}
          <br />
          {t("section_rooftop.content_3")}
          <br />
          {t("section_rooftop.content_4")}
          <br />
          {t("section_rooftop.content_5")}
        </p>
      </div>
      <div
        className="w-full h-full xl:h-[600px]"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <Image
          src="/assets/images/salama_14.jpg"
          alt="le salama 9"
          width={1200}
          height={1500}
          className="w-full h-full hover:scale-105  transition-all ease-linear"
        />
      </div>
    </div>
  );
};

export default RoofTop;
