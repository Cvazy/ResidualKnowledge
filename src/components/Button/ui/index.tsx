import { FC } from "react";

interface IButtonProps {
  type?: "submit" | "reset" | "button";
  paddings: string;
  borderRadius: string;
  children: string;
  isActive?: boolean;
  textStyle?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  type,
  children,
  paddings,
  borderRadius,
  textStyle,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`${paddings} ${borderRadius} ${textStyle ? textStyle : "text-xl"} ${isActive ? "bg-dark_gray" : "bg-main_gray"} text-center text-black hover:bg-dark_gray`}
    >
      {children}
    </button>
  );
};
