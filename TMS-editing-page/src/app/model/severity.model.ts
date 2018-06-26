export class SeverityModel {
  severity_id: number;
  severity_english_name: string;
  severity_chinese_name: string;
  hospital_id: number;

  constructor(
    severity_id: number,
    severity_english_name: string,
    severity_chinese_name: string,
    hospital_id: number
  ) {
    this.severity_id = severity_id;
    this.severity_english_name = severity_english_name;
    this.severity_chinese_name = severity_chinese_name;
    this.hospital_id = hospital_id;
  }
}
