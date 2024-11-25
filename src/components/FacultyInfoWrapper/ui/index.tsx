"use client";

import { useSearchParams } from "next/navigation";
import { facultiesList, FacultyCard } from "@/components";
import { FacultyInfo } from "@/app/FacultyInfo";

export const FacultyInfoWrapper = () => {
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");

  return (
    <>
      {faculty ? (
        <FacultyInfo facultyId={faculty} />
      ) : (
        <div className={"grid grid-cols-2 gap-5 w-fit lg:grid-cols-3"}>
          {facultiesList.map(({ id, name, description }) => (
            <FacultyCard
              key={id}
              name={name}
              description={description}
              id={id}
            />
          ))}
        </div>
      )}
    </>
  );
};
