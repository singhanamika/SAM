//import { FormsModule, ReactiveFormModule } from '@angular/forms';
//import { OverlayModule } from "angular-io-overlay";
//import { DatePickerModule } from "angular-io-datepicker/src/datepicker/index";

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipe } from 'app/filter.pipe'  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import { NgDatepickerModule } from 'ng2-datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from 'app/email.service';
//import { MaterialModule } from '@angular/material';
//import { DatePickerModule } from 'angular-material-datepicker';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
	FilterPipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
	//ReactiveFormModule,
   // OverlayModule,
    //DatePickerModule,
	//NgDatepickerModule
	//MaterialModule.forRoot(),
        //DatePickerModule
	BrowserAnimationsModule,
	MaterialModule,            // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule    
  ],
  providers: [
 
  EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
