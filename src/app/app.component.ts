import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cynthia';

  constructor(private router : Router) {}
  Hasil() {
    this.router.navigate(['/hasil']);
  }

  satu(){
    this.ang =  "1";
  }
}
