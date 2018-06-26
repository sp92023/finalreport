import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { ApiAssetListService } from '../../shared/api/api-asset-list.service';
import { AssetListModel } from '../../model/test-unit/asset-list.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiTypeListService} from '../../shared/api/api-type-list.service';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-search-device',
  templateUrl: './search-device.component.html',
  styleUrls: ['./search-device.component.css']
})
export class SearchDeviceComponent implements OnInit, AfterViewInit {

  private subsAssetList: Subscription;
  private assets: AssetListModel[] = [];
  private searchValue = '';

  displayedColumns = ['account', 'asset_id', 'comment', 'current_user', 'model', 'password', 'phone_number', 'product', 'status', 'type']; // need modify
  dataSource: MatTableDataSource<AssetListModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private apiAssetListService: ApiAssetListService,
    private apiAssetModifyService: ApiAssetModifyService,
    private router: Router,
    private apiTypeListService: ApiTypeListService,
    private activatedRoute: ActivatedRoute,
    private apiLogWriteService: ApiLogWriteService
    ) {
    this.apiLogWriteService.writeLog('SearchDeviceComponent | Work');
    this.dataSource = new MatTableDataSource(this.assets);
    this.activatedRoute.params.subscribe( params => {
      if (params['value'] !== undefined) {
        this.searchValue = params['value'];
        this.search();
      }
    } );
  }

  ngOnInit() {
    this.subsAssetList = this.apiAssetListService.assetListChanged
      .subscribe(
        (assets: AssetListModel[]) => {
          this.assets = assets;
          this.dataSource = new MatTableDataSource(this.assets);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
  }


  // Set the paginator and sort after the view init since this component will
  // be able to query its view for the initialized paginator and sort.
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  search(): void {
    this.apiLogWriteService.writeLog('TestCoverageComponent | Search');
    this.apiAssetListService.assetList(this.searchValue);
  }

  goRouterNavigate(assetID: string): void {
    this.router.navigate(['test-unit/modify-device/' + assetID]);
  }
}
