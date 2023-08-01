"use client";
import { ConcessionType } from "@/types/concession";
import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AppHelper } from "@/utils/helpers";

export interface IConcessionsProps {
  data: ConcessionType[];
}

const ListMenu = [
  { id: 1, title: "Combo", imgs: require("@/assets/burger.png") },
  { id: 2, title: "Bắp", imgs: require("@/assets/cashew.png") },
  { id: 3, title: "Nước", imgs: require("@/assets/coke.png") },
  { id: 4, title: "Snacker", imgs: require("@/assets/fast-food.png") },
];

export default function Concessions(props: IConcessionsProps) {
  const { data } = props;
  const [selectedMenu, setSelectedMenu] = React.useState(1);
  const [titleSelected, setTitleSelected] = React.useState(ListMenu[0].title);

  const handleMenu = (menu: any) => {
    setSelectedMenu(menu?.id);
    setTitleSelected(menu?.title);
  };

  console.log(data, "data");
  return (
    <div className="flex flex-col mt-8 container mx-auto">
      <nav className="menu mx-20 m-10">
        <ul className="grid grid-cols-2 auto-cols-min gap-6 w-[300px]">
          {ListMenu.map((menu) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={menu.id}
              className={`flex relative items-center justify-center text-center rounded-lg w-32 h-32 cursor-pointer  ${
                selectedMenu === menu.id
                  ? "text-white"
                  : "bg-secondary-100 text-black"
              }`}
              onClick={() => handleMenu(menu)}
            >
              <p>
                <Image
                  src={menu.imgs}
                  width={40}
                  height={40}
                  alt={menu.title}
                  className="inline"
                />
                <span className="block">{menu.title}</span>
              </p>
              {menu.id === selectedMenu && (
                <motion.div className="underline" layoutId="underline" />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="products mx-20 m-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={titleSelected ? titleSelected : ""}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="mb-10 text-xl font-bold not-italic">
              {titleSelected && titleSelected}
            </h3>
            {data && data?.length > 0 && (
              <ul className="grid grid-cols-3 auto-cols-min gap-8 w-[400px]">
                {data.map((item) => (
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    key={item.id}
                    className={`flex relative  items-center justify-center text-center rounded-lg w-32 h-32 cursor-pointer bg-secondary-100`}
                  >
                    <p>
                      <Image
                        src={item.imageUrl}
                        width={40}
                        height={40}
                        alt={item.name}
                        className="inline"
                      />
                      <span className="block">{item.name}</span>
                      <span className="block">
                        {AppHelper.fomartCurrencyVND(item.price)}
                      </span>
                    </p>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
        <h3>{}</h3>
      </main>
    </div>
  );
}
