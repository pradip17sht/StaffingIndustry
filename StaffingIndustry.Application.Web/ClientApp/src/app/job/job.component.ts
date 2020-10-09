import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { JobFormComponent } from './job-form/job-form.component';
import { MvEditJob, MvJob } from './job.model';
import { JobService } from './job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  errorMessage = '';
  displayedColumns: string[];
  dataSource: MatTableDataSource<MvJob>;
  selectedJob: MvEditJob = <MvEditJob>{};
  selection = new SelectionModel<MvJob>(false, []);

  constructor(
    private jobService: JobService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['jobId', 'jobTitle', 'customerId', 'payPerHour'];
    this.getAllJobDetail();
  }
  getAllJobDetail() {
    this.jobService.getAllJobDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvJob>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvJob>();
        this.errorMessage = 'No Job available !';
      }
    });

  }

  addJob() {
    this.selection.clear();
    this.selectedJob = <MvJob>{};
    this.openDialog('Add');
  }

  editJob() {
    this.openDialog('Edit');
  }

  openDialog(action: string) {
    if (action === 'Edit' && !this.selection.hasValue()) {
      // this.utilityService.openSnackBar('Please Select Row first', 'warn');
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '25%';
    dialogConfig.panelClass = 'mat-form-dialog';
    dialogConfig.data = { data: this.selectedJob, action: action };
    const dialogRef = this.dialog.open(JobFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Edit') {
          this.jobService.editJob(result).subscribe(res => {
            // this.utilityService.openSnackBar('Job Edited', 'success');
            this.getAllJobDetail();
          });

        } else {
          this.jobService.addJob(result).subscribe(res => {
            // this.utilityService.openSnackBar('Job added successfully', 'success');
            this.getAllJobDetail();
          });
        }
      }

    });
  }

  selectRow(e: any, row: MvJob) {
    this.selectedJob = { ...row };
    this.selection.toggle(row);
  }
}
