import { Input } from "@/components";
import { FC } from "react";

interface INewOrderStepProps {
  title: string;
  inputType: string;
  inputPlaceholder: string;
}

export const NewOrderStep: FC<INewOrderStepProps> = ({
  title,
  inputPlaceholder,
  inputType,
}) => {
  return (
    <div className={"flex flex-col items-start gap-4 w-full"}>
      <p className={"text-xl font-bold text-main_gray text-left"}>{title}</p>

      <Input type={inputType} placeholder={inputPlaceholder} />
    </div>
  );
};
