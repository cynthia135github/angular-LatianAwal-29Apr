import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cynthia';
  ang = "";

  constructor(private router : Router) {}
  Hasil() {
    this.router.navigate(['/hasil']);
  }

  satu(){
    this.ang +=  "1";
  }
  dua(){
    this.ang +=  "2";
  }
  tiga(){
    this.ang +=  "3";
  }
  empat(){
    this.ang +=  "4";
  }
  lima(){
    this.ang +=  "5";
  }
  enam(){
    this.ang +=  "6";
  }
  tujuh(){
    this.ang +=  "7";
  }
  delapan(){
    this.ang +=  "8";
  }
  sembilan(){
    this.ang +=  "9";
  }
}
