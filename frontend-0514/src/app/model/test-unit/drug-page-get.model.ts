export class DrugPageGetModel {
  nhi_ids = null;
  mmh_ids = null;
  dosage: string[];
  fequencys = null;
  waymethod = null;

  constructor(nhi_ids, mmh_ids, dosage: string[], fequencys, waymethod) {
    this.nhi_ids = nhi_ids;
    this.mmh_ids = mmh_ids;
    this.dosage = dosage;
    this.fequencys = fequencys;
    this.waymethod = waymethod;
  }
}
