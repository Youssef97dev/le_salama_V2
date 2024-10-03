"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="relative h-[65vh] w-full">
        {/* Image Background */}
        <Image
          src="/assets/images/lesalama_6.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-60"></div>
        {/* Hero Content */}
        <div className="absolute bottom-[50%] md:bottom-[25%]  flex w-full justify-center items-center text-primary_1">
          <span className="text-2xl lg:text-5xl uppercase font-medium">
            {t("page_menu.title")}
          </span>
        </div>
      </div>
    )
  );
};

export default Hero;
