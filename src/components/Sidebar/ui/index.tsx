import { MenuItem } from "@/components/Sidebar/ui/MenuItem";
import { MENU } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className={"min-w-[398px] max-w-[398px] w-full h-full"}>
      <div
        className={
          "flex flex-col items-center gap-[18px] bg-white shadow-[0_0_30px_#00000040] max-w-[368px] py-7 px-5 rounded-r-[30px] sm:px-8 md:px-10 w-full h-full"
        }
      >
        <Link
          href={"/"}
          className={"flex justify-center border-b border-black pb-6 w-full"}
        >
          <Image
            src="/logo.svg"
            alt="Логотип политеха"
            width={250}
            height={66}
          />
        </Link>

        <div className={"flex flex-col items-center gap-14 w-full h-full"}>
          <div className={"flex flex-col items-center gap-11"}>
            <p className={"text-lg text-center font-bold text-main_gray"}>
              Оценка остаточных знаний
            </p>

            <div className={"flex flex-col items-center gap-2 w-full"}>
              <div
                className={
                  "flex items-center justify-center rounded-full bg-light_gray min-w-24 max-w-24 min-h-24 max-h-24"
                }
              ></div>

              <p className={"text-xl text-center font-bold text-main_gray"}>
                Иванов Иван Иванович
              </p>
            </div>
          </div>

          <div className={"flex flex-col gap-5 w-full"}>
            {MENU.map(({ link, name }) => (
              <MenuItem key={link} link={link} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
