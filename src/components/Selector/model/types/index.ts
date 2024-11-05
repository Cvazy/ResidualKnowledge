export enum Theme {
  light = "light",
  dark = "dark",
}

export interface ISelectorItem {
  id: number | string;
  title: string;
}

export interface ISelectorProps {
  theme: Theme;
  selectorsItems: ISelectorItem[];
  activeItem: ISelectorItem;
}

export interface IFaculty {
  id: number | string;
  name: string;
}
