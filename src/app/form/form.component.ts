import { Component,OnInit, Output, output,EventEmitter } from '@angular/core';
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




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



 check = false;

Description = '';
  agregarTarea() {
    this.TareasService.agregarTarea( this.Description,"Hola" );
    this.Description = '';
  }

   changecheck(){
    this.check = !this.check;
  }
  ;
  }








  
  

