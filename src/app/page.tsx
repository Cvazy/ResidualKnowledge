import {
  FacultyCard,
  IFacultyCard,
  ISelectorItem,
  Selector,
  Theme,
} from "@/components";

const reports: IFacultyCard[] = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  faculty: "Факультет информационных технологий",
  description: "Есть непроверенные отчеты",
}));

const selectorItems: ISelectorItem[] = [
  {
    id: 1,
    title: "Зима 2023",
  },

  {
    id: 2,
    title: "Весна 2023",
  },

  {
    id: 3,
    title: "Лето 2023",
  },

  {
    id: 4,
    title: "Осень 2023",
  },

  {
    id: 5,
    title: "Зима 2024",
  },

  {
    id: 6,
    title: "Весна 2024",
  },

  {
    id: 7,
    title: "Лето 2024",
  },

  {
    id: 8,
    title: "Осень 2024",
  },
];

const MainPage = () => {
  return (
    <div className={"bg-white w-full h-full"}>
      <div
        className={"flex flex-col items-center gap-5 px-5 py-10 md:py-[51px]"}
      >
        <Selector
          theme={Theme.dark}
          selectorsItems={selectorItems}
          activeItem={selectorItems[0]}
        />

        <div className={"grid grid-cols-2 gap-5 w-fit lg:grid-cols-3"}>
          {reports.map(({ id, faculty, description }) => (
            <FacultyCard
              key={id}
              faculty={faculty}
              description={description}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
