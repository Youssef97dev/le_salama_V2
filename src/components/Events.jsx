import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Events = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      title: t("section_event.card_title_1"),
      imageUrl: "/assets/images/salama_11.jpg",
      text: t("section_event.card_content_1"),
    },
    {
      id: 1,
      title: t("section_event.card_title_2"),
      imageUrl: "/assets/images/salama_13.jpg",
      text: t("section_event.card_content_2"),
    },
    {
      id: 2,
      title: t("section_event.card_title_3"),
      imageUrl: "/assets/images/salama_12.jpg",
      text: t("section_event.card_content_3"),
    },
  ];
  return (
    <div className="relative h-fit  flex flex-col space-y-5 items-center py-10 px-16">
      {/* Parallax Background 
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: 'url("/assets/images/lesalama_8.jpg")' }}
      ></div>*/}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000] h-full lg:h-[65%] z-[-1]"></div>

      {/* Content */}
      <span className="italic text-lg text-primary_5">
        {t("section_event.title")}
      </span>
      <span className="text-5xl text-white">
        {t("section_event.big_title")}
      </span>
      <div className="flex flex-col lg:flex-row gap-14">
        {data.map((item) => (
          <div key={item.id} className="container_card">
            <div className="card ">
              <div className="front">
                <div className="absolute inset-0 bg-black opacity-20 "></div>
                <div className="absolute bottom-0 left-0 w-full h-1/4 text-white flex justify-center items-center px-5">
                  <span className="text-2xl font-medium text-center">
                    {item.title}
                  </span>
                </div>

                <img src={item.imageUrl} className="w-full h-full" />
              </div>
              <div className="back">
                <div className="absolute top-0 left-0 w-full  text-black flex flex-col justify-center items-center px-5 py-8 gap-5">
                  <span className="text-2xl font-semibold text-center">
                    {item.title}
                  </span>
                  <p className="font-medium text-base leading-8 text-center text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
