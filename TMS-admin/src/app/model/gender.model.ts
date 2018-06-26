export class GenderModel {
  gender_id: number;
  gender_english_name: string;
  gender_chinese_name: string;
  hospital_id: number;

  constructor(
    gender_id: number,
    gender_english_name: string,
    gender_chinese_name: string,
    hospital_id: number
  ) {
    this.gender_id = gender_id;
    this.gender_english_name = gender_english_name;
    this.gender_chinese_name = gender_chinese_name;
    this.hospital_id = hospital_id;
  }
}
