import { Injectable } from '@angular/core';

@Injectable()
export class DrugPageItemService {

  constructor() { }


  mmhMedicineOption = [
    [['處方簽/藥袋', 'type_names'], ['醫院診所服務代碼', 'hospitals'], ['處方籤種類', 'pre_type'], ['原處方醫療機構案件分類', 'org_med'], ['姓名', 'names']],
    [['身份證字號', 'ids'], ['出生年月日', 'b_days'], ['就醫科別', 'division'], ['就醫日期', 'med_day'], ['健保卡就醫序號', 'med_sn']],
    [['給藥日份', 'drug_day'], ['免部分負擔代碼', 'part_code'], ['國際疾病分類碼', 'icd_code'], ['診治醫師代碼', 'doctor_id'], ['備註', 'comments']]
  ];

  hcMedicineOption = [
    [['處方籤種類', 'pre_type'], ['原處方醫療機構案件分類', 'org_med'], ['姓名', 'names']],
    [['身份證字號', 'ids'], ['出生年月日', 'b_days'], ['就醫科別', 'division'], ['就醫日期', 'med_day'], ['健保卡就醫序號', 'med_sn']],
    [['給藥日份', 'drug_day'], ['免部分負擔代碼', 'part_code'], ['國際疾病分類碼', 'icd_code'], ['診治醫師代碼', 'doctor_id'], ['備註', 'comments']]
  ];

  hcAddMedicineTitle = [
    ['代碼', 'nhi_ids'],
    ['用量', 'dosage'],
    ['服法', 'fequencys'],
    ['部位', 'waymethod']
  ];
  medicineDetailTitle = [
    'SourceDate', 'NHI_Code', 'MMH_Code', 'Atccode', 'Purpose', 'Name', 'ProductNameCht', 'ProductNameEng',
    'MedicLook', 'MedicNotice', 'FoodNotice', 'SideEffect', 'ImgUpdateDate' , 'ShortName', 'ProductName',
    'MainUnit', 'SubUnit', 'StartDate', 'EndDate', 'OrdName', 'OrdFullName'
  ];

  medicineVersion = [
    [
      ['Di version', 'di_source'],
      ['NHI version', 'nhi_source']
    ],[
      ['Order version', 'order_source'],
      ['服法 version', 'eat_source']
    ]
  ];

  mmhAddMedicineTitle = [
    ['代碼', 'mmh_ids', 'nhi_ids'],
    ['用量', 'dosage'],
    ['服法', 'fequencys'],
    ['部位', 'waymethod']
  ];

}
