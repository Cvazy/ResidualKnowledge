const reportsCategories = [
  "Загружено на проверку электронных отчетов",
  "Электронных отчетов на доработке",
  "Сдано электронных отчетов",
  "Загружено на проверку бумажных отчетов",
  "Бумажных отчетов на доработке",
  "Сдано бумажных отчетов",
];

export const ReportsInfoList = () => {
  return (
    <div className={"flex gap-5 justify-center flex-wrap w-full"}>
      {reportsCategories.map((item) => (
        <div key={item} className={"max-w-[174px] grow bg-main_gray w-full"}>
          <div
            className={
              "flex flex-col items-center justify-between gap-1.5 py-3 px-8 w-full h-full"
            }
          >
            <p className={"text-base text-black text-center"}>{item}</p>

            <p className={"text-base font-bold text-black text-center"}>
              10 из 50
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
