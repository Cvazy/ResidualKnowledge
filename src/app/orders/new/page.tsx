import { NewOrderStep } from "@/components/NewOrderStep/ui";
import { Button, Input } from "@/components";
import Link from "next/link";

const NewOrderPage = () => {
  return (
    <div className={"flex justify-center w-full h-full"}>
      <div className={"max-w-[747px] w-full"}>
        <div className={"flex flex-col gap-[73px] w-full"}>
          <div className={"flex flex-col gap-16 w-full"}>
            <div className={"grid grid-cols-2 gap-x-[113px] gap-y-10 w-full"}>
              <NewOrderStep
                title={"Дата приказа"}
                inputType={"text"}
                inputPlaceholder={""}
              />

              <NewOrderStep
                title={"Номер"}
                inputType={"text"}
                inputPlaceholder={""}
              />

              <NewOrderStep
                title={"Учебный год"}
                inputType={"text"}
                inputPlaceholder={""}
              />

              <NewOrderStep
                title={"Проверяемый семестр"}
                inputType={"text"}
                inputPlaceholder={""}
              />
            </div>

            <div className={"flex flex-col items-start gap-8 w-full"}>
              <p className={"text-xl font-bold text-main_gray text-left"}>
                Должностные лица
              </p>

              <div className={"grid grid-cols-2 gap-x-[113px] gap-y-10 w-full"}>
                <NewOrderStep
                  title={"Начальник отдела контроля образовательного процесса"}
                  inputType={"text"}
                  inputPlaceholder={""}
                />

                <NewOrderStep
                  title={"Начальник центра по учебно-методической работе"}
                  inputType={"text"}
                  inputPlaceholder={""}
                />
              </div>
            </div>

            <div className={"flex flex-col items-start gap-8 w-full"}>
              <p className={"text-xl font-bold text-main_gray text-left"}>
                Сроки проведения
              </p>

              <div className={"grid grid-cols-2 gap-x-[113px] gap-y-10 w-full"}>
                <div
                  className={
                    "flex flex-col items-start justify-end gap-4 w-full"
                  }
                >
                  <p className={"text-xl font-bold text-main_gray text-left"}>
                    Анкетирование
                  </p>

                  <div className={"flex items-center gap-5 w-full"}>
                    <div className={"max-w-[129px] w-full"}>
                      <Input type={"text"} placeholder={""} />
                    </div>

                    <p
                      className={
                        "text-2xl font-medium text-[#272727] text-center"
                      }
                    >
                      -
                    </p>

                    <div className={"max-w-[129px] w-full"}>
                      <Input type={"text"} placeholder={""} />
                    </div>
                  </div>
                </div>

                <NewOrderStep
                  title={"Сводный отчёт по результатам Анкетирования до"}
                  inputType={"text"}
                  inputPlaceholder={""}
                />

                <div
                  className={
                    "flex flex-col items-start justify-end gap-4 w-full"
                  }
                >
                  <p className={"text-xl font-bold text-main_gray text-left"}>
                    Проверка
                  </p>

                  <div className={"flex items-center gap-5 w-full"}>
                    <div className={"max-w-[129px] w-full"}>
                      <Input type={"text"} placeholder={""} />
                    </div>

                    <p
                      className={
                        "text-2xl font-medium text-[#272727] text-center"
                      }
                    >
                      -
                    </p>

                    <div className={"max-w-[129px] w-full"}>
                      <Input type={"text"} placeholder={""} />
                    </div>
                  </div>
                </div>

                <NewOrderStep
                  title={"Отчёты по результатам Проверки до"}
                  inputType={"text"}
                  inputPlaceholder={""}
                />

                <NewOrderStep
                  title={"Сводный отчёт по результатам Проверки до"}
                  inputType={"text"}
                  inputPlaceholder={""}
                />
              </div>
            </div>
          </div>

          <div className={"flex justify-end w-full"}>
            <Link href={"/orders/success"}>
              <Button
                isActive={true}
                type={"button"}
                paddings={"px-10 py-4"}
                borderRadius={"rounded-20"}
                textStyle={"text-base"}
              >
                Сформировать новый приказ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderPage;
