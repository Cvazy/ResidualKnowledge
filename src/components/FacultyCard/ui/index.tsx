import { IFacultyCard } from "@/components/FacultyCard/model";
import { FC } from "react";

export const FacultyCard: FC<IFacultyCard> = ({ faculty, description }) => {
  return (
    <div className={"bg-main_gray max-w-[368px] w-full rounded-[1.25rem]"}>
      <div className={"pt-4 pb-8 px-5 w-full sm:px-7 lg:px-12"}>
        <div className={"flex flex-col items-center gap-6 w-full"}>
          <h3 className={"text-center text-black text-2xl"}>{faculty}</h3>

          <p className={"text-center text-black text-base"}>{description}</p>
        </div>
      </div>
    </div>
  );
};
