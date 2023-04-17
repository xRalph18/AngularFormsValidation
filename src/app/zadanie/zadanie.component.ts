import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent {
  imienazwisko: string = "";
  ocena: number = 5;
  status: string = "";

  onClick(){
    console.log(this.imienazwisko, "ocenia usługi na", this.ocena, "gwiazdek")
  }
}
