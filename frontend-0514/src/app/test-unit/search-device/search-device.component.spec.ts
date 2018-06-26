import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ViewChild} from '@angular/core';
import { SearchDeviceComponent } from './search-device.component';
import {AssetListModel} from '../../model/test-unit/asset-list.model';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiAssetListService} from '../../shared/api/api-asset-list.service';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {ApiTypeListService} from '../../shared/api/api-type-list.service';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiLogWriteService } from '../../shared/api/api-log-write.service';

describe('SearchDeviceComponent', () => {
  let comp: SearchDeviceComponent;
  let fixture: ComponentFixture<SearchDeviceComponent>;
  // const dataSource: MatTableDataSource<AssetListModel>;
  // const assets: AssetListModel[] = [];
  // this.dataSource = new MatTableDataSource(this.assets);
  beforeEach(() => {
    const apiAssetListServiceStub = {
      assetListChanged: {
        subscribe: () => ({})
      },
      assetList: () => {},
      getAssetList: () => {}
    };
    const apiAssetModifyServiceStub = {
      assetModifyChanged: {
        subscribe: () => ({})
      },
      assetPage: () => ({}),
      getAssetModify: () => ({})
    };
    const routerStub = {
      navigate: () => ({})
    };
    const apiTypeListServiceStub = {
      typeList: () => ({})
    };
    const activatedRouteStub = {
      params: {
        subscribe: () => ({})
      },
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    TestBed.configureTestingModule({
      // @NgModule ({
      declarations: [ SearchDeviceComponent,
        // MatTableDataSource
        // AssetListModel
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ApiAssetListService, useValue: apiAssetListServiceStub },
        { provide: ApiAssetModifyService, useValue: apiAssetModifyServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: ApiTypeListService, useValue: apiTypeListServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
      ]
    });
    fixture = TestBed.createComponent(SearchDeviceComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  it('created', () => {
    const apiAssetListService = fixture.debugElement.injector.get(ApiAssetListService);
    const apiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    const router = fixture.debugElement.injector.get(Router);
    const apiTypeListService = fixture.debugElement.injector.get(ApiTypeListService);
    const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    expect(apiAssetListService).toBeTruthy();
    expect(apiAssetModifyService).toBeTruthy();
    expect(router).toBeTruthy();
    expect(apiTypeListService).toBeTruthy();
    expect(activatedRoute).toBeTruthy();
  });
  it('call search', async(() => {
    spyOn(comp, 'search').and.callThrough();
    this.apiAssetListService = fixture.debugElement.injector.get(ApiAssetListService);
    spyOn(this.apiAssetListService, 'assetList').and.callThrough();
    // jasmine.createSpy('assetList').and.callThrough();
    // expect(spysearch).toHaveBeenCalled();
    comp.search();
    fixture.detectChanges();
    expect(comp.search).toHaveBeenCalled();
    // expect(this.apiAssetListService.assetList).toHaveBeenCalled();
    // comp.searchValue = '123';
    // comp.apiAssetListService.assetList(comp.searchValue);
  }));
  it('call ngAfterViewInit', async(() => {
    spyOn(comp, 'ngAfterViewInit').and.callThrough();
    // const spyngAfterViewInit = spyOn(comp, 'ngAfterViewInit').and.callThrough();
    comp.ngAfterViewInit();
    fixture.detectChanges();
    expect(comp.ngAfterViewInit).toHaveBeenCalled();
  }));
  it('applyFilter', async(() => {
    this.dataSource = new MatTableDataSource<AssetListModel>();
    comp.applyFilter('APple');
    expect(comp.dataSource.filter).toEqual('apple');
  }));
  it('call goRouterNavigate', async(() => {
    spyOn(comp, 'goRouterNavigate').and.callThrough();
    const apiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    const router = fixture.debugElement.injector.get(Router);
    spyOn(apiAssetModifyService, 'assetPage').and.callThrough();
    spyOn(router, 'navigate');
    comp.goRouterNavigate('');
    fixture.detectChanges();
    expect(comp.goRouterNavigate).toHaveBeenCalled();
    // expect(apiAssetModifyService.assetPage).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  }));
  it('tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const li = compiled.querySelectorAll('li.breadcrumb-item');
    expect(li[0].textContent).toContain('Test Unit');
    expect(li[1].textContent).toContain('Search');
    expect(compiled.querySelector('button').textContent).toContain('Search');
  });
  it('ngOnInit', () => {
    spyOn(comp, 'ngOnInit').and.callThrough();
    const apiAssetListService = fixture.debugElement.injector.get(ApiAssetListService);
    spyOn(apiAssetListService, 'assetListChanged').and.callThrough();
    // this.apiAssetListService.assetListChanged('');
    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalled();
   // expect(apiAssetListService.assetListChanged).toHaveBeenCalled();
    // expect(this.dataSource.paginator).toEqual(this.paginator);
  });
});
