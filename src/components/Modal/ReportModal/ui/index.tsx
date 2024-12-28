import { Button, ModalWrapper } from "@/components";
import { FC } from "react";

interface IReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: FC<IReportModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <div className={"bg-white rounded-20 max-w-xl w-full"}>
        <div className={"flex flex-col items-end gap-2.5 px-5 py-7 w-full"}>
          <div className={"flex flex-col items-start gap-4 w-full"}>
            <p className={"text-xl text-black text-left"}>
              Укажите комментарий, что нужно исправить:
            </p>

            <textarea
              className={
                "text-xl text-black outline-none border border-solid border-black rounded-xl px-6 py-4 min-h-44 h-full w-full placeholder:text-[#6B6B6B]"
              }
              placeholder={"Ваш комментарий..."}
            ></textarea>
          </div>

          <Button
            isActive={true}
            paddings={"py-2.5 px-8"}
            borderRadius={"rounded-lg"}
            textStyle={"text-base"}
          >
            Отправить на доработку
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};
