import { FC } from "react";
import {
  facultiesList,
  ParticipatingGroups,
  ReportsInfoList,
} from "@/components";

interface IFacultyInfoProps {
  facultyId: number | string;
}

export const FacultyInfo: FC<IFacultyInfoProps> = ({ facultyId }) => {
  const { name } = facultiesList.find(
    ({ id }) => id.toString() === facultyId.toString(),
  );

  return (
    <div className={"flex flex-col items-center gap-1.5 w-full"}>
      <div className={"flex flex-col items-start gap-5 w-full"}>
        <div className={"flex flex-col items-center gap-6 w-full"}>
          <p className={"text-xl font-bold text-black text-center"}>{name}</p>

          <ReportsInfoList />
        </div>

        <div className={"flex flex-col items-start gap-2 w-full"}>
          <p className={"text-base text-black text-left"}>
            Список рекомендуемых групп:{" "}
            <a href={"#"} download={true}>
              файл.pdf
            </a>
          </p>

          <p className={"text-base text-black text-left"}>
            График проведения:{" "}
            <a href={"#"} download={true}>
              файл.pdf
            </a>
          </p>
        </div>
      </div>

      <div className={"flex flex-col items-center gap-4 w-full"}>
        <p className={"text-xl text-black text-center"}>Участвующие группы</p>

        <ParticipatingGroups facultyId={facultyId} />
      </div>
    </div>
  );
};
