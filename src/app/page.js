"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";

export default function HomePage() {
  const [hovered, setHovered] = useState(null);

  const columns = [
    {
      id: 1,
      title: "La Carte",
      imageSrc: "/assets/images/salama_24.jpg",
      videoSrc: "/assets/videos/salamavid1.mp4",
      href: "/menu",
    },
    {
      id: 2,
      title: "Le Salama",
      imageSrc: "/assets/images/salama_12.jpg",
      videoSrc: "/assets/videos/salamavid2.mp4",
      href: "/home",
    },
    {
      id: 3,
      title: "L'ambiance",
      imageSrc: "/assets/images/salama_13.jpg",
      videoSrc: "/assets/videos/salamavid3.mp4",
      href: "/events",
    },
  ];

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="w-full h-[250vh] md:h-screen flex flex-col justify-start items-center">
      <div className="w-full h-[10vh] bg-primary flex justify-between items-center px-5 gap-3">
        <div>
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            className="flex justify-center items-center space-x-2 w-fit border border-primary_1 py-1 px-2 md:py-2 md:px-4 rounded-md text-primary_1 hover:bg-primary_1 hover:text-primary font-semibold text-xs md:text-base"
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
        <div className="flex space-x-3 md:space-x-6 text-primary_1">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram className="w-3 h-3 md:w-full md:h-full" />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsFacebook className="w-3 h-3 md:w-full md:h-full" />
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsPinterest className="w-3 h-3 md:w-full md:h-full" />
          </Link>
          <Link
            href="https://www.tripadvisor.fr/Restaurant_Review-g293734-d2446537-Reviews-Le_Salama_Moroccan_Soul_Food-Marrakech_Marrakech_Safi.html"
            target="_blank"
          >
            <FaTripadvisor className="w-3 h-3 md:w-full md:h-full" />
          </Link>
        </div>
      </div>
      <div className="w-full h-[240vh] md:h-[90vh] bg-black flex flex-col md:flex-row justify-center items-center">
        {columns.map((col) => (
          <Link
            key={col.id}
            href={col.href}
            target="_blank"
            onMouseEnter={() => handleMouseEnter(col.id)}
            onMouseLeave={handleMouseLeave}
            className={`w-full h-full relative bg-slate-700 overflow-hidden transition-all duration-500 ease-in-out flex-1 ${
              hovered === col.id
                ? "flex-[9]"
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
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 text-white text-2xl md:text-4xl uppercase`}
            >
              <h1>{col.title}</h1>
            </div>

            <div
              className={`absolute bottom-5 flex items-center justify-center w-full z-10`}
            >
              <img
                src="/assets/images/pointer.png"
                className="w-8 h-8 md:w-14 md:h-14 "
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
