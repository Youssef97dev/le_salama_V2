import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    stars: 5,
    comments:
      "had the pleasure of dining at this charming restaurant as its my 2nd time and it was truly a delightful evening. The ambiance was cozy and inviting, setting the perfect tone for a memorable dining experience. The service was exceptional, with attentive staff who made sure every detail was taken care of, adding to the overall enjoyment of the evening. What truly stole the show was the amazing performance that accompanied our meal. The entertainment was top-notch, adding an extra layer of excitement and fun to the dining experience. I highly recommend this restaurant for anyone looking for a fantastic night out with great food, impeccable service, and unforgettable entertainment.",
    name: "Toseehamza",
    platform: "Google",
  },
  {
    stars: 5,
    comments:
      "Lovely, quiet, second floor patio to enjoy a beer and people watch during happy hour. Amazingly friendly and exceptionally hardworking staff from street host to sweetest young man who was serving the entire floor. Close enough to square and far enough to relax. Belly dancing shows every night at 9pm! I came back a second time and the same young man kindly greeted myself and other guests, offering to take photos and even presented sharing dishes.",
    name: "Allie H",
    platform: "Google",
  },
  {
    stars: 4,
    comments:
      "Lovely atmosphere in a nice terrace in the city center of Marrakesh, good typical Moroccan food. Special thanks to Mustapha",
    name: "Francesca G",
    platform: "Tripadvisor",
  },
  {
    stars: 4,
    comments:
      "A great restaurant to end an eventfull evening at Djemma el-Fna . Great food, atmosphere and excelent service by our waiter Mr. Saydou.",
    name: "Jon A",
    platform: "Tripadvisor",
  },
  {
    stars: 5,
    comments:
      "The dinner here was incredible, food, staff and ambient. Special thanks to Sabir, that made us feel very welcome and cared for 🤩",
    name: "Nina C",
    platform: "Tripadvisor",
  },
];

const Reserve = () => {
  return (
    <div
      className="w-full h-[75vh] relative bg-fixed bg-cover bg-center flex flex-col lg:flex-row items-start justify-between gap-9 py-2 px-3 lg:px-10 lg:py-16  xl:px-28"
      style={{ backgroundImage: "url('/assets/images/lesalama_6.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#000000] h-full opacity-70"></div>
      <div className="z-10  w-full h-full">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-ex2",
            prevEl: ".swiper-button-prev-ex2",
          }}
          autoplay={{ delay: 2000 }}
          className="swiper max-w-3xl mx-auto mb-5"
          id="slider2"
          key={"true"}
        >
          <div className="swiper-wrapper">
            {reviews.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex flex-col justify-center items-start gap-8">
                    <div className="flex flex-col gap-3">
                      <Rating
                        SVGstyle={{ display: "inline" }}
                        initialValue={item.stars}
                        size={18}
                      />
                      <p className="italic text-white text-sm">
                        {item.comments}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-primary_7">{item.platform}</span>
                      <span className="text-white">{item.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className="z-10 text-white w-full h-full flex justify-center rounded-sm">
        <div className="w-3/5 h-full bg-[#1b1b1b] flex flex-col justify-start items-center gap-4 px-5 py-9 rounded-sm text-center">
          <span className=" text-4xl">{`Chef's Special Menu`}</span>
          <div className="border-b border-[#ffffff34] w-5/6"></div>
          <span className="text-xl mb-5">Signature Dishes</span>
          <p className="text-sm font-extralight mb-5">
            Experience a delightful blend of traditional Moroccan flavors with
            modern culinary techniques, crafted by our renowned chef.
            <br />
          </p>
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            className="font-semibold text-lg bg-transparent hover:bg-primary border border-primary px-8 py-2 "
          >
            Reservation
          </Link>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">
              Contact <span className="text-primary_4">(+212)675-480-018</span>
            </span>
            <div className="flex items-center justify-center gap-1">
              <FaMapMarkerAlt color="#cdb29e" />
              <span>40 Rue des Banques, Marrakech 40000, Maroc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
