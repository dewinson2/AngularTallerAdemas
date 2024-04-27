import { Injectable } from '@angular/core';
import { task } from './list/models/task';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }
  
  tareas: task[] = [

  ];
  agregarTarea( description: string ) {
    const tarea = new task( description );
    this.tareas.push( tarea );
    console.log( this.tareas );
    tarea.id = this.tareas.length;
  }
  eliminarTarea( id: number ) {
    this.tareas = this.tareas.filter( tarea => tarea.id !== id );
  }


  


  




  
  
  
}
