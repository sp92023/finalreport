import { Component, OnInit } from '@angular/core';
import {ApiToolsCoveragePageService} from "../../shared/api/api-tools-coverage-page.service";
import {Subscription} from "rxjs/Subscription";
import {CoveragePageModel} from "../../model/tools/test-coverage/coverage-page.model";
import {ApiToolsCoverageTableService} from "../../shared/api/api-tools-coverage-table.service";
import {CoverageTablePostModel} from "../../model/tools/test-coverage/coverage-table-post.model";
import {CoverageTableGetModel} from "../../model/tools/test-coverage/coverage-table-get.model";
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-test-coverage',
  templateUrl: './test-coverage.component.html',
  styleUrls: ['./test-coverage.component.css'],
})
export class TestCoverageComponent implements OnInit {

  apiMax = 100;
  apiMin = 0;
  step = 1;
  thumbLabel = true;
  apiStartValue = 0;
  apiEndValue = 0;
  private subsPageItem: Subscription;
  private pageItems: CoveragePageModel[] = [];
  private coverageTable: CoverageTableGetModel;
  private tableTitle: string[] = [];

  constructor(
    private apiToolsCoveragePageService: ApiToolsCoveragePageService,
    private apiToolsCoverageTableService: ApiToolsCoverageTableService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('TestCoverageComponent | Work');
  }

  ngOnInit() {
    this.subsPageItem = this.apiToolsCoveragePageService.pageItem()
      .subscribe(
        data => {
          if (data !== null) {
            const sourcePageItems = <string[]>data['density'];
            this.pageItems = [];
            for(let i = 0; i < sourcePageItems.length; i++) {
              this.pageItems.push(new CoveragePageModel(sourcePageItems[i]));
            }
          }
        },
        (err) => {
          console.log('On Init : ', err);
        }
      );
  }

  createTable() {
    this.apiLogWriteService.writeLog('TestCoverageComponent | Create Table');
    let postApi = '';
    let postDensity = '';
    this.tableTitle = [];
    postApi = this.apiStartValue + ',' + this.apiEndValue;
    for (let i = 0; i < this.pageItems.length; i++) {
      if (this.pageItems[i].choose) {
        this.tableTitle.push(this.pageItems[i].density);
        if (postDensity.length == 0) {
          postDensity = this.pageItems[i].density;
        } else {
          postDensity = postDensity + ',' + this.pageItems[i].density;
        }
      }
    }
    const coverageTablePostModel = new CoverageTablePostModel(postApi, postDensity);
    this.apiToolsCoverageTableService.coverageTable(coverageTablePostModel).subscribe(
      data => {
        if (data !== null) {
          this.coverageTable = <CoverageTableGetModel>data;
        }
      },
      (err) => {
        console.log('Create Table', err);
      }
    );
  }
}
