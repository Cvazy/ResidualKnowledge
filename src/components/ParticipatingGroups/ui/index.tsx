import { FC } from "react";
import { GroupsList } from "@/components/ParticipatingGroups/model";

interface IParticipatingGroupsProps {
  facultyId: number | string;
}

export const ParticipatingGroups: FC<IParticipatingGroupsProps> = ({
  facultyId: selectedFacultyId,
}) => {
  const foundGroups = GroupsList.filter(
    ({ facultyId }) => facultyId.toString() === selectedFacultyId.toString(),
  );

  console.log(foundGroups);

  return (
    <div className={"flex flex-col w-full"}>
      <div className={"bg-main_gray rounded-xl w-full"}></div>
    </div>
  );
};
