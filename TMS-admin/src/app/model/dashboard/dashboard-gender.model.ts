import { GenderModel } from "../gender.model";

export class DashboardGenderModel {
  gender: GenderModel;
  hospitals: string[];

  constructor(
    gender: GenderModel,
    hospitals: string[]
  ) {
    this.gender = gender;
    this.hospitals = hospitals;
  }
}
