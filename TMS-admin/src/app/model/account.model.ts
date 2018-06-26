export class AccountModel {
  account_id: number;
  account_email: string;
  account_name: string;
  account_uid: string;
  account_photoUrl: string;

  constructor(
    account_id: number,
    account_email: string,
    account_name: string,
    account_uid: string,
    account_photoUrl: string
  ) {
    this.account_id = account_id;
    this.account_email = account_email;
    this.account_name = account_name;
    this.account_uid = account_uid;
    this.account_photoUrl = account_photoUrl;
  }
}
