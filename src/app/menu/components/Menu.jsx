import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react";

import { GrRestaurant } from "react-icons/gr";
import { BiDrink } from "react-icons/bi";
import { PiWineFill } from "react-icons/pi";

const menuItemsMain = [
  { name: "Moroccan Soup", description: "", price: "90 MAD" },
  { name: "Moroccan chicken Pie", description: "", price: "150 MAD" },
  { name: "Atlas Lamb skewers", description: "", price: "185 MAD" },
  {
    name: "Greek Salad",
    description: "Tomatos, cucumber, olive oil, oregano, feta, olives, onion",
    price: "150 MAD",
  },
  {
    name: "Beef tagine",
    description: "Beef tagine with plums",
    price: "190 MAD",
  },
  {
    name: "Mixt skewers",
    description: "Chicken, Kefta, Merguez, and Lamb",
    price: "230 MAD",
  },
  { name: "Cheese briouates", description: "", price: "120 MAD" },
  {
    name: "Chicken Tagine",
    description: "Chicken tagine with confit lemon and olives.",
    price: "190 MAD",
  },
  {
    name: "Royal Couscous",
    description: "Couscous with chicken, kefta, Lamb and sausages skewers",
    price: "270 MAD",
  },
  // Add more menu items here
];

const menuItemsDrinks = [
  {
    name: "Wake Up",
    description: "Shot of fresh lemon, honey, ginger",
    price: "50 MAD",
  },
  {
    name: "Super Detox",
    description: "cucumber, celey, lemon, green apple, ginger",
    price: "60 MAD",
  },
  {
    name: "Be Fit",
    description: "orange, ginger, apple, carrot",
    price: "60 MAD",
  },
  {
    name: "Green",
    description: "apple, celery, spinach, lemon",
    price: "60 MAD",
  },
  {
    name: "Purple",
    description: "strawberry, blackberry, beetroot, orange",
    price: "60 MAD",
  },
  {
    name: "Power",
    description: "banana, kiwi, pineapple, mango",
    price: "65 MAD",
  },
  { name: "Pear", description: "", price: "70 MAD" },
  {
    name: "Carrot",
    description: "",
    price: "70 MAD",
  },
  {
    name: "Datte",
    description: "",
    price: "70 MAD",
  },
  // Add more menu items here
];

const menuItemsWine = [
  {
    name: "Jamaa Lafna Negroni",
    description: "Spice infused gin, vermouth, campari",
    price: "160 MAD",
  },
  {
    name: "Lavander Fizz",
    description: "Lavander, cucumber, mint, pepper infused simple syrop, soda",
    price: "160 MAD",
  },
  {
    name: "Red Wine",
    description:
      "red wine, triple sec, seasonnal fruits, orange juice, cinnamon, sugar, lemonnade",
    price: "400 MAD",
  },
  {
    name: "White Wine",
    description:
      "white wine, triple sec, seasonnal fruits, orange juice, cinnamon, sugar, lemonnade",
    price: "400 MAD",
  },
  {
    name: "Prosecco",
    description:
      "prosecco, triple sec, seasonnal fruits, orange juice, cinnamon, sugar, lemonnade",
    price: "400 MAD",
  },
  { name: "Collet Brut", description: "", price: "1 200 MAD" },
  // Add more menu items here
];

const Menu = () => {
  return (
    <div className="mx-3 md:mx-16 xl:mx-60">
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
                <span className="font-semibold">Main</span>
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
                <span className="font-semibold">Drinks</span>
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
                <span className="font-semibold">Wine</span>
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
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-3">
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
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-3">
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
    </div>
  );
};

export default Menu;
