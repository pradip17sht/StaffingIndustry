import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private api: WebApiService) { }

    getEmployee(employeeId: number) {
        return this.api.get('employee/employeedetail', JSON.stringify({ employeeId: employeeId }));
    }

    getAllEmployeeDetail() {
        return this.api.get('employee/allemployeedetail');
    }

    addEmployee(json): Observable<any> {
        return this.api.post('employee/addemployee', json);
    }

    editEmployee(json): Observable<any> {
        return this.api.post('employee/editemployee', json);
    }

}
