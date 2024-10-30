"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { IMenuItem } from "@/components/Sidebar/model";

export const MenuItem: FC<IMenuItem> = ({ link, name }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`block text-black text-lg py-3 px-5 text-center min-h-[50px] w-full ${pathname === link ? "bg-dark_gray" : "bg-medium_gray"}`}
    >
      {name}
    </Link>
  );
};
