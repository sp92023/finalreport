import { AccountModel } from "./account.model";

export class BranchModel {
  branch_id: number;
  hospital_id: number;
  account: AccountModel;
  branch_code: string;
  datetime: string;

  constructor(
    branch_id: number, 
    hospital_id: number, 
    account: AccountModel, 
    branch_code: string, 
    datetime: string
  ) {
    this.branch_id = branch_id;
    this.hospital_id = hospital_id;
    this.account = account;
    this.branch_code = branch_code;
    this.datetime = datetime;
  }
}
