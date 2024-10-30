"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { ISelectorItem, ISelectorProps, Theme } from "@/components";

export const Selector: FC<ISelectorProps> = ({
  theme,
  selectorsItems,
  activeItem,
}) => {
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ISelectorItem>(activeItem);

  const handleSelect = (item: ISelectorItem) => {
    setSelectedItem(item);
    setIsOpenSelector(false);
  };

  return (
    <div
      className={`${theme === Theme.dark ? "bg-main_gray" : "bg-white"} cursor-pointer ${isOpenSelector ? "rounded-t-[1.25rem]" : "rounded-[1.25rem]"} max-w-[368px] relative w-full`}
    >
      <div
        onClick={() => setIsOpenSelector(!isOpenSelector)}
        className={
          "flex items-center justify-center gap-2.5 px-5 py-4 w-full h-[60px]"
        }
      >
        <p className={"text-lg whitespace-nowrap select-none text-black"}>
          Семестр: {selectedItem.title}
        </p>

        <Image
          className={`${isOpenSelector ? "rotate-180" : ""}`}
          src="/arrow_down.svg"
          alt="Иконка стрелки вниз"
          width={23}
          height={17}
        />
      </div>

      <div
        className={`absolute top-[60px] z-20 left-0 right-0 bg-main_gray rounded-b-[1.25rem] shadow-[0px_25px_25px_#929292] overflow-hidden ${isOpenSelector ? "max-h-56" : "max-h-0"}`}
      >
        <div
          className={"flex flex-col w-full max-h-52 h-full overflow-y-scroll"}
        >
          {selectorsItems.map((item) => (
            <div
              key={item.id}
              className={
                "flex items-center justify-center px-5 py-2 bg-main_gray w-full hover:bg-medium_gray"
              }
              onClick={() => handleSelect(item)}
            >
              <p
                className={
                  "text-lg whitespace-nowrap overflow-hidden text-ellipsis text-black"
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
