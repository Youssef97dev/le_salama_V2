"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BiSolidMap } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <div className="bg-[#000000] gap-5 lg:gap-0 text-white flex flex-col lg:flex-row justify-around items-center lg:items-start py-2 px-3 lg:px-10 lg:py-16  xl:px-28">
          <div>
            <Link href="/">
              <Image
                src="/assets/images/logo-salama-humberger-white.png"
                alt="Logo"
                width={150}
                height={150}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1 items-center lg:items-start justify-evenly uppercase ">
            <span className="!text-2xl  font-semibold mb-3  capitalize">
              {t("footer.links")}
            </span>
            <Link href="/">{t("menu.home")}</Link>
            <Link href="/menu">{t("menu.cartemenu")}</Link>
            <Link href="/about">{t("menu.aboutus")}</Link>
            <Link href="/gallery">{t("menu.gallery")}</Link>
            <Link href="/contact">{t("menu.contact")}</Link>
            <Link href="#">{`FAQs`}</Link>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start justify-center">
            <span className="!text-2xl  font-semibold mb-3  capitalize">
              Contact
            </span>
            <div className="flex justify-center items-center gap-1">
              <BiSolidMap size={20} />
              <span>40 Rue des Banques, Marrakech 40000, Maroc</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <MdOutlineMail size={18} />
              <span>reservations@lesalamamarrakech.com</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FaPhone size={18} />
              <span>+212 675-480018</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start justify-center">
            <span className="!text-2xl  font-semibold mb-3  capitalize">
              {t("footer.social_media")}
            </span>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="https://www.instagram.com/lesalamamarrakech/"
                target="_blank"
              >
                <BsInstagram size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/lesalamamarrakech/"
                target="_blank"
              >
                <BsFacebook size={18} />
              </Link>
              <Link
                href="https://www.pinterest.com/lesalamamarrakech/"
                target="_blank"
              >
                <BsPinterest size={18} />
              </Link>
              <Link
                href="https://www.tripadvisor.fr/Restaurant_Review-g293734-d2446537-Reviews-Le_Salama_Moroccan_Soul_Food-Marrakech_Marrakech_Safi.html"
                target="_blank"
              >
                <FaTripadvisor size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] border-t border-[#ffffff8c] py-3 text-white flex justify-center items-center">
          © Le Salama 2024 / {t("footer.copyright")}
        </div>
      </>
    )
  );
};

export default Footer;
