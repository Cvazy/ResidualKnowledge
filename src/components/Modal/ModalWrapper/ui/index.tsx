import { FC, ReactNode } from "react";
import Image from "next/image";

interface IModalWrapper {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const ModalWrapper: FC<IModalWrapper> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? "z-50 opacity-100" : "z-[-1] opacity-0"}`}
    >
      <div className={"relative w-full h-full"}>
        <div
          className={"flex items-center justify-center px-5 py-5 w-full h-full"}
        >
          {children}
        </div>

        <button
          type={"button"}
          onClick={onClose}
          className={
            "absolute top-6 right-6 border-0 bg-transparent outline-none"
          }
        >
          <Image src={"/close.svg"} alt={"Close"} width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
