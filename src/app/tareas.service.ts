import { Injectable } from '@angular/core';
import { task } from './list/models/task';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

   private metodoSubjet = new Subject<void>();
    metodoObservable$ = this.metodoSubjet.asObservable();
    ejecutarMetodo() {
      this.metodoSubjet.next();
    }






























  tareas: task[] = [
    {
      id: 1,
      description: 'Tarea 1',
      state: true,
      name: 'Hola'
    },
    {
      id: 2,
      description: 'Tarea 2',
      state: false,
      name: 'Hola'
    },
    {
      id: 3,
      description: 'Tarea 3',
      state: true,
      name: 'Hola'
    }
    

  ];
  
  agregarTarea( description: string, name: string) {
    const tarea = new task( description,name);
    this.tareas.push( tarea );
    console.log( this.tareas );
    tarea.id = this.tareas.length;
    tarea.state = false;

   
  }
  eliminarTarea( id: number ) {
    this.tareas = this.tareas.filter( tarea => tarea.id !== id );
  }
 
  editarTarea( id: number, description: string ) {
    this.tareas.map( tarea => {
      if ( tarea.id === id ) {
        tarea.description = description;
      }
    });
  }

  completarTarea( id: number ) {
    this.tareas.map( tarea => {
      if ( tarea.id === id ) {
        tarea.state = !tarea.state;
      }
    });






    
  }


  


  






  
  
  
}
