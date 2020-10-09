import { MvTransaction } from './../transaction.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssignmentService } from 'src/app/assignment/assignment.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;
  assignments = [];
  action: string;
  transaction: MvTransaction = {} as MvTransaction;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TransactionFormComponent>,
    private as: AssignmentService,
  ) {
    this.action = data.action;
    this.transaction = data.data || {};
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      assignmentId: [this.transaction.assignmentId, Validators.required],
      payPerHour: [this.transaction.payPerHour, Validators.required],
      workHours: [this.transaction.workHours, Validators.required],
      });
    this.fetchAssignments();

  }

  fetchAssignments(): void {
    this.as.getAllAssignmentDetail().subscribe(res => {
      if (res && res.data) {
        res.data.forEach(item => {
          if (item.AssignmentId) {
            this.assignments.push({
              value: item.AssignmentId,
              viewValue: `${item.AssignmentId}`
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
    this.transaction.assignmentId = this.transactionForm.get('assignmentId').value;
    this.transaction.payPerHour = this.transactionForm.get('payPerHour').value;
    this.transaction.workHours = this.transactionForm.get('workHours').value;
    this.dialogRef.close(this.transaction);
  }
}
