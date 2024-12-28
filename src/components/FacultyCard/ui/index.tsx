"use client";

import { IFacultyCard } from "@/components/FacultyCard/model";
import { FC } from "react";
import Link from "next/link";

interface FacultyCardProps extends Omit<IFacultyCard, "name" | "description"> {
  isLast: boolean;
  isActive: boolean;
  index: number;
}

export const FacultyCard: FC<FacultyCardProps> = ({
  id,
  short_name,
  isLast,
  index,
  isActive,
}) => {
  return (
    <Link
      href={`?faculty=${id}`}
      className={`${index === 0 ? "" : "pl-1"} block ${isLast ? "pl-1" : "border-r-[3px] border-main_gray pr-1"}`}
    >
      <div
        className={`px-6 py-3 ${isActive ? "bg-light_purple rounded-[10px]" : "bg-white"} hover:rounded-[10px] hover:bg-light_purple`}
      >
        <h3 className={"text-center text-main_gray text-xl font-bold"}>
          {short_name}
        </h3>
      </div>
    </Link>
  );
};
