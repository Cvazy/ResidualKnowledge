import { IParticipatingGroups, ReportEnum } from "../types";

export const GroupsList: IParticipatingGroups[] = [
  {
    id: 1,
    facultyId: 1,
    groupNum: "221-111",
    discipline: "Сети и телекоммуникации",
    paperReport: ReportEnum["Сдан"],
    electronicReport: ReportEnum["Не сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет информационных технологий",
      },

      {
        title: "Подразделение (Кафедра)",
        value: "ИИиТ",
      },

      {
        title: "Направление подготовки",
        value: "09.08.12 Сети и телекоммуникации",
      },

      {
        title: "Профиль/ специализация",
        value: "АСОИУ",
      },

      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 2,
    facultyId: 1,
    groupNum: "223-101",
    discipline: "Информационные системы и технологии",
    paperReport: ReportEnum["Требует проверки"],
    electronicReport: ReportEnum["Сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет информационных технологий",
      },

      {
        title: "Подразделение (Кафедра)",
        value: "ИИиТ",
      },

      {
        title: "Направление подготовки",
        value: "09.03.02 Информационные системы и технологии",
      },

      {
        title: "Профиль/ специализация",
        value: "АСОИУ",
      },

      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 3,
    facultyId: 1,
    groupNum: "213-391",
    discipline: "Информационная безопасность",
    paperReport: ReportEnum["Не сдан"],
    electronicReport: ReportEnum["Требует проверки"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет информационных технологий",
      },

      {
        title: "Подразделение (Кафедра)",
        value: "ИИиТ",
      },

      {
        title: "Направление подготовки",
        value: "10.05.02 Информационная безопасность автоматизированных систем",
      },

      {
        title: "Профиль/ специализация",
        value: "АСОИУ",
      },

      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 4,
    facultyId: 2,
    groupNum: "223-320",
    discipline: "Маркетинговые исследования",
    paperReport: ReportEnum["Сдан"],
    electronicReport: ReportEnum["Требует проверки"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет рекламы и маркетинга",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра маркетинговых технологий",
      },
      {
        title: "Направление подготовки",
        value: "38.03.02 Менеджмент (Реклама и PR)",
      },
      {
        title: "Профиль/ специализация",
        value: "Рекламные технологии",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 5,
    facultyId: 2,
    groupNum: "233-643",
    discipline: "Стратегии брендинга",
    paperReport: ReportEnum["Требует проверки"],
    electronicReport: ReportEnum["Не сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет рекламы и маркетинга",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра маркетинга и связей с общественностью",
      },
      {
        title: "Направление подготовки",
        value: "38.03.02 Менеджмент (Маркетинг)",
      },
      {
        title: "Профиль/ специализация",
        value: "Цифровой маркетинг",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 6,
    facultyId: 2,
    groupNum: "201-429",
    discipline: "Цифровой маркетинг",
    paperReport: ReportEnum["Не сдан"],
    electronicReport: ReportEnum["Сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет рекламы и маркетинга",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра рекламного менеджмента",
      },
      {
        title: "Направление подготовки",
        value: "42.03.01 Реклама и связи с общественностью",
      },
      {
        title: "Профиль/ специализация",
        value: "Стратегические коммуникации",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 7,
    facultyId: 3,
    groupNum: "191-120",
    discipline: "Муниципальное управление",
    paperReport: ReportEnum["Сдан"],
    electronicReport: ReportEnum["Не сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет гос.управления",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра государственного менеджмента",
      },
      {
        title: "Направление подготовки",
        value: "38.03.04 Государственное и муниципальное управление",
      },
      {
        title: "Профиль/ специализация",
        value: "Административное управление",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 8,
    facultyId: 3,
    groupNum: "214-521",
    discipline: "Политический анализ",
    paperReport: ReportEnum["Не сдан"],
    electronicReport: ReportEnum["Требует проверки"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет гос.управления",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра управления общественными процессами",
      },
      {
        title: "Направление подготовки",
        value: "38.03.04 Государственное и муниципальное управление",
      },
      {
        title: "Профиль/ специализация",
        value: "Государственное регулирование экономики",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
  {
    id: 9,
    facultyId: 3,
    groupNum: "241-831",
    discipline: "Социальная политика",
    paperReport: ReportEnum["Требует проверки"],
    electronicReport: ReportEnum["Сдан"],
    detailsInfo: [
      {
        title: "Факультет/ институт",
        value: "Факультет гос.управления",
      },
      {
        title: "Подразделение (Кафедра)",
        value: "Кафедра политических и административных наук",
      },
      {
        title: "Направление подготовки",
        value: "38.03.04 Государственное и муниципальное управление",
      },
      {
        title: "Профиль/ специализация",
        value: "Региональное управление",
      },
      {
        title: "Ответсвенный преподаватель",
        value: "Иванов И. И.",
      },
    ],
  },
];
