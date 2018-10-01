(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-reports></app-reports>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'McdowellReport';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _reports_report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/report/report.component */ "./src/app/reports/report/report.component.ts");
/* harmony import */ var _shared_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/report.service */ "./src/app/shared/report.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/report-list/report-list.component */ "./src/app/reports/report-list/report-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_8__["ReportsComponent"],
                _reports_report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"],
                _reports_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__["ReportListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_shared_report_service__WEBPACK_IMPORTED_MODULE_10__["ReportService"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_reports_report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/reports/report-list/report-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/reports/report-list/report-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/report-list/report-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/reports/report-list/report-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n  <button mat-raised-button (click)=\"onCreate()\">\n      <mat-icon>add</mat-icon>Create\n  </button>\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n      <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n      <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"*ngIf=\"searchKey\"  (click)=\"onSearchClear()\">\n        <mat-icon>close</mat-icon>\n      </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"listData\" matSort>\n    <ng-container matColumnDef=\"pReportNo\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Report No</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.pReportNo}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"receivers\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Receivers</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.receivers}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"container\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Place of Inspection</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.placeOfInspection}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"onEdit(row)\">\n          <mat-icon>launch</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"onDelete(row)\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspam=\"6\">\n        Loading data....\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n        <mat-footer-cell *matFooterCellDef colspam=\"6\">\n          No data....\n        </mat-footer-cell>\n      </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData!=null && listData.data.length==0)}\"></mat-footer-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/reports/report-list/report-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reports/report-list/report-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/report.service */ "./src/app/shared/report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report/report.component */ "./src/app/reports/report/report.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(service, dialog, notificationService) {
        this.service = service;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.displayedColumns = ['pReportNo', 'receivers', 'container', 'actions'];
    }
    ReportListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getReports().subscribe(function (list) {
            var array = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](array);
            _this.listData.sort = _this.sort;
            _this.listData.paginator = _this.paginator;
            _this.listData.filterPredicate = function (data, filter) {
                return _this.displayedColumns.some(function (ele) {
                    return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
                });
            };
        });
    };
    ReportListComponent.prototype.onSearchClear = function () {
        this.searchKey = "";
        this.applyFilter();
    };
    ReportListComponent.prototype.applyFilter = function () {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    };
    ReportListComponent.prototype.onCreate = function () {
        this.service.initializeFormGroup();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"], dialogConfig);
    };
    ReportListComponent.prototype.onEdit = function (row) {
        this.service.populateForm(row);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"], dialogConfig);
    };
    ReportListComponent.prototype.onDelete = function ($key) {
        if (confirm('Do you really want to delete this record ?')) {
            this.service.deleteReport($key);
            this.notificationService.warn('Deleted Successfully!');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReportListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReportListComponent.prototype, "paginator", void 0);
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/reports/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.css */ "./src/app/reports/report-list/report-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], ReportListComponent);
    return ReportListComponent;
}());



/***/ }),

