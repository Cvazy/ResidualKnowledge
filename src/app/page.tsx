"use client";

import {
  facultiesList,
  FacultyCard,
  Selector,
  selectorItems,
  Theme,
} from "@/components";
import { useSearchParams } from "next/navigation";
import { FacultyInfo } from "@/app/FacultyInfo";

const MainPage = () => {
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");

  return (
    <div className={"flex flex-col items-center gap-5"}>
      <Selector
        theme={Theme.dark}
        selectorsItems={selectorItems}
        activeItem={selectorItems[0]}
      />

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
    </div>
  );
};

export default MainPage;
