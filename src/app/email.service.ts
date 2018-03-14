import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
	
	getCourses(){
		
		return [{id: '1', name: 'course1'},
		{id: '12', name: 'course4'},
		{id: '13', name: 'course5'},
		{id: '100', name: 'course100'},
		{id: '2', name: 'course2'},
		{id: '3', name: 'course3'}
		];
		
	}

  constructor() { }

}
