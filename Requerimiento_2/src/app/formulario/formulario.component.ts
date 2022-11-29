import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 
    public usuarios: Array<Usuario>;

    constructor() { 
       this.usuarios=[
        new Usuario ('spinelf','12345'),
        new Usuario ('souldeep','12345')
      
      ];

  }

  ngOnInit() {

    console.log(this.usuarios)
  }

}
