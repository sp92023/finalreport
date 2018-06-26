export class DepartmentModel {
  department_id: number;
  department_number: string;
  department_english_name: string;
  department_chinese_name: string;
  hospital_id: number;
  department_parent_id: number;

  constructor(
    department_id: number,
    department_number: string,
    department_english_name: string,
    department_chinese_name: string,
    hospital_id: number,
    department_parent_id: number
  ) {
    this.department_id = department_id;
    this.department_number = department_number;
    this.department_english_name = department_english_name;
    this.department_chinese_name = department_chinese_name;
    this.hospital_id = hospital_id;
    this.department_parent_id = department_parent_id;
  }
}
