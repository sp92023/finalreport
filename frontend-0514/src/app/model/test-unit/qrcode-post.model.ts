import {DivisionModel} from "./division.model";

export class QrcodePostModel {
  type_names: string;
  hospitals: string;
  pre_type: string;
  org_med: string;
  names: string;
  ids: string;
  b_days: string;
  division: DivisionModel;
  med_day: string;
  med_sn: string;
  drug_day: number;
  part_code: string;
  icd_code: string;
  doctor_id: string;
  comments: string;

  constructor(
    type_names: string,
    hospitals: string,
    pre_type: string,
    org_med: string,
    names: string,
    ids: string,
    b_days: string,
    division: DivisionModel,
    med_day: string,
    med_sn: string,
    drug_day: number,
    part_code: string,
    icd_code: string,
    doctor_id: string,
    comments: string
  ) {
    this.type_names = type_names;
    this.hospitals = hospitals;
    this.pre_type = pre_type;
    this.org_med = org_med;
    this.names = names;
    this.ids = ids;
    this.b_days = b_days;
    this.division = division;
    this.med_day = med_day;
    this.med_sn = med_sn;
    this.drug_day = drug_day;
    this.part_code = part_code;
    this.icd_code = icd_code;
    this.doctor_id = doctor_id;
    this.comments = comments;
  }
}
