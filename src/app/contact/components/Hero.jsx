import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Image Background */}
      <Image
        src="/assets/images/salama_20.jpg"
        alt="Logo"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-60"></div>
      {/* Hero Content */}
      <div className="absolute bottom-[45%]   flex w-full justify-center items-center text-primary_1">
        <span className="text-2xl lg:text-5xl italic text-center px-3 font-medium">
          Connect with us, Experience the Magic of Le Salama.
        </span>
      </div>
      <div className="absolute bottom-10 left-1/2 animate-bounce text-primary_1 border border-white rounded-full">
        <Link href="#main">
          <RiArrowDropDownLine size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
