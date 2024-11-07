"use client";

import { FC, useState } from "react";
import { IParticipatingGroups } from "@/components/ParticipatingGroups/model/types";

interface IGroupItemProps extends Omit<IParticipatingGroups, "facultyId"> {
  index: number;
  setFirstStatus: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const GroupItem: FC<IGroupItemProps> = ({
  index,
  setFirstStatus,
  groupNum,
  discipline,
  paperReport,
  electronicReport,
  detailsInfo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (index === 0) {
      setFirstStatus((prevState) => !prevState);
    }
  };

  return (
    <div className={`${isOpen ? "bg-light_gray" : "bg-white"} h-full w-full`}>
      <div className={"w-full relative"}>
        <div
          onClick={handleClick}
          className={
            "flex items-center gap-10 cursor-pointer px-4 py-5 w-full sm:px-8 lg:px-12"
          }
        >
          <p
            className={
              "text-base text-black text-left max-w-[25%] whitespace-nowrap w-full"
            }
          >
            {groupNum}
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[40%] whitespace-nowrap w-full"
            }
          >
            {discipline}
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[155px] whitespace-nowrap w-full"
            }
          >
            {electronicReport}
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[132px] whitespace-nowrap w-full"
            }
          >
            {paperReport}
          </p>
        </div>

        <div
          className={`flex flex-col items-start gap-4 overflow-hidden px-4 ${isOpen ? "max-h-96 py-5" : "max-h-0"} w-full sm:px-8 lg:px-12`}
        >
          <div className={"flex flex-col items-start gap-3 w-full"}>
            {detailsInfo.map(({ title, value }) => (
              <p key={title} className={"text-base text-black text-left"}>
                {title}: {value}
              </p>
            ))}

            <div
              className={
                "flex items-center justify-start gap-4 text-base text-black text-left w-full"
              }
            >
              <p>Электронный отчет:</p>

              <a href={"#"} download={true} className={"block underline"}>
                файл.doxc
              </a>
            </div>
          </div>

          <div className={"flex items-center justify-start gap-6 w-full"}>
            {/*Buttons*/}
          </div>

          <p className={"text-base text-black text-left"}>Бумажный отчет:</p>
        </div>

        <div className={"absolute right-1.5 top-5"}>
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? "rotate-0" : "rotate-90"}`}
          >
            <path
              d="M13.1169 15.7788C12.3182 16.8761 10.6818 16.8761 9.88306 15.7788L1.25542 3.92707C0.293173 2.60523 1.23738 0.75 2.87236 0.75L20.1276 0.75C21.7626 0.75 22.7068 2.60523 21.7446 3.92707L13.1169 15.7788Z"
              fill={`${isOpen ? "white" : "#D9D9D9"}`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
