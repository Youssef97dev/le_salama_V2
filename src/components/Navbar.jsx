"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { TbMenu2 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-primary_tr ${
        visible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between md:justify-evenly items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/assets/images/logo-salama-white.png"
              alt="Logo"
              width={150}
              height={150}
              className="mr-2"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6  text-base font-medium text-primary_1">
          <Link href="/">Accueil</Link>
          <Link href="#">Menu</Link>
          <Link href="#">À propos de nous</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="hidden md:flex space-x-6 text-primary_1">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsPinterest />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none border"
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
          <Link href="#" className="flex items-center space-x-2">
            <MdRestaurantMenu />
            <span>Menu</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2">
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

export default Navbar;
