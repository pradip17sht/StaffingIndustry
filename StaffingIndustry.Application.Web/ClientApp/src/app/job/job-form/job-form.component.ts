import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customer/customer.service';
import { MvJob } from '../job.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  customers = [];
  action: string;
  job: MvJob = {} as MvJob;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JobFormComponent>,
    private cs: CustomerService,
  ) {
    this.action = data.action;
    this.job = data.data || {};
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      customerId: [this.job.customerId, Validators.required],
      payPerHour: [this.job.payPerHour, Validators.required],
      jobTitle: [this.job.jobTitle, Validators.required],
      });
    this.fetchCustomers();

  }

  fetchCustomers(): void {
    this.cs.getAllCustomerDetail().subscribe(res => {
      if (res && res.data) {
        res.data.forEach(item => {
          if (item.customerId) {
            this.customers.push({
              value: item.customerId,
              viewValue: `${item.customerId}`
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
    this.job.customerId = this.jobForm.get('customerId').value;
    this.job.payPerHour = this.jobForm.get('payPerHour').value;
    this.job.jobTitle = this.jobForm.get('jobTitle').value;
    this.dialogRef.close(this.job);
  }
}
