export class TypeModel {
  sn: number;
  type: string;
  flag: boolean;

  constructor(sn: number, type: string, flag: boolean) {
    this.sn = sn;
    this.type = type;
    this.flag = flag;
  }
}
