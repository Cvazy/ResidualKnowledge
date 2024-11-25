"use client";

import {
  FacultyInfoWrapper,
  Selector,
  selectorItems,
  Theme,
} from "@/components";
import { Suspense } from "react";

const MainPage = () => {
  return (
    <div className={"flex flex-col items-center gap-5"}>
      <Selector
        theme={Theme.dark}
        selectorsItems={selectorItems}
        activeItem={selectorItems[0]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <FacultyInfoWrapper />
      </Suspense>
    </div>
  );
};

export default MainPage;
