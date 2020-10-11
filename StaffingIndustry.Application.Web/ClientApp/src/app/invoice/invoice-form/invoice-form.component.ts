import { MvInvoice } from './../invoice.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MvTransaction } from 'src/app/transaction/transaction.model';
import { TransactionService } from 'src/app/transaction/transaction.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  transactions = [];
  action: string;
  invoice: MvInvoice = {} as MvInvoice;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InvoiceFormComponent>,
    private ts: TransactionService,
  ) {
    this.action = data.action;
    this.invoice = data.data || {};
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      transactionId: [this.invoice.transactionId, Validators.required]
      });
    this.fetchTransactions();

  }

  fetchTransactions(): void {
    this.ts.getAllTransactionDetail().subscribe(res => {
      if (res && res.data) {
        res.data.forEach(item => {
          if (item.transactionId) {
            this.transactions.push({
              value: item.transactionId,
              viewValue: `${item.transactionId}`
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
    this.invoice.transactionId = this.invoiceForm.get('transactionId').value;
    this.dialogRef.close(this.invoice);
  }
}
