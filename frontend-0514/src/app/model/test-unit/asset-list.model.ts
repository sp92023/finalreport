export class AssetListModel {
  account: string;
  asset_id: string;
  comment: string;
  current_user: string;
  model: string;
  password: string;
  phone_number: string;
  product: string;
  status: string;
  type: string;

  constructor(account: string, asset_id: string, comment: string, current_user: string, model: string, password: string,
              phone_number: string, product: string, status: string, type: string) {
    this.account = account;
    this.asset_id = asset_id;
    this.comment = comment;
    this.current_user = current_user;
    this.model = model;
    this.password = password;
    this.phone_number = phone_number;
    this.product = product;
    this.status = status;
    this.type = type;
  }
}
