import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { EmployeelistComponent } from './EmployeeList/employeeList.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeelistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
