"use client";

import {
  facultiesList,
  FacultyCard,
  Selector,
  selectorItems,
} from "@/components";
import { Suspense } from "react";
import { FacultyInfo } from "@/app/FacultyInfo";
import { useSearchParams } from "next/navigation";

const MainPage = () => {
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");

  return (
    <div className={"flex flex-col items-center gap-[22px]"}>
      <div className={"flex flex-col items-center gap-7"}>
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

        <Selector
          selectorsItems={selectorItems}
          activeItem={selectorItems[0]}
        />

        <p className={"text-base text-main_gray text-center"}>
          Сейчас идет этап сдачи электронных отчетов (до 15.07.24)
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          {faculty && <FacultyInfo facultyId={faculty} />}
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;
