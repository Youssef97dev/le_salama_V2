import Image from "next/image";

const RoofTop = () => {
  return (
    <div className=" w-full h-[70vh] flex flex-col md:flex-row items-center align-middle justify-center gap-3 bg-white px-10">
      <div className="w-full " data-aos="fade-right">
        <Image
          src="/assets/images/lesalama_9.jpg"
          alt="le salama 9"
          width={1500}
          height={1500}
          className="rounded-lg hover:scale-105 transition-all ease-linear"
        />
      </div>
      <div className="w-full flex flex-col gap-2 p-3" data-aos="fade-left">
        <div className="text-4xl font-semibold pb-4">Le Salama Rooftop</div>
        <p className="font-medium text-sm leading-7 text-gray-500 pb-3">
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
    </div>
  );
};

export default RoofTop;
