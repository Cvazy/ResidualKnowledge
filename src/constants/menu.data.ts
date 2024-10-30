import { IMenuItem } from "@/components/Sidebar/model";
import { PROJECT_PAGES } from "../config";

export const MENU: IMenuItem[] = [
  {
    name: "Главная",
    link: PROJECT_PAGES.HOME,
  },

  {
    name: "Приказы",
    link: PROJECT_PAGES.ORDERS,
  },

  {
    name: "Списки рекомендуемых групп",
    link: PROJECT_PAGES.GROUPS_LIST,
  },

  {
    name: "Отчеты",
    link: PROJECT_PAGES.REPORTS,
  },

  {
    name: "Настройки доступа",
    link: PROJECT_PAGES.SETTINGS,
  },
];
