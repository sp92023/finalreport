import { TermModel } from "../term.model";

export class DashboardTermModel {
  term: TermModel;
  hospitals: string[];

  constructor(
    term: TermModel,
    hospitals: string[]
  ) {
    this.term = term;
    this.hospitals = hospitals;
  }
}
