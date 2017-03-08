import { Component, OnInit} from '@angular/core';
import { iEmployee } from './employee';




@Component ({
   selector: "sr-employeeList",
   moduleId: module.id,
   templateUrl: "employeeList.component.html",
   styleUrls: ["employeeList.component.css"]
})


export class EmployeelistComponent implements OnInit {
	panelTitle: string = "Superhero List";
	buttonTitle: string = "There is no going back";
	bold: string = "bold";
	showNames: boolean = false;
	listFilter: string = "black";
	employeeList: iEmployee[] = [
		{
			"realName" : "Bruce Wayne",
			"name": "Batman",
			"superPower": "none",
			"suitColor": "black"
		},
		{
			"realName" : "Clark Kent",
			"name": "Superman",
			"superPower": "everything",
			"suitColor": "blue"
		},
		{
			"realName" : "Peter Parker",
			"name": "Spiderman",
			"superPower": "Spider sense",
			"suitColor": "red"
		}

	];

	revealNames(): void {
		this.showNames = !this.showNames;
	}
	ngOnInit(): void {
		console.log('OnInit initialised...')
	}
}