export class BodyModel {
  body_id: number;
  body_english_name: string;
  body_chinese_name: string;
  body_parent_id: number;
  hospital_id: number;

  constructor(
    body_id: number,
    body_english_name: string,
    body_chinese_name: string,
    body_parent_id: number,
    hospital_id: number
  ) {
    this.body_id = body_id;
    this.body_english_name = body_english_name;
    this.body_chinese_name = body_chinese_name;
    this.body_parent_id = body_parent_id;
    this.hospital_id = hospital_id;
  }
}
