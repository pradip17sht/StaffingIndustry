import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment.component';
import { AssignmentService } from './assignment.service';
import {CdkTableModule} from '@angular/cdk/table';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    {
        path: '',
        component: AssignmentComponent
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
    entryComponents: [
        AssignmentFormComponent
    ],

    declarations: [
        AssignmentComponent,
        AssignmentFormComponent

    ],
    providers: [
        AssignmentService
    ]
})

export class AssignmentModule {
}
