import { Component, Output, EventEmitter, viewChild, NgModule, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
constructor(private TareasService: TareasService) { }
ngOnInit()  {
  this.TareasService.metodoObservable$.subscribe(() => {
    this.changeFlex();
  });
}



 flex = "none";
 
 
  changeFlex(){
    if(this.flex === "flex"){
      this.flex = "none";} else {
    this.flex = "flex";}
  }
  
  
  

  
}



