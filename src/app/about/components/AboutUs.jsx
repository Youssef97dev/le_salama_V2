"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = [
    {
      imageUrl: "/assets/images/salama_18.jpg",
      title: t("page_about.small_title_1"),
      className: "flex-col-reverse md:flex-row",
      text: t("page_about.description_1"),
    },
    {
      imageUrl: "/assets/images/salama_20.jpg",
      title: t("page_about.small_title_2"),
      className: "flex-col-reverse md:flex-row-reverse",
      text: t("page_about.description_2"),
    },
    {
      imageUrl: "/assets/images/lesalama_7.jpg",
      title: t("page_about.small_title_3"),
      className: "flex-col-reverse md:flex-row",
      text: t("page_about.description_3"),
    },
  ];

  return (
    isClient && (
      <div
        id="main"
        className="flex flex-col justify-center items-center gap-14 py-2 px-3 lg:px-10 lg:py-16  xl:px-72"
      >
        {content.map((item, index) => (
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
              <p className="text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default AboutUs;
