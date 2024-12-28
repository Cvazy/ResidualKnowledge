"use client";

import { useSearchParams } from "next/navigation";
import { facultiesList, FacultyCard } from "@/components";
import { FacultyInfo } from "@/app/FacultyInfo";

export const FacultyInfoWrapper = () => {
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");

  return (
    <>
      <div className={"flex justify-center items-center w-full"}>
        {facultiesList.map(({ id, name, description, short_name }, index) => (
          <FacultyCard
            isLast={index === facultiesList.length - 1}
            key={id}
            name={name}
            description={description}
            short_name={short_name}
            id={id}
            index={index}
            isActive={id == faculty}
          />
        ))}
      </div>

      {faculty && <FacultyInfo facultyId={faculty} />}
    </>
  );
};
