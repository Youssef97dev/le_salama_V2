import { RiArrowDropDownLine } from "react-icons/ri";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          //src="https://res.cloudinary.com/dz7wroord/video/upload/v1724499876/zhukhjwdelkkkftxpil5.mp4"
          src="/assets/videos/hero-home.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dz7wroord/video/upload/v1728119036/lesalama_edede3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[#000] h-screen mix-blend-multiply opacity-20"></div>
      {/* Hero Content */}
      <div className="absolute bottom-10 w-full flex justify-center items-center animate-bounce text-primary_1 ">
        <Link href="#about" className="border border-white rounded-full">
          <RiArrowDropDownLine size={40} />
        </Link>
      </div>
      {/*<div className="absolute bottom-10 right-10 text-primary_1 p-5 bg-primary rounded-full hidden md:block">
        <Link
          href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
          target="_blank"
          className="flex flex-col gap-3 justify-center items-center"
        >
          <Image src="/assets/images/hero-icon.png" height={43} width={43} />
          <span className="font-medium">Reservation</span>
        </Link>
  </div>*/}
    </div>
  );
};

export default Hero;
