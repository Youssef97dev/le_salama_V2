"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="relative h-screen w-full">
        {/* Image Background */}
        <Image
          src="/assets/images/menu-gallery/menu-hero.jpg"
          alt="Logo"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-60"></div>
        {/* Hero Content */}
        <div className="absolute bottom-[45%]   flex w-full justify-center items-center text-primary_1">
          <span className="text-2xl lg:text-5xl italic text-center px-3 font-medium">
            {t("page_menu.title")}
          </span>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center items-center animate-bounce text-primary_1">
          <Link href="#main" className="border border-white rounded-full">
            <RiArrowDropDownLine size={40} />
          </Link>
        </div>
      </div>
    )
  );
};

export default Hero;
