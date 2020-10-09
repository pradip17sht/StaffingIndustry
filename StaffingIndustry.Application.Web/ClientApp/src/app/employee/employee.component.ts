import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MvEditEmployee, MvEmployee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  errorMessage = '';
  displayedColumns: string[];
  dataSource: MatTableDataSource<MvEmployee>;
  selectedEmployee: MvEditEmployee = <MvEditEmployee>{};
  selection = new SelectionModel<MvEmployee>(false, []);

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['personId', 'employeeId', 'firstName', 'middleName', 'lastName', 'city', 'state', 'phoneNo', 'emailId'];
    this.getAllEmployeeDetail();
  }
  getAllEmployeeDetail() {
    this.employeeService.getAllEmployeeDetail().subscribe((response: any) => {
      if (response && response.data) {
        this.dataSource = new MatTableDataSource<MvEmployee>(response.data);
      } else {
        this.dataSource = new MatTableDataSource<MvEmployee>();
        this.errorMessage = 'No employee available !';
      }
    });

  }

  addEmployee() {
    this.selection.clear();
    this.selectedEmployee = <MvEmployee>{};
    this.openDialog('Add');
  }

  editEmployee() {
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
    dialogConfig.data = { data: this.selectedEmployee, action: action };
    const dialogRef = this.dialog.open(EmployeeFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Edit') {
          this.employeeService.editEmployee(result).subscribe(res => {
            // this.utilityService.openSnackBar('Employee Edited', 'success');
            this.getAllEmployeeDetail();
          });

        } else {
          this.employeeService.addEmployee(result).subscribe(res => {
            // this.utilityService.openSnackBar('Employee added successfully', 'success');
            this.getAllEmployeeDetail();
          });
        }
      }

    });
  }

  selectRow(e: any, row: MvEmployee) {
    this.selectedEmployee = { ...row };
    this.selection.toggle(row);
  }
}
