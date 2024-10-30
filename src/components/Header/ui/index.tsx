"use client";

import { usePathname } from "next/navigation";
import { MENU } from "@/constants";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={"bg-main_gray h-10 w-full sm:h-12 md:h-14 lg:h-16 xl:h-[72px]"}
    >
      <div className={"flex items-center justify-center h-full w-full"}>
        <p className={"text-xl text-center text-black"}>
          {MENU.find(({ link }) => link === pathname)?.name}
        </p>
      </div>
    </header>
  );
};
