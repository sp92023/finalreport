import { Component, OnInit } from '@angular/core';
import {SymptomReferenceModel} from "../../model/symptom-reference.model";

@Component({
  selector: 'app-symptom-dashboard',
  templateUrl: './symptom-dashboard.component.html',
  styleUrls: ['./symptom-dashboard.component.css']
})
export class SymptomDashboardComponent implements OnInit {

  private symptoms: SymptomReferenceModel[];

  constructor() { }

  ngOnInit() {
  }

}
