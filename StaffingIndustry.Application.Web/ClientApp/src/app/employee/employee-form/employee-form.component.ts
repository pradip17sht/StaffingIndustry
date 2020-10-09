import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MvEditEmployee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit , AfterViewInit {

  employeeForm: FormGroup;
  action: string;
  selectedEmployee: MvEditEmployee = <MvEditEmployee>{};

  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      dialogRef.disableClose = true;
      this.action = data.action;
      this.selectedEmployee = data.data || {};
    }

    ngOnInit(): void {
      this.employeeForm = this.fb.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        phoneNo: ['', [Validators.required]],
        emailId: ['', [Validators.required]]
      });
    }

    onSubmit() {
      this.dialogRef.close(this.selectedEmployee);
    }
    onClose() {
      this.dialogRef.close();
    }
    ngAfterViewInit() {
      this.employeeForm.updateValueAndValidity();
    }
}
