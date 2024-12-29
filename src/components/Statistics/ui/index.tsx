import { StatElement } from "@/components/Statistics/ui/StatElement";
import Image from "next/image";

export const Statistics = () => {
  return (
    <div className={"flex flex-col items-center gap-[70px] w-full"}>
      <div className={"flex flex-col items-center gap-8 max-w-[746px] w-full"}>
        <p className={"text-xl text-main_gray text-center font-bold"}>
          Данные по университету
        </p>

        <div className={"flex flex-col items-start gap-[30px] w-full"}>
          <StatElement
            title={"Электронные отчеты, загруженные на проверку"}
            value={"40/450"}
          />

          <StatElement
            title={"Электронные отчеты,  отправленные на доработку"}
            value={"40/450"}
          />

          <StatElement title={"Принято электронных отчетов"} value={"40/450"} />

          <StatElement
            title={"Бумажные отчеты, загруженные на проверку"}
            value={"40/450"}
          />

          <StatElement
            title={"Бумажные отчеты,  отправленные на доработку"}
            value={"40/450"}
          />

          <StatElement title={"Принято бумажных отчетов"} value={"40/450"} />
        </div>
      </div>

      <div className={"grid grid-cols-2 w-full"}>
        <div
          className={
            "flex flex-col items-center justify-start px-5 pt-4 pb-11 w-full h-full"
          }
        >
          <div className={"flex flex-col items-center gap-5 w-fit"}>
            <div className={"flex items-center gap-6 flex-nowrap"}>
              <Image
                src={"/success.svg"}
                alt={"Сдали все отчеты"}
                width={30}
                height={30}
              />

              <p className={"text-xl text-main_gray text-center font-bold"}>
                Сдали все отчеты
              </p>
            </div>

            <div className={"flex flex-col items-start gap-4 w-fit"}>
              <p className={"text-xl text-main_gray text-left font-medium"}>
                Транспортный факультет
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Факультет информационных технологий
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Факультет машиностроения
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            "flex flex-col items-center justify-start px-5 pt-4 pb-11 w-full h-full"
          }
        >
          <div className={"flex flex-col items-center gap-5 w-fit"}>
            <div className={"flex items-center gap-6 flex-nowrap"}>
              <Image
                src={"/unSuccess.svg"}
                alt={"Продолжают работу"}
                width={30}
                height={30}
              />

              <p className={"text-xl text-main_gray text-center font-bold"}>
                Продолжают работу
              </p>
            </div>

            <div className={"flex flex-col items-start gap-4 w-fit"}>
              <p className={"text-xl text-main_gray text-left font-medium"}>
                Факультет химической технологии и биотехнологии
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Факультет экономики и управления
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Факультет урбанистики и городского хозяйства
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Институт графики и искусства книги имени В. А. Фаворского
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Институт издательского дела и журналистики
              </p>

              <p className={"text-xl text-main_gray text-left font-medium"}>
                Полиграфический институт
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
