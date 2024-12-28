"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { IMenuItem } from "@/components/Sidebar/model";

export const MenuItem: FC<IMenuItem> = ({ link, name }) => {
  const pathname = usePathname();

  const isActive =
    link === "/"
      ? pathname === link
      : pathname.startsWith(link) && pathname !== "/";

  return (
    <Link
      href={link}
      className={`flex items-center gap-[16px] flex-nowrap text-black ${!isActive ? "pl-[31px]" : ""} min-h-[29px] w-full`}
    >
      <div
        className={`${isActive ? "block" : "hidden"} bg-main_purple min-w-[15px] max-w-[15px] min-h-[15px] max-h-[15px] rounded-full`}
      ></div>

      <p
        className={`text-2xl text-left font-bold ${isActive ? "text-main_purple" : "text-main_gray"}`}
      >
        {name}
      </p>
    </Link>
  );
};