/***/ "./src/app/reports/report/report.component.css":
/*!*****************************************************!*\
  !*** ./src/app/reports/report/report.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/report/report.component.html":
/*!******************************************************!*\
  !*** ./src/app/reports/report/report.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span>{{service.form.controls['$key'].value?\"Edit Report\":\"New Report\"}}</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabindex=\"-1\">\n        <mat-icon>clear</mat-icon>\n    </button>\n</mat-toolbar>\n\n<form [formGroup]=\"service.form\" class=\"normal-form\" (submit)=\"onSubmit()\">\n    <mat-tab-group>\n        <mat-tab label=\"1.0 General details\">\n            <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <input type=\"hidden\" formControlName=\"$key\">\n                        <mat-form-field>\n                            <input formControlName=\"pReportNo\" matInput placeholder=\"Report No. *\">\n                            <mat-error>This field is mandatory</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"containerNo\" matInput placeholder=\"Container No\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"receivers\" matInput placeholder=\"Receivers *\">\n                            <mat-error>This field is mandatory</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"arrivalDate\" matInput [matDatepicker]=\"pickerd\" placeholder=\"Date of Arrival\">\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerd\"></mat-datepicker-toggle>\n                            <mat-datepicker #pickerd></mat-datepicker>\n                            <mat-error>This field is mandatory</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"inspectionType\" placeholder=\"Type of Inspection\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let inspectionType of inspectionType\">\n                                    <mat-option value=\"{{inspectionType.id}}\">{{inspectionType.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <input type=\"hidden\" formControlName=\"$key\">\n                        <mat-form-field>\n                            <input formControlName=\"requestor\" matInput placeholder=\"Requestor *\">\n                            <mat-error>This field is mandatory</mat-error>\n                            <mat-error *ngIf=\"service.form.controls['requestor'].error?.required\">This field is\n                                mandatory</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"sealNo\" matInput placeholder=\"Seal No.\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"placeOfInspection\" matInput placeholder=\"Place of Inspection\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"inspectionDate\" matInput [matDatepicker]=\"picker\" placeholder=\"Date of Inspection\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                            <mat-error>This field is mandatory</mat-error>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"carrier\" matInput placeholder=\"Carrier\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let carrier of carrier\">\n                                    <mat-option value=\"{{carrier.id}}\">{{carrier.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n            </mat-grid-list>\n\n\n        </mat-tab>\n        <mat-tab label=\"2.0 Transport details\">\n            <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <mat-form-field>\n                            <input formControlName=\"blNo\" matInput placeholder=\"BL No.\">\n                            <!-- <mat-error>This field is mandatory</mat-error> -->\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"polNo\" matInput placeholder=\"POL\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"transferAtPort\" placeholder=\"Transfer At Port Of\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let port of port\">\n                                    <mat-option value=\"{{port.id}}\">{{port.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <mat-form-field>\n                            <mat-select formControlName=\"packingType\" placeholder=\"Type of Packing\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let packingType of packingType\">\n                                    <mat-option value=\"{{packingType.id}}\">{{packingType.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <input formControlName=\"pod\" matInput placeholder=\"POD\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"onDate\" matInput [matDatepicker]=\"pickerOnDate\" placeholder=\"OnDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"pickerOnDate\"></mat-datepicker-toggle>\n                            <mat-datepicker #pickerOnDate></mat-datepicker>\n                        </mat-form-field>\n\n                    </div>\n                </mat-grid-tile>\n            </mat-grid-list>\n\n\n\n        </mat-tab>\n        <mat-tab label=\"3.0 Consignement details\">\n            <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <mat-form-field>\n                            <input formControlName=\"cargoDeclaredAs\" matInput placeholder=\"Cargo Declare As\">\n                            <!-- <mat-error>This field is mandatory</mat-error> -->\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input formControlName=\"weight\" matInput placeholder=\"Weight in Kg\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"unitType\" placeholder=\"Type Of Unit\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let unitType of unitType\">\n                                    <mat-option value=\"{{unitType.id}}\">{{unitType.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                    <div class=\"controles-container\">\n                        <mat-form-field>\n                            <input formControlName=\"quantity\" matInput placeholder=\"Quantity\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"stowageType\" placeholder=\"Type of Stowage\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let stowageType of stowageType\">\n                                    <mat-option value=\"{{stowageType.id}}\">{{stowageType.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <mat-select formControlName=\"damageType\" placeholder=\"Type of Damage\">\n                                <mat-option>None</mat-option>\n                                <ng-container *ngFor=\"let damageType of damageType\">\n                                    <mat-option value=\"{{damageType.id}}\">{{damageType.value}}</mat-option>\n                                </ng-container>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-grid-tile>\n            </mat-grid-list>\n        </mat-tab>\n        <mat-tab label=\"4.0 Comments\">\n            <mat-form-field class=\"example-full-width\">\n                <textarea formControlName=\"description\" autosize matInput placeholder=\"Brief description of inspection details:\"></textarea>\n            </mat-form-field> \n            <mat-form-field class=\"example-full-width\">\n                    <textarea formControlName=\"conclusion\" autosize matInput placeholder=\"Conclusion:\"></textarea>\n                </mat-form-field>\n        </mat-tab>\n    </mat-tab-group>\n\n\n\n\n\n\n\n\n\n\n\n    <div class=\"button-row\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\n        <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/reports/report/report.component.ts":
/*!****************************************************!*\
  !*** ./src/app/reports/report/report.component.ts ***!
  \****************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/report.service */ "./src/app/shared/report.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = /** @class */ (function () {
    function ReportComponent(service, notificationService, dialogRef) {
        this.service = service;
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
        this.inspectionType = [
            { id: 1, value: "Devaning" },
            { id: 2, value: "Tally" },
            { id: 3, value: "Cross-stuffing" },
            { id: 4, value: "Discharge" },
            { id: 5, value: "Loading" },
            { id: 6, value: "Other / See Comments" }
        ];
        this.carrier = [
            { id: 1, value: "Maersk" },
            { id: 2, value: "MSC" },
            { id: 3, value: "CMA-CGM" },
            { id: 4, value: "Hamburg Sud" },
            { id: 5, value: "Evergreen" },
            { id: 6, value: "King Ocean Services" }
        ];
        this.port = [
            { id: 1, value: "Caucedo" },
            { id: 2, value: "Rio Haina" },
            { id: 3, value: "Miami" },
            { id: 4, value: "Port Everglades" },
            { id: 5, value: "Jacksonville" },
            { id: 6, value: "Not Applicable" }
        ];
        this.packingType = [
            { id: 1, value: "Cardboard Boxes" },
            { id: 2, value: "Bags" },
            { id: 3, value: "Drums" },
            { id: 4, value: "Steel Container" },
            { id: 5, value: "Plastic Container" },
            { id: 6, value: "IBC" },
            { id: 7, value: "Big Bag" }
        ];
        this.damageType = [
            { id: 1, value: "Missing" },
            { id: 2, value: "Wet" },
            { id: 3, value: "Broken" },
            { id: 4, value: "Short Landing" },
            { id: 5, value: "None" },
            { id: 6, value: "See comments" },
            { id: 7, value: "Damage to Unit Only" },
            { id: 8, value: "Damage to Cargo Only" }
        ];
        this.stowageType = [
            { id: 1, value: "Palletized" },
            { id: 2, value: "Loose" },
            { id: 3, value: "Bulk" }
        ];
        this.unitType = [
            { id: 1, value: "Dry Van " },
            { id: 2, value: "Refrigerated" },
            { id: 3, value: "Flat Rack" },
            { id: 4, value: "Open Top" },
            { id: 5, value: "FlatBulk" }
        ];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.service.getReports();
    };
    ReportComponent.prototype.onClear = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
    };
    ReportComponent.prototype.onSubmit = function () {
        if (this.service.form.valid) {
            if (!this.service.form.get('$key').value)
                this.service.insertReport(this.service.form.value);
            else
                this.service.updateReport(this.service.form.value);
            console.log(this.service.form.value);
            this.service.form.reset();
            this.service.initializeFormGroup();
            this.notificationService.success(':: Submitted successfully');
            this.onClose();
        }
    };
    ReportComponent.prototype.onClose = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/reports/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/reports/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <span>MCDowell ERP</span>\n    <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n  <app-report-list></app-report-list>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 4500,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    NotificationService.prototype.success = function (msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.warn = function (msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    ;
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/report.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/report.service.ts ***!
  \******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(firebase, datePipe) {
        this.firebase = firebase;
        this.datePipe = datePipe;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            pReportNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            requestor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            containerNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            sealNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            receivers: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            placeOfInspection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inspectionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inspectionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            carrier: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            blNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            polNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            transferAtPort: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            packingType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pod: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            onDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cargoDeclaredAs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            unitType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            stowageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            damageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ReportService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            $key: null,
            pReportNo: '',
            requestor: '',
            containerNo: '',
            sealNo: '',
            receivers: '',
            placeOfInspection: '',
            arrivalDate: '',
            inspectionDate: '',
            inspectionType: '',
            carrier: '',
            blNo: '',
            polNo: '',
            transferAtPort: '',
            packingType: '',
            pod: '',
            onDate: '',
            cargoDeclaredAs: '',
            weight: '',
            unitType: '',
            quantity: '',
            stowageType: '',
            damageType: '',
            description: '',
            conclusion: ''
        });
    };
    ReportService.prototype.getReports = function () {
        this.reportList = this.firebase.list('reports');
        return this.reportList.snapshotChanges();
    };
    ReportService.prototype.insertReport = function (report) {
        this.reportList.push({
            pReportNo: report.pReportNo,
            requestor: report.requestor,
            containerNo: report.containerNo,
            sealNo: report.sealNo,
            receivers: report.receivers,
            placeOfInspection: report.placeOfInspection,
            arrivalDate: this.datePipe.transform(report.arrivalDate, 'yyyy-MM-dd'),
            inspectionDate: this.datePipe.transform(report.inspectionDate, 'yyyy-MM-dd'),
            inspectionType: report.inspectionType,
            carrier: report.carrier,
            blNo: report.blNo,
            polNo: report.polNo,
            transferAtPort: report.transferAtPort,
            packingType: report.packingType,
            pod: report.pod,
            onDate: this.datePipe.transform(report.onDate, 'yyyy-MM-dd'),
            cargoDeclaredAs: report.cargoDeclaredAs,
            weight: report.weight,
            unitType: report.unitType,
            quantity: report.quantity,
            stowageType: report.stowageType,
            damageType: report.damageType,
            description: report.description,
            conclusion: report.conclusion
        });
    };
    ReportService.prototype.updateReport = function (report) {
        this.reportList.update(report.$key, {
            pReportNo: report.pReportNo,
            requestor: report.requestor,
            containerNo: report.containerNo,
            sealNo: report.sealNo,
            receivers: report.receivers,
            placeOfInspection: report.placeOfInspection,
            arrivalDate: this.datePipe.transform(report.arrivalDate, 'yyyy-MM-dd'),
            inspectionDate: this.datePipe.transform(report.inspectionDate, 'yyyy-MM-dd'),
            inspectionType: report.inspectionType,
            carrier: report.carrier,
            blNo: report.blNo,
            pol: report.pol,
            transferAtPort: report.transferAtPort,
            packingType: report.packingType,
            pod: report.pod,
            onDate: this.datePipe.transform(report.onDate, 'yyyy-MM-dd'),
            cargoDeclaredAs: report.cargoDeclaredAs,
            weight: report.weight,
            unitType: report.unitType,
            quantity: report.quantity,
            stowageType: report.stowageType,
            damageType: report.damageType,
            description: report.description,
            conclusion: report.conclusion
        });
    };
    ReportService.prototype.deleteReport = function ($key) {
        this.reportList.remove($key);
    };
    ReportService.prototype.populateForm = function (report) {
        this.form.setValue(report);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCT7LDEYXnBpS8ICcXzJFyhs6G1un30xV4",
        authDomain: "mcdowell-dde9b.firebaseapp.com",
        databaseURL: "https://mcdowell-dde9b.firebaseio.com",
        projectId: "mcdowell-dde9b",
        storageBucket: "mcdowell-dde9b.appspot.com",
        messagingSenderId: "40406808804"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\clientes\McDowell\reportesmcdowellapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map