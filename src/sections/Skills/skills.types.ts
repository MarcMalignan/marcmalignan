export interface ISkill {
  name: string;
  logo: string;
  link: string;
}

export interface ISkillGroup {
  id: string;
  mainRow: ISkill[];
  otherRow: ISkill[];
}
