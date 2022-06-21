import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
