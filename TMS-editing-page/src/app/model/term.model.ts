export class TermModel {
  term_id: number;
  term_english_name: string;
  term_chinese_name: string;
  term_snomed: string;
  hospital_id: number;

  constructor(
    term_id: number,
    term_english_name: string,
    term_chinese_name: string,
    term_snomed: string,
    hospital_id: number
  ) {
    this.term_id = term_id;
    this.term_english_name = term_english_name;
    this.term_chinese_name = term_chinese_name;
    this.term_snomed = term_snomed;
    this.hospital_id = hospital_id;
  }
}
