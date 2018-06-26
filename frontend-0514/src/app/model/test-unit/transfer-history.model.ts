export class TransferHistoryModel {
  asset_id: number;
  userto: string;
  userfrom: string;
  manager: string;

  constructor(asset_id: number, userto: string, userfrom: string, manager: string) {
    this.asset_id = asset_id;
    this.userto = userto;
    this.userfrom = userfrom;
    this.manager = manager;
  }
}
