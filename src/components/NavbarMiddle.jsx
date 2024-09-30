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
import { TbMenu2 } from "react-icons/tb";
import { FaHome, FaTripadvisor } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";

const NavbarMiddle = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if scrolling up or down
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false); // Hide navbar on scroll down
      } else {
        setVisible(true); // Show navbar on scroll up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
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
            <Link href="/" className="relative group">
              Accueil
              {isActive("/") ? (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
              ) : (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              )}
            </Link>
            <Link href="/menu" className="relative group">
              Menu
              {isActive("/menu") ? (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
              ) : (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              )}
            </Link>

            <Link href="/about" className="relative group">
              À propos de nous{" "}
              {isActive("/about") ? (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
              ) : (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              )}
            </Link>
            <Link href="#" className="relative group">
              Gallery{" "}
              {isActive("/gallery") ? (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
              ) : (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              )}
            </Link>
            <Link href="#" className="relative group">
              Contact{" "}
              {isActive("/contact") ? (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-100 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-100"></span>
              ) : (
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-primary_4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary_4 after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"></span>
              )}
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
        </div>
        <div className="md:hidden">
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
        } md:hidden bg-primary_1 absolute top-24 w-full shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-5 space-y-6 uppercase text-sm font-medium text-primary_9">
          <Link href="/" className="flex items-center space-x-2">
            <FaHome />
            <span>Accueil</span>
          </Link>
          <Link href="/menu" className="flex items-center space-x-2">
            <MdRestaurantMenu />
            <span>Menu</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2">
            <IoBookOutline />
            <span>À propos de nous</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2">
            <GrGallery />
            <span>Gallery</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2">
            <RiContactsBook3Line />
            <span>Contact</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 w-fit border border-primary_8 py-2 px-4 rounded-md"
          >
            <FaRegCalendarCheck />
            <span>Reservation</span>
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
        </div>
      </div>
    </nav>
  );
};

export default NavbarMiddle;
