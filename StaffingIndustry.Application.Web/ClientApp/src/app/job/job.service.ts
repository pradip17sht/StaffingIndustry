import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';


@Injectable({
    providedIn: 'root'
})
export class JobService {
    constructor(private api: WebApiService) { }

    getJob(jobId: number) {
        return this.api.get('job/jobdetail', JSON.stringify({ jobId: jobId }));
    }

    getAllJobDetail() {
        return this.api.get('job/alljobdetail');
    }

    addJob(json): Observable<any> {
        return this.api.post('job/addjob', json);
    }

    editJob(json): Observable<any> {
        return this.api.post('job/editjob', json);
    }

}
