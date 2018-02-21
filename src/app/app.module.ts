import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

/*import { FilterPipe} from './filter.pipe';*/

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
	
  ],
  imports: [
    BrowserModule,
	FormsModule,
	Ng2SearchPipeModule,
	NgDatepickerModule
	
	

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
