import { Component,OnInit, Output, output,EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
constructor(public TareasService:TareasService ) { }
  ejecutarMetodo(){
    this.TareasService.ejecutarMetodo();
  }


   name = '';
   description = '';




  ngOnInit() {
    
  }



 

Description = '';
  agregarTarea() {
    this.TareasService.agregarTarea( this.Description,"Hola" );
    this.Description = '';
  }

   
  
  }








  
  

