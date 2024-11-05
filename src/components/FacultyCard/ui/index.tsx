import { IFacultyCard } from "@/components/FacultyCard/model";
import { FC } from "react";
import Link from "next/link";

export const FacultyCard: FC<IFacultyCard> = ({ id, name, description }) => {
  return (
    <Link
      href={`?faculty=${id}`}
      className={
        "bg-main_gray block max-w-[368px] w-full rounded-[1.25rem] hover:-translate-y-3"
      }
    >
      <div className={"pt-4 pb-8 px-5 w-full sm:px-7 lg:px-12"}>
        <div className={"flex flex-col items-center gap-6 w-full"}>
          <h3 className={"text-center text-black text-2xl"}>{name}</h3>

          <p className={"text-center text-black text-base"}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
