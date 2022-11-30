import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 
    public usuarios: Array<Usuario>;
    user:String ="";
    pass:String ="";

   

    constructor() { 
       this.usuarios=[
        new Usuario ('spinelf','12345'),
        new Usuario ('souldeep','12345')
      
      ];

  }

  ngOnInit() {

    console.log(this.usuarios)
    
    
  }

  public comprobarLogin () {
    

    }


  }


