import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { JobComponent } from './job.component';
import { JobService } from './job.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    {
        path: '',
        component: JobComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatFormFieldModule,
        HttpClientModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatDialogModule,
        MatSnackBarModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        JobComponent,
        JobFormComponent

    ],
    providers: [
        JobService
    ],
    exports: [
        JobComponent
    ]

})

export class JobModule {
}
