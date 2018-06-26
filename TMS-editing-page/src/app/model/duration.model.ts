export class DurationModel {
  duration_id: number;
  duration_english_name: string;
  duration_chinese_name: string;
  hospital_id: number;

  constructor(
    duration_id: number,
    duration_english_name: string,
    duration_chinese_name: string,
    hospital_id: number
  ) {
    this.duration_id = duration_id;
    this.duration_english_name = duration_english_name;
    this.duration_chinese_name = duration_chinese_name;
    this.hospital_id = hospital_id;
  }
}
