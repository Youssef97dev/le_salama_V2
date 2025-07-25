"use client";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";

const reviews = [
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
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-fit relative bg-fixed bg-cover bg-center flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-9 py-2 px-3 lg:px-10 lg:py-5  xl:px-28"
      style={{
        backgroundImage: "url('/assets/images/lesalama_6.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#000000] h-full opacity-70"></div>
      <div
        className="z-10  w-full h-full"
        //data-aos="fade-up"
        //data-aos-duration="1000"
        //data-aos-easing="linear"
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-ex2",
            prevEl: ".swiper-button-prev-ex2",
          }}
          autoplay={{ delay: 2000 }}
          className="swiper max-w-xl mx-auto mb-5"
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
                      <p className="italic text-white">{item.comments}</p>
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
      {/*<div
        className="z-10 text-white w-full h-full flex justify-center rounded-sm "
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className="w-full md:w-3/5 lg:w-4/5 xl:w-3/5  h-full bg-[#000000] flex flex-col justify-start items-center gap-4 px-5 py-9 rounded-sm text-center">
          <span className=" text-4xl">{t("section_review.content_1")}</span>
          <div className="border-b border-[#ffffff34] w-5/6"></div>
          <span className="text-xl mb-5">{t("section_review.content_2")}</span>
          <p className="text-sm font-extralight mb-5">
            {t("section_review.content_3")}
            <br />
          </p>
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            className="font-semibold text-lg bg-transparent hover:bg-primary border border-primary px-8 py-2 "
          >
            {t("menu.reservation")}
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
      </div>*/}
    </div>
  );
};

export default Reserve;
