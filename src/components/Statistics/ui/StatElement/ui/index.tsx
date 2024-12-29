import { FC } from "react";

interface IStatElement {
  title: string;
  value: string;
}

export const StatElement: FC<IStatElement> = ({ title, value }) => {
  return (
    <div className={"flex items-center justify-between gap-5 w-full"}>
      <p className={"text-xl text-main_gray text-center font-medium"}>
        {title}
      </p>

      <p className={"text-xl text-main_gray text-center font-medium"}>
        {value}
      </p>
    </div>
  );
};
