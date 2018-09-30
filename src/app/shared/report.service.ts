import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }

  reportList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    pReportNo: new FormControl('', Validators.required),
    requestor: new FormControl('',  Validators.required),
    containerNo: new FormControl(''),
    sealNo: new FormControl(''),
    receivers: new FormControl('',  Validators.required),
    placeOfInspection: new FormControl(''),
    arrivalDate: new FormControl(''),
    inspectionDate: new FormControl(''),
    inspectionType: new FormControl(''),
    carrier: new FormControl('')

  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      pReportNo: '',
      requestor: '',
      containerNo: '',
      sealNo: '',
      receivers: '',
      placeOfInspection:'',
      arrivalDate: '',
      inspectionDate: '',
      inspectionType: '',
      carrier: ''
    });
  }

  getReports() {
    this.reportList = this.firebase.list('reports');
    return this.reportList.snapshotChanges();
    
  }

  insertReport(report){
    this.reportList.push({
      pReportNo:report.pReportNo,
      requestor: report.requestor,
      containerNo: report.containerNo,
      sealNo: report.sealNo,
      receivers: report.receivers,
      placeOfInspection: report.placeOfInspection,
      arrivalDate: this.datePipe.transform(report.arrivalDate,'yyyy-MM-dd'),
      inspectionDate: this.datePipe.transform(report.inspectionDate,'yyyy-MM-dd'),
      inspectionType: report.inspectionType,
      carrier: report.carrier
    });
  }
  updateReport(report){
    this.reportList.update(report.$key,
      {
        pReportNo:report.pReportNo,
        requestor: report.requestor,
        containerNo: report.containerNo,
        sealNo: report.sealNo,
        receivers: report.receivers,
        placeOfInspection: report.placeOfInspection,
        arrivalDate: report.arrivalDate,
        inspectionDate: report.inspectionDate,
        inspectionType: report.inspectionType,
        carrier: report.carrier
    });
  }
deleteReport($key: string) {
    this.reportList.remove($key);
}

populateForm(report){
  this.form.setValue(report);
}
}
