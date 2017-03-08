import { Pipe, PipeTransform } from '@angular/core';

import { iEmployee } from './employee';

@Pipe({
    name: 'employeeFilter'
})

export class employeeFilterPipe implements PipeTransform {
    
    transform( value:iEmployee[], filterBy: String): iEmployee[] {
        filterBy= filterBy? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((employeeList:iEmployee)=>
        employeeList.suitColor.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
    }

}