export class DrugPostModel {
  nhi_ids: string;
  mmh_ids: string;
  dosage: string;
  fequencys: string;
  waymethod: string;

  constructor(nhi_ids: string, mmh_ids: string, dosage: string, fequencys: string, waymethod: string) {
    this.nhi_ids = nhi_ids;
    this.mmh_ids = mmh_ids;
    this.dosage = dosage;
    this.fequencys = fequencys;
    this.waymethod = waymethod;
  }
}
