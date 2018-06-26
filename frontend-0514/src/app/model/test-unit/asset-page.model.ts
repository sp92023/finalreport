export class AssetPageModel {
  type_id: number;
  asset_id: number;

  constructor(type_id: number, asset_id: number) {
    this.type_id = type_id;
    this.asset_id = asset_id;
  }
}
