"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { ISelectorItem, ISelectorProps } from "@/components";

export const Selector: FC<ISelectorProps> = ({
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
      className={`bg-white cursor-pointer ${isOpenSelector ? "rounded-t-[1.25rem]" : "rounded-[1.25rem]"} border border-medium_gray max-w-[368px] relative w-full`}
    >
      <div
        onClick={() => setIsOpenSelector(!isOpenSelector)}
        className={
          "flex items-center justify-center gap-2.5 px-7 py-3 w-full h-[45px]"
        }
      >
        <p
          className={
            "text-[20px] leading-5 whitespace-nowrap select-none text-black"
          }
        >
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
        className={`absolute top-[45px] z-20 left-0 right-0 border-medium_gray rounded-b-[1.25rem] shadow-[0px_25px_25px_#929292] overflow-hidden ${isOpenSelector ? "max-h-56 border" : "max-h-0"}`}
      >
        <div
          className={"flex flex-col w-full max-h-52 h-full overflow-y-scroll"}
        >
          {selectorsItems.map((item) => (
            <div
              key={item.id}
              className={
                "flex items-center justify-center px-5 py-2 bg-white w-full hover:bg-medium_gray"
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
