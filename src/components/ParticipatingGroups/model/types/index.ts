export enum ReportEnum {
  "Сдан" = "Сдан",
  "Не сдан" = "Не сдан",
  "Требует проверки" = "Требует проверки",
}

export interface IParticipatingGroups {
  id: number | string;
  facultyId: number | string;
  groupNum: string;
  discipline: string;
  paperReport: ReportEnum;
  electronicReport: ReportEnum;
  detailsInfo: IDetailsInfo[];
}

export interface IDetailsInfo {
  title: string;
  value: string;
}
