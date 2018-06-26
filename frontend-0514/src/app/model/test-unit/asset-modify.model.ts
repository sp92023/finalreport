export class AssetModifyModel {
  column: string;
  selection: number;
  option: string[];
  value: string;

  constructor(column: string, selection: number, option: string[], value: string) {
    this.column = column;
    this.selection = selection;
    this.option = option;
    this.value = value;
  }
}
