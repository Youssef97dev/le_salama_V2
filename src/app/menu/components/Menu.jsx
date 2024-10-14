"use client";

import { useEffect, useState } from "react";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react";
import Gallery from "./Gallery";

import { GrRestaurant } from "react-icons/gr";
import { BiDrink } from "react-icons/bi";
import { PiWineFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { t } = useTranslation();

  const menuItemsMain = [
    { name: t("page_menu.main.dish_1"), description: "", price: "90 MAD" },
    { name: t("page_menu.main.dish_2"), description: "", price: "150 MAD" },
    { name: t("page_menu.main.dish_3"), description: "", price: "185 MAD" },
    {
      name: t("page_menu.main.dish_4"),
      description: t("page_menu.main.desciption_4"),
      price: "150 MAD",
    },
    {
      name: t("page_menu.main.dish_5"),
      description: t("page_menu.main.desciption_5"),
      price: "190 MAD",
    },
    {
      name: t("page_menu.main.dish_6"),
      description: t("page_menu.main.desciption_6"),
      price: "230 MAD",
    },
    { name: t("page_menu.main.dish_7"), description: "", price: "120 MAD" },
    {
      name: t("page_menu.main.dish_8"),
      description: t("page_menu.main.desciption_8"),
      price: "190 MAD",
    },
    {
      name: t("page_menu.main.dish_9"),
      description: t("page_menu.main.desciption_9"),
      price: "270 MAD",
    },
    // Add more menu items here
  ];

  const menuItemsDrinks = [
    {
      name: t("page_menu.drinks.drink_1"),
      description: t("page_menu.drinks.desciption_1"),
      price: "50 MAD",
    },
    {
      name: t("page_menu.drinks.drink_2"),
      description: t("page_menu.drinks.desciption_2"),
      price: "60 MAD",
    },
    {
      name: t("page_menu.drinks.drink_3"),
      description: t("page_menu.drinks.desciption_3"),
      price: "60 MAD",
    },
    {
      name: t("page_menu.drinks.drink_4"),
      description: t("page_menu.drinks.desciption_4"),
      price: "60 MAD",
    },
    {
      name: t("page_menu.drinks.drink_5"),
      description: t("page_menu.drinks.desciption_5"),
      price: "60 MAD",
    },
    {
      name: t("page_menu.drinks.drink_6"),
      description: t("page_menu.drinks.desciption_6"),
      price: "65 MAD",
    },
    { name: t("page_menu.drinks.drink_7"), description: "", price: "70 MAD" },
    {
      name: t("page_menu.drinks.drink_8"),
      description: "",
      price: "70 MAD",
    },
    {
      name: t("page_menu.drinks.drink_9"),
      description: "",
      price: "70 MAD",
    },
    // Add more menu items here
  ];

  const menuItemsWine = [
    {
      name: t("page_menu.wine.wine_1"),
      description: t("page_menu.wine.desciption_1"),
      price: "160 MAD",
    },
    {
      name: t("page_menu.wine.wine_2"),
      description: t("page_menu.wine.desciption_2"),
      price: "160 MAD",
    },
    {
      name: t("page_menu.wine.wine_3"),
      description: t("page_menu.wine.desciption_3"),
      price: "400 MAD",
    },
    {
      name: t("page_menu.wine.wine_4"),
      description: t("page_menu.wine.desciption_4"),
      price: "400 MAD",
    },
    {
      name: t("page_menu.wine.wine_5"),
      description: t("page_menu.wine.desciption_5"),
      price: "400 MAD",
    },
    { name: t("page_menu.wine.wine_6"), description: "", price: "1 200 MAD" },
    // Add more menu items here
  ];

  return (
    isClient && (
      <div
        id="main"
        className="relative my-3 mx-3 md:mx-16 xl:mx-60 flex flex-col justify-center items-center"
      >
        <TabGroup>
          <TabList className="mt-16 mb-5 flex flex-wrap justify-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "border-b !border-primary_7 text-primary_7 !outline-none"
                      : ""
                  } w-full md:w-auto flex items-center text-sm md:text-base justify-center gap-2 border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary_7 hover:text-primary_7`}
                >
                  <GrRestaurant size={18} />
                  <span className="font-semibold">
                    {t("page_menu.main.title")}
                  </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "border-b !border-primary_7 text-primary_7 !outline-none"
                      : ""
                  } w-full md:w-auto flex justify-center items-center text-sm md:text-base gap-2 border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary_7 hover:text-primary_7`}
                >
                  <BiDrink size={18} />
                  <span className="font-semibold">
                    {t("page_menu.drinks.title")}
                  </span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? "border-b !border-primary_7 text-primary_7 !outline-none"
                      : ""
                  } w-full md:w-auto flex justify-center items-center text-sm md:text-base gap-2 border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary_7 hover:text-primary_7`}
                >
                  <PiWineFill size={18} />
                  <span className="font-semibold">
                    {t("page_menu.wine.title")}
                  </span>
                </button>
              )}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="active flex flex-wrap items-start pt-8">
                {menuItemsMain.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-3 "
                  >
                    <div className="flex justify-between items-center font-medium md:font-semibold mb-4">
                      <span className="text-lg md:text-xl italic text-primary ">
                        {item.name}
                      </span>
                      {/* Dotted Line */}
                      <div className="flex-grow mx-4 p-[1px]  border-t border-b border-dashed border-primary_4"></div>
                      <span className="text-black italic text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-stone-700 font-medium mb-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-wrap items-start pt-8">
                {menuItemsDrinks.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-3"
                  >
                    <div className="flex justify-between items-center font-medium md:font-semibold mb-4">
                      <span className="text-lg md:text-xl italic text-primary ">
                        {item.name}
                      </span>
                      {/* Dotted Line */}
                      <div className="flex-grow mx-4 p-[1px]  border-t border-b border-dashed border-primary_4"></div>
                      <span className="text-black italic text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-stone-700 font-medium mb-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-wrap items-start pt-8">
                {menuItemsWine.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-3"
                  >
                    <div className="flex justify-between items-center font-medium md:font-semibold mb-4">
                      <span className="text-lg md:text-xl italic text-primary ">
                        {item.name}
                      </span>
                      {/* Dotted Line */}
                      <div className="flex-grow mx-4 p-[1px]  border-t border-b border-dashed border-primary_4"></div>
                      <span className="text-black italic text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-stone-700 font-medium mb-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <Gallery />
        <div className="fixed bottom-4 right-6 cursor-pointer  hover:scale-105 transition-all ease-in-out animate-bounce">
          <Link href="https://www.lesalamamarrakech.com/menu/" target="_blank">
            <Image
              src="/assets/images/iconmenu.png"
              height={70}
              width={70}
              className="w-14 h-14 md:h-20 md:w-20"
            />
          </Link>
        </div>
      </div>
    )
  );
};

export default Menu;
