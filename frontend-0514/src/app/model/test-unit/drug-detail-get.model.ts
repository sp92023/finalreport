export class DrugDetailGetModel {
  SourceDate: string;
  NHI_Code: string;
  MMH_Code: string;
  Atccode: string;
  Purpose: string;
  Name: string;
  ProductNameCht: string;
  ProductNameEng: string;
  MedicLook: string;
  MedicNotice: string;
  FoodNotice: string;
  SideEffect: string;
  ImgUpdateDate: string;
  ShortName: string;
  ProductName: string;
  MainUnit: string;
  SubUnit: string;
  StartDate: string;
  EndDate: string;
  OrdName: string;
  OrdFullName: string;

  constructor(
    SourceDate: string,
    NHI_Code: string,
    MMH_Code: string,
    Atccode: string,
    Purpose: string,
    Name: string,
    ProductNameCht: string,
    ProductNameEng: string,
    MedicLook: string,
    MedicNotice: string,
    FoodNotice: string,
    SideEffect: string,
    ImgUpdateDate: string,
    ShortName: string,
    ProductName: string,
    MainUnit: string,
    SubUnit: string,
    StartDate: string,
    EndDate: string,
    OrdName: string,
    OrdFullName: string
  ) {
      this.SourceDate = SourceDate;
      this.NHI_Code = NHI_Code;
      this.MMH_Code = MMH_Code;
      this.Atccode = Atccode;
      this.Purpose = Purpose;
      this.Name = Name;
      this.ProductNameCht = ProductNameCht;
      this.ProductNameEng = ProductNameEng;
      this.MedicLook = MedicLook;
      this.MedicNotice = MedicNotice;
      this.FoodNotice = FoodNotice;
      this.SideEffect = SideEffect;
      this.ImgUpdateDate = ImgUpdateDate;
      this.ShortName = ShortName;
      this.ProductName = ProductName;
      this.MainUnit = MainUnit;
      this.SubUnit = SubUnit;
      this.StartDate = StartDate;
      this.EndDate = EndDate;
      this.OrdName = OrdName;
      this.OrdFullName = OrdFullName;
  }
}
