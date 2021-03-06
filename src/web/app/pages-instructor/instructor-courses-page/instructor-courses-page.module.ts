import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  CoursePermanentDeletionConfirmModalComponent,
} from './course-permanent-deletion-confirm-modal/course-permanent-deletion-confirm-modal.component';
import {
  CourseSoftDeletionConfirmModalComponent,
} from './course-soft-deletion-confirm-modal/course-soft-deletion-confirm-modal.component';
import { InstructorCoursesPageComponent } from './instructor-courses-page.component';

/**
 * Module for instructor courses page.
 */
@NgModule({
  declarations: [
    InstructorCoursesPageComponent,
    CourseSoftDeletionConfirmModalComponent,
    CoursePermanentDeletionConfirmModalComponent,
  ],
  exports: [
    InstructorCoursesPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  entryComponents: [
    CourseSoftDeletionConfirmModalComponent,
    CoursePermanentDeletionConfirmModalComponent,
  ],
})
export class InstructorCoursesPageModule { }
