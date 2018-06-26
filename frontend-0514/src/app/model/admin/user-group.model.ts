export class UserGroupModel {
  id: number;
  description: string;
  flag: boolean;

  constructor(id: number, description: string, flag: boolean) {
    this.id = id;
    this.description = description;
    this.flag = flag;
  }
}
