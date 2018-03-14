import { EmailService } from 'app/email.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
	specific_name : Object
	Title = "Name of Courses";
/*Courses :[{
        id: string,
        name : string,
        
    }];*/
	Courses: any[];
  
	           
	

  constructor(service: EmailService) {
this.Courses = service.getCourses();
// Make instance/object of Service
//But this method is not good for unit testing coz objects are tightely coupled. 

/*let service = new EmailService();
this.Courses = service.getCourses(); */

// DEPENDENCY INJECTION


  }
/*  OnKeyUp(){
	
	console.log(this.search);
	
}*/
/*row(Courses){
	
console.log(this.Courses.name);

	
	
}*/
myDate = new Date();
clicked(C: any){

    this.specific_name = C

  }
  ngOnInit() {
  }

}

