import { useState } from "react";

const data = [
  {
    id: 0,
    title: "Bellydance Show every evening at 10:00 PM",
    imageUrl: "/assets/images/salama_11.jpg",
    text: "At Le Salama in Marrakech, each evening comes alive with the captivating rhythms and vibrant energy of a traditional belly dance show. Guests are treated to an unforgettable cultural experience as skilled performers showcase mesmerizing dance moves against the backdrop of our stunning rooftop setting.",
  },
  {
    id: 1,
    title: "Enjoy our Happy Hour Specials",
    imageUrl: "/assets/images/salama_13.jpg",
    text: "Join us at Le Salama for our Happy Hour specials, where you can enjoy refreshing cocktails and drinks at discounted prices. Unwind in our cozy atmosphere as you sip on your favorite beverages and soak in the vibrant energy of Marrakech.",
  },
  {
    id: 2,
    title: "Experience the magic of breathtaking sunset views",
    imageUrl: "/assets/images/salama_12.jpg",
    text: "At Le Salama, you can experience the magic of breathtaking sunset views that paint the Marrakech skyline in stunning hues of gold and crimson. As the sun sets behind the city, our rooftop offers a serene and picturesque backdrop, perfect for a romantic evening or a relaxing dinner.",
  },
];

const Events = () => {
  return (
    <div className="relative h-fit  flex flex-col space-y-5 items-center py-10 px-16">
      {/* Parallax Background 
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: 'url("/assets/images/lesalama_8.jpg")' }}
      ></div>*/}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000] h-full lg:h-[65%] z-[-1]"></div>

      {/* Content */}
      <span className="italic text-lg text-primary_5">Discover our</span>
      <span className="text-5xl text-white">Events</span>
      <div className="flex flex-col lg:flex-row gap-14">
        {data.map((item) => (
          <div key={item.id} className="container_card">
            <div className="card ">
              <div className="front">
                <div className="absolute inset-0 bg-black opacity-20 "></div>
                <div className="absolute bottom-0 left-0 w-full h-1/4 text-white flex justify-center items-center px-5">
                  <span className="text-2xl font-medium text-center">
                    {item.title}
                  </span>
                </div>

                <img src={item.imageUrl} className="w-full h-full" />
              </div>
              <div className="back">
                <div className="absolute top-0 left-0 w-full  text-black flex flex-col justify-center items-center px-5 py-8 gap-5">
                  <span className="text-2xl font-semibold text-center">
                    {item.title}
                  </span>
                  <p className="font-medium text-base leading-8 text-center text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
