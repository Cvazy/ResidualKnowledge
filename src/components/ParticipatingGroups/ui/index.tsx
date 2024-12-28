"use client";

import { FC, useState } from "react";
import { GroupsList } from "@/components/ParticipatingGroups/model";
import { GroupItem } from "@/components/ParticipatingGroups/ui/GroupItem";

interface IParticipatingGroupsProps {
  facultyId: number | string;
}

export const ParticipatingGroups: FC<IParticipatingGroupsProps> = ({
  facultyId: selectedFacultyId,
}) => {
  const [isFirstElementOpen, setFirstElementOpen] = useState(false);

  const foundGroups = GroupsList.filter(
    ({ facultyId }) => facultyId.toString() === selectedFacultyId.toString(),
  );

  return (
    <div className={"flex flex-col w-full"}>
      <div
        className={`bg-light_purple ${isFirstElementOpen ? "rounded-t-xl" : "rounded-xl"} w-full`}
      >
        <div
          className={
            "flex items-center gap-10 px-4 py-5 w-full sm:px-8 lg:px-12"
          }
        >
          <p
            className={
              "text-base text-black text-left max-w-[25%] whitespace-nowrap w-full"
            }
          >
            Группа
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[40%] whitespace-nowrap w-full"
            }
          >
            Дисциплина
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[155px] whitespace-nowrap w-full"
            }
          >
            Электронный отчет
          </p>

          <p
            className={
              "text-base text-black text-center max-w-[132px] whitespace-nowrap w-full"
            }
          >
            Бумажный отчет
          </p>
        </div>
      </div>

      {foundGroups.map(
        (
          {
            id,
            discipline,
            groupNum,
            electronicReport,
            paperReport,
            detailsInfo,
          },
          index,
        ) => (
          <GroupItem
            key={id}
            id={id}
            index={index}
            setFirstStatus={setFirstElementOpen}
            discipline={discipline}
            groupNum={groupNum}
            electronicReport={electronicReport}
            paperReport={paperReport}
            detailsInfo={detailsInfo}
            isLastItem={index === foundGroups.length - 1}
          />
        ),
      )}
    </div>
  );
};
