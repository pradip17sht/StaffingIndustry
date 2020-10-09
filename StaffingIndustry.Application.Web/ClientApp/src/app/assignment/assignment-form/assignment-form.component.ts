import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MvEmployee } from 'src/app/employee/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';
import { MvJob } from 'src/app/job/job.model';
import { JobService } from 'src/app/job/job.service';
import { MvAssignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss']
})
export class AssignmentFormComponent implements OnInit {
  assignmentForm: FormGroup;
  employees = [];
  jobs = [];
  action: string;
  assignment: MvAssignment = {} as MvAssignment;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AssignmentFormComponent>,
    private es: EmployeeService,
    private js: JobService,
  ) {
    this.action = data.action;
    this.assignment = data.data || {};
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.assignmentForm = this.fb.group({
      assignmentName: [this.assignment.assignmentName, Validators.required],
      startDate: [this.assignment.startDate, Validators.required],
      endDate: [this.assignment.endDate, Validators.required],
      employeeId: [this.assignment.employeeId, Validators.required],
      jobId: [this.assignment.jobId, Validators.required],
      });
    this.fetchEmployees();
    this.fetchJobs();

  }

  fetchEmployees(): void {
    this.es.getAllEmployeeDetail().subscribe(res => {
      if (res && res.data) {
        res.data.forEach(item => {
          if (item.employeeId) {
            this.employees.push({
              value: item.employeeId,
              viewValue: `${item.employeeId}`
            });
          }
        });
      }
    }, err => console.log(err));
  }

  fetchJobs(): void {
    this.js.getAllJobDetail().subscribe(res => {
      if (res && res.data) {
        res.data.forEach(item => {
          if (item.jobId) {
            this.jobs.push({
              value: item.jobId,
              viewValue: `${item.jobTitle}`
            });
          }
        });
      }
    }, err => console.log(err));
  }

  cancelClick(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    this.assignment.assignmentName = this.assignmentForm.get('assignmentName').value;
    this.assignment.startDate = this.assignmentForm.get('startDate').value;
    this.assignment.endDate = this.assignmentForm.get('endDate').value;
    this.assignment.employeeId = this.assignmentForm.get('employeeId').value;
    this.assignment.jobId = this.assignmentForm.get('jobId').value;
    this.dialogRef.close(this.assignment);
  }
}
