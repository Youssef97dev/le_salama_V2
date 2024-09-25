import Image from "next/image";

const RoofTop = () => {
  return (
    <div className=" w-full h-fit flex flex-col-reverse lg:flex-row items-center align-middle justify-center gap-14 bg-white py-4 px-3 lg:px-10 lg:py-6 xl:px-28 xl:py-10 ">
      <div className="w-full" data-aos="zoom-in">
        <video
          className="w-full h-[600px] object-cover hover:scale-105 transition-all ease-linear"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/rooftop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="w-full flex flex-col gap-2 text-center"
        data-aos="zoom-in"
      >
        <div className="text-5xl font-thin pb-4 text-primary">Rooftop</div>
        <p className="font-medium text-base  text-gray-500 pb-3">
          Elevate your dining experience at Le Salama, where our stunning
          rooftop offers breathtaking views of Marrakech and the majestic Atlas
          Mountains. Nestled in a vibrant urban garden, the rooftop features
          cozy seating areas designed for relaxation and enjoyment.
          <br />
          As the sun sets, immerse yourself in a captivating ambiance enhanced
          by our enchanting belly dance shows every evening, adding a touch of
          magic to your night.
          <br />
          At Le Salama Rooftop, indulge in a culinary journey that celebrates
          the rich flavors of Moroccan and Mediterranean cuisine.
          <br />
          {`Whether you're enjoying a refreshing cocktail or savoring a sumptuous
          dinner under the stars, our carefully crafted menu and inviting
          atmosphere create an unforgettable backdrop for your special moments.`}
          <br />
          Experience the charm of Marrakech from the rooftop of Le Salama, where
          every visit promises to be memorable.
        </p>
      </div>
      <div className="w-full " data-aos="zoom-in">
        <Image
          src="/assets/images/salama_14.jpg"
          alt="le salama 9"
          width={1200}
          height={1500}
          className="w-full h-[600px] hover:scale-105  transition-all ease-linear"
        />
      </div>
    </div>
  );
};

export default RoofTop;
