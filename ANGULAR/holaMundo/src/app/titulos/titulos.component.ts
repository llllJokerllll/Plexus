import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre: String = "Maria";
  apellido: String = "Perez";
  alumno: any = {
    nombre: "Juan",
    apellido: "Marlo"
  }
  nuevoInput: String = "Esto es un nuevo input";
  correo: String = "";
  password: String = "";

  imagen: String = "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png";
  constructor() { }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.correo);
    console.log(this.password);
  }
}
