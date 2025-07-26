"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { TbMenu2 } from "react-icons/tb";
import { FaHome, FaTripadvisor } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const NavbarMiddle = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18next.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const changeLanguage = () => {
    localStorage.removeItem("lang");
    if (i18next.language === "fr") {
      i18next.changeLanguage("en");
      localStorage.setItem("lang", "en");
      setLang("en");
    } else {
      i18next.changeLanguage("fr");
      localStorage.setItem("lang", "fr");
      setLang("fr");
    }
    console.log(i18next.language);
  };

  useEffect(() => {
    setIsClient(true);
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    isClient && (
      <nav className={`absolute top-0 w-full z-50 `}>
        <div className="container mx-auto px-4 py-4 flex flex-col justify-between md:justify-evenly items-center">
          <div className="hidden md:flex mb-5">
            <Link href="/">
              <Image
                src="/assets/images/logo-salama-humberger-brown.png"
                alt="Logo"
                width={150}
                height={150}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:flex w-full justify-center items-center space-x-9">
            <div className="hidden md:flex space-x-11 uppercase  text-sm font-bold text-primary_1 justify-center">
              <Link
                href="/"
                className="relative group flex items-center space-x-2"
              >
                <FaHome size={18} />
                <span>{t("menu.home")}</span>
                {isActive("/") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                href="/menu"
                className="relative group flex items-center space-x-2"
              >
                <MdRestaurantMenu size={18} />
                <span>{t("menu.cartemenu")}</span>
                {isActive("/menu") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                href="/about"
                className="relative group flex items-center space-x-2"
              >
                <IoBookOutline size={18} />
                <span>{t("menu.aboutus")}</span>
                {isActive("/about") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                href="/gallery"
                className="relative group flex items-center space-x-2"
              >
                <GrGallery size={18} />
                <span>{t("menu.gallery")}</span>
                {isActive("/gallery") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                href="/contact"
                className="relative group flex items-center space-x-2"
              >
                <RiContactsBook3Line size={18} />
                <span>{t("menu.contact")}</span>
                {isActive("/contact") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                href="/events"
                className="relative group flex items-center space-x-2"
              >
                <LuPartyPopper />
                <span>{t("menu.events")}</span>
                {isActive("/events") ? (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
                ) : (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
                )}
              </Link>
              <Link
                target="_blank"
                href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
                className="relative group flex items-center space-x-2"
              >
                <FaRegCalendarCheck size={18} />
                <span>{t("menu.reservation")}</span>
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 text-primary_1">
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
            <div
              className="relative inline-block"
              onMouseLeave={() => setIsDropdownOpen(false)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
                {lang === "en" ? (
                  <img src="/assets/images/english.png" className="w-7 h-7" />
                ) : (
                  <img src="/assets/images/france.png" className="w-7 h-7" />
                )}
                <IoMdArrowDropdown size={18} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-8 bg-white mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                  <li
                    className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    <img src="/assets/images/english.png" className="w-7 h-7" />
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("fr")}
                  >
                    <img src="/assets/images/france.png" className="w-7 h-7" />
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="md:hidden flex justify-end items-center w-full">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <TbMenu2 size={25} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? " block" : " hidden"
          } md:hidden bg-primary_1 absolute top-14 w-full shadow-lg transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-5 space-y-6 uppercase text-sm font-medium text-primary_9">
            <Link href="/" className="flex items-center space-x-2">
              <FaHome />
              <span>{t("menu.home")}</span>
            </Link>
            <Link href="/menu" className="flex items-center space-x-2">
              <MdRestaurantMenu />
              <span>{t("menu.cartemenu")}</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2">
              <IoBookOutline />
              <span>{t("menu.aboutus")}</span>
            </Link>
            <Link href="/gallery" className="flex items-center space-x-2">
              <GrGallery />
              <span>{t("menu.gallery")}</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-2">
              <RiContactsBook3Line />
              <span>{t("menu.contact")}</span>
            </Link>
            <Link href="/events" className="flex items-center space-x-2">
              <LuPartyPopper />
              <span>{t("menu.events")}</span>
            </Link>
            <Link
              href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
              className="flex items-center space-x-2 w-fit border border-primary_8 py-2 px-4 rounded-md"
            >
              <FaRegCalendarCheck />
              <span>{t("menu.reservation")}</span>
            </Link>
            <div className="flex space-x-6 text-primary">
              <Link href="#">
                <BsInstagram />
              </Link>
              <Link href="#">
                <BsFacebook />
              </Link>
              <Link href="#">
                <BsPinterest />
              </Link>
              <Link href="#">
                <BsYoutube />
              </Link>
            </div>
            <div className="flex space-x-6 text-primary">
              <div
                className="py-2 hover:bg-primary_3 rounded-lg cursor-pointer"
                onClick={() => changeLanguage("en")}
              >
                <img src="/assets/images/english.png" className="w-4 h-4" />
              </div>
              <div
                className=" py-2 hover:bg-primary_3 rounded-lg cursor-pointer"
                onClick={() => changeLanguage("fr")}
              >
                <img src="/assets/images/france.png" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  );
};

export default NavbarMiddle;
