"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const contentAr = [
    {
      imageUrl: "/assets/images/privatisation.jpg",
      title: t("page_event.small_title_1"),
      className: "flex-col-reverse md:flex-row",
      text: t("page_event.description_1"),
    },
    {
      imageUrl: "/assets/images/live-show.jpg",
      title: t("page_event.small_title_2"),
      className: "flex-col-reverse md:flex-row-reverse",
      text_1: `${t("page_event.description_2_1")}`,
      text_2: `${t("page_event.description_2_2")}`,
      text_3: `${t("page_event.description_2_3")}`,
    },
  ];

  return (
    isClient && (
      <div
        id="events"
        className="flex flex-col justify-center items-center gap-14 py-2 px-3 lg:px-10 lg:py-16  xl:px-72"
      >
        {contentAr.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center gap-10 w-full ${item.className}`}
          >
            <div className="w-full">
              <Image
                src={item.imageUrl}
                alt="le salama 2"
                width={400}
                height={400}
                className="object-cover w-full h-full ml-auto"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <span className="text-3xl font-medium text-primary ">
                {item.title}
              </span>
              {item.text ? (
                <p className="text-gray-700">{item.text}</p>
              ) : (
                <p className="text-gray-700">
                  {item.text_1}
                  <br />
                  {item.text_2}
                  <br />
                  {item.text_3}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Content;
