import { CuiModel } from "./cui.model";
import { DepartmentModel } from "./department.model";

export class DepartmentReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  department_id: number;
  department_reference_ids: number[];
  department_variants: DepartmentModel[];

  constructor(
    symptom_id: number,
    cui: CuiModel,
    department_id: number,
    department_reference_ids: number[],
    department_variants: DepartmentModel[]
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.department_id = department_id;
    this.department_reference_ids = department_reference_ids;
    this.department_variants = department_variants;
  }
}
