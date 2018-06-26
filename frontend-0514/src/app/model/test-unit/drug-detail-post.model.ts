export class DrugDetailPostModel {
  di_source: string;
  nhi_source: string;
  ord_source: string;
  query_type: string;
  query_value: string;
  query_date: string;
  drug_id: string;

  constructor(di_source: string, nhi_source: string, ord_source: string, query_type: string, query_value: string, query_date: string, drug_id: string) {
    this.di_source = di_source;
    this.nhi_source = nhi_source;
    this.ord_source = ord_source;
    this.query_type = query_type;
    this.query_value = query_value;
    this.query_date = query_date;
    this.drug_id = drug_id;
  }
}
