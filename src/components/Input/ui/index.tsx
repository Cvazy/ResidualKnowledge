"use client";

import { FC, InputHTMLAttributes, useState } from "react";

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
}

export const Input: FC<IInput> = ({ placeholder, type, value }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={({ target }) => setInputValue(target.value)}
      className={
        "bg-extra_light_gray px-[26px] py-6 text-[#272727] text-base border border-solid border-medium_gray rounded-md w-full"
      }
    />
  );
};
