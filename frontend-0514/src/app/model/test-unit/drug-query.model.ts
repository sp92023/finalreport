export class DrugQueryModel {
  di_source: string;
  nhi_source: string;
  order_source: string;
  eat_source: string;
  medday: string;

  constructor(di_source: string, nhi_source: string, ord_source: string, eat_source: string, medday: string) {
    this.di_source = di_source;
    this.nhi_source = nhi_source;
    this.order_source = ord_source;
    this.eat_source = eat_source;
    this.medday = medday;
  }
}
