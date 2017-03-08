import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { EmployeelistComponent } from './EmployeeList/employeeList.component';
import {employeeFilterPipe } from './EmployeeList/employee-filter.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeelistComponent, employeeFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
