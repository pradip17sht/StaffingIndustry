import { Injectable } from '@angular/core';
import { WebApiService } from 'src/core/services/web-api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {
    constructor(private api: WebApiService) { }

    getAllAssignmentDetail() {
        return this.api.get('assignment/allAssignmentDetail');
    }

    addAssignment(json): Observable<any> {
        return this.api.post('assignment/addAssignment', json);
      }
      updateAssignment(json): Observable<any> {
        return this.api.post('assignment/updateAssignment', json);
      }

      completeAssignment(json): Observable<any> {
        return this.api.post('assignment/completeAssignment', json);
      }
}
