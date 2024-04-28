import { Injectable } from '@angular/core';
import { task } from './list/models/task';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }
  
  tareas: task[] = [
    { id: 1, description: 'Tarea 1', state: false },
    { id: 2, description: 'Tarea 2', state: true },
    { id: 3, description: 'Tarea 3', state: false },
    { id: 4, description: 'Tarea 4', state: true },
    { id: 5, description: 'Tarea 5', state: false },

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
  /*modificardescription*/
  


  


  




  
  
  
}
