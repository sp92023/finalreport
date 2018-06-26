export class CuiModel {
  cui_id: number;
  cui_number: string;
  cui_english_name: string;
  cui_chinese_name: string;

  constructor(
    cui_id: number,
    cui_number: string,
    cui_english_name: string,
    cui_chinese_name: string
  ) {
    this.cui_id = cui_id;
    this.cui_number = cui_number;
    this.cui_english_name = cui_english_name;
    this.cui_chinese_name = cui_chinese_name;
  }
}
