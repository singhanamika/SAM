import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
	

 

  
  welcome: string;
    games : [{
		index: number,
        game: string,
        platform : string,
        release : string
    }];
	
 
    
    constructor(){
        this.welcome = "Search Criteria"

        this.games = [{
			index: 1,
            game : "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release : "August 23"
        },
        {
			index: 2,
            game : "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release : "August 23"
        },
        {
			index: 3,
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        },
        {
			index: 4,
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        }]
    };
/*ngOnInit() {
	
  }	*/
}
