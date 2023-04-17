import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = "formularz";

  imienazwisko: string = "";
  email: string = "Proszę podać email";
  produkt: string = "";
  ilosc: number = 0;
  wiadomosc: string = "Jeśli masz uwagi, wpisz je tu";


  onSubmit() {
    console.log(this.imienazwisko, "dziękujemy za zamówienie", this.produkt, "w ilości", this.ilosc, "Szczegóły zamówienia zostały wysłane na adres email", this.email, "Dziękujemy za uwagi", this.wiadomosc);
  }
}
