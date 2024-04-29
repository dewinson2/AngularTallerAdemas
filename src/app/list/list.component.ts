import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{
  constructor(public TareasService:TareasService ) { }
  content: string = '';
  edit = true;
 editar(){
    this.edit = !this.edit;
 }

 Flod:string = 'Hola Mundo';

 }

 










 














  


