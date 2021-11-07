import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name : string;
  date : string;
  amount : string;
  height : string;

  car ={
    make:'honda',
    model:'civic',
    year:2000

  }

  onNameChange(value:string){
    this.name = value
  }

  onDateChange(value:string){
    this.date = value
  }
  onAmountChange(value:string){
    this.amount = value
  }
  onHeightChange(value:string){
    this.height = value
  }
}
