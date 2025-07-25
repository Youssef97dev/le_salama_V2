import Image from "next/image";
import Link from "next/link";

const SmallGallery = () => {
  return (
    <div className="container mx-auto px-4 py-3">
      <div className="relative w-full h-[75vh]">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-1000 w-full h-full`}
        >
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1744139679/salama-V2/jijioevym7tnocxelt0y.jpg"
            alt={`Le salama`}
            height={2000}
            width={2000}
            priority
            className="object-cover object-bottom w-full h-full shadow-md "
          />
          <div className="absolute inset-0 z-20 bg-black opacity-35 w-full h-full"></div>
          <div className="absolute top-0 z-30 w-full h-full text-center text-white text-[20px] flex flex-col lg:flex-row justify-center items-center gap-3">
            <Link
              href="https://www.lesalamamarrakech.com/menu/"
              target="_blank"
              className="lg:w-[15%] w-[62%] py-3 px-5 bg-transparent text-white border border-white hover:text-black hover:bg-white transition-all duration-150 ease-in-out"
            >{`Main Menu`}</Link>
            <Link
              href="https://www.lesalamamarrakech.com/menu/drinks/"
              target="_blank"
              className="lg:w-[15%] w-[62%] py-3 px-5 bg-transparent text-white border border-white hover:text-black hover:bg-white transition-all duration-150 ease-in-out"
            >{`Drinks & Wine`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallGallery;
