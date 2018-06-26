export class HospitalModel {
  hospital_id: number;
  hospital_english_name: string;
  hospital_chinese_name: string;
  hospital_label_name: string;

  constructor(
    hospital_id: number,
    hospital_english_name: string,
    hospital_chinese_name: string,
    hospital_label_name: string
  ) {
    this.hospital_id = hospital_id;
    this.hospital_english_name = hospital_english_name;
    this.hospital_chinese_name = hospital_chinese_name;
    this.hospital_label_name = hospital_label_name;
  }
}
