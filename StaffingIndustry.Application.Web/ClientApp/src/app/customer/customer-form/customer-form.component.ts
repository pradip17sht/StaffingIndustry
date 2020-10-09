import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MvEditCustomer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit , AfterViewInit {

  customerForm: FormGroup;
  action: string;
  selectedCustomer: MvEditCustomer = <MvEditCustomer>{};

  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      dialogRef.disableClose = true;
      this.action = data.action;
      this.selectedCustomer = data.data || {};
    }

    ngOnInit(): void {
      this.customerForm = this.fb.group({
        organizationName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        phoneNo: ['', [Validators.required]],
        emailId: ['', [Validators.required]]
      });
    }

    onSubmit() {
      this.dialogRef.close(this.selectedCustomer);
    }
    onClose() {
      this.dialogRef.close();
    }
    ngAfterViewInit() {
      this.customerForm.updateValueAndValidity();
    }
}
