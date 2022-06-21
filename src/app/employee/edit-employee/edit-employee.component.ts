import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/interface/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employee:Employee ={
    firstName: '',
    lastName:'',
    city:'',
    title:'',
    hireDate:new Date(),
    birthDate:new Date(),
    region:0,
    reportsTo:0,
    titleOfCourtesy:''
  
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 setData(ngForm:NgForm){
  this.employee ={
    firstName: 'Smith',
    lastName:'Doe',
    city:'Auror',
    title:'Manager',
    hireDate:new Date(),
    birthDate:new Date(),
    region:2,
    reportsTo:4,
    titleOfCourtesy:'Mr.'
  
  }
  ngForm.setValue(this.employee)
 
}
editEmployee(ngForm:NgForm)
{}
}
