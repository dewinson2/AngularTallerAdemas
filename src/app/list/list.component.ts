import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  constructor(public TareasService:TareasService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }














  

}
