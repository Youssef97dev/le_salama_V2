import { RiArrowDropDownLine } from "react-icons/ri";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen w-full ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dz7wroord/video/upload/v1724499876/zhukhjwdelkkkftxpil5.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Hero Content */}
      <div className="absolute bottom-10 left-1/2 animate-bounce text-primary_1 border border-white rounded-full">
        <Link href="#">
          <RiArrowDropDownLine size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
