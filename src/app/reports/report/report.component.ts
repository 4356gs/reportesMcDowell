import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ReportService } from '../../shared/report.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  constructor(private service: ReportService,
      private notificationService: NotificationService,
      public dialogRef: MatDialogRef<ReportComponent>) { }

  inspectionType = [
    { id: 1, value: "Devaning"},
    { id: 2, value: "Tally"},
    { id: 3, value: "Cross-stuffing"},
    { id: 4, value: "Discharge"},
    { id: 5, value: "Loading"},
    { id: 6, value: "Other / See Comments"}
  ]

  carrier = [
    { id: 1, value: "Maersk"},
    { id: 2, value: "MSC"},
    { id: 3, value: "CMA-CGM"},
    { id: 4, value: "Hamburg Sud"},
    { id: 5, value: "Evergreen"},
    { id: 6, value: "King Ocean Services"}
  ]

  ngOnInit() {
    this.service.getReports();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if(this.service.form.valid) {
      if(!this.service.form.get('$key').value)
        this.service.insertReport(this.service.form.value);
      else
        this.service.updateReport(this.service.form.value);  
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully')
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
