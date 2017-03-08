import { Component} from '@angular/core';




@Component ({
   selector: "sr-employeeList",
   templateUrl: "app/EmployeeList/employeeList.component.html",
   styleUrls: ["app/EmployeeList/employeeList.component.css"]



})

export class EmployeelistComponent {
	panelTitle: string = "Superhero List";
	buttonTitle: string = "There is no going back";
	bold: string = "bold";
	showNames: boolean = false;
	color: string = "color";
	employeeList: any[] = [
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
}