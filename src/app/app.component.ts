//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  producto = {
    nombre: "computadora",
    precio: 188
  }
  tasaCambio = 1.07
  str = "texTO pArA TransFOrMaR"
  fecha = Date.now()
}