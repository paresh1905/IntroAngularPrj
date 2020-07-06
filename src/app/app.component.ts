import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedHeaderItem : any = 'recipes';

  checkWhichHeaderWasClicked(headerData : any){
    console.log(headerData);
    this.clickedHeaderItem = headerData;
  }
}
