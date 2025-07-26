"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";

const FirstPage = () => {
  const [hovered, setHovered] = useState(null);

  const columns = [
    {
      id: 1,
      title: "Carte",
      imageSrc: "/assets/images/salama_24.jpg",
      videoSrc: "/assets/videos/salamavid1.mp4",
      href: "/menu",
      className: "order-2 md:order-1",
    },
    {
      id: 2,
      title: "Restaurant - Skybar",
      imageSrc: "/assets/images/salama_12.jpg",
      videoSrc: "/assets/videos/salamavid2.mp4",
      href: "/home",
      className: "order-1 md:order-2",
    },
    {
      id: 3,
      title: "Ambiance",
      imageSrc: "/assets/images/salama_13.jpg",
      videoSrc: "/assets/videos/salamavid3.mp4",
      href: "/events",
      className: "order-3",
    },
  ];

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="relative w-full h-screen md:h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="absolute lg:top-5 top-0 z-20 w-full h-[10vh] bg-transparent flex justify-between items-center px-5 gap-3">
        <div>
          <Link
            href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
            className="flex justify-center items-center space-x-2 w-fit border border-primary_1 py-2 px-2 md:py-2 md:px-4 rounded-md text-primary_1 hover:bg-primary_1 hover:text-primary font-semibold text-xs md:text-base"
          >
            <FaRegCalendarCheck />
            <span>Reservation</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/assets/images/logo-salama-white.png"
              alt="Logo"
              width={160}
              height={160}
              className="mr-2 w-32 md:w-48"
            />
          </Link>
        </div>
        <div className="lg:flex space-x-3 md:space-x-6 text-primary_1 hidden">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram className="w-5 h-5 lg:w-7 lg:h-7 md:w-full md:h-full" />
          </Link>
          <Link href="http://wa.me/212675480018" target="_blank">
            <BsWhatsapp className="w-5 h-5 lg:w-7 lg:h-7 md:w-full md:h-full" />
          </Link>
        </div>
      </div>
      {columns.map((col) => (
        <Link
          key={col.id}
          href={col.href}
          onMouseEnter={() => handleMouseEnter(col.id)}
          onMouseLeave={handleMouseLeave}
          className={`w-full h-full relative bg-slate-700 overflow-hidden transition-all duration-500 ease-in-out flex-1 ${
            col.className
          } ${
            hovered === col.id
              ? "flex-1 md:flex-[9]"
              : hovered !== null
              ? "flex-[1]"
              : "flex-1"
          }`}
        >
          {/* Image Background with Overlay */}
          <img
            src={col.imageSrc}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 hidden md:block ${
              hovered === col.id ? "opacity-0" : "opacity-100"
            }`}
            alt="Rooftop"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 text-white text-xl md:text-4xl uppercase`}
          >
            <h1>{col.title}</h1>
          </div>

          <div
            className={`absolute bottom-5 flex items-center justify-center w-full z-10`}
          >
            <img
              src="/assets/images/pointer-white.png"
              className="w-9 h-9 md:w-14 md:h-14 "
              alt="pointer hand"
            />
          </div>

          <video
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500  ${
              hovered === col.id ? "opacity-100" : "opacity-100 md:opacity-0"
            }`}
            src={col.videoSrc}
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </Link>
      ))}
    </div>
  );
};

export default FirstPage;
