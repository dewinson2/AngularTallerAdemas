import { Component, Output, EventEmitter, viewChild, NgModule } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 flex = "none";
 
  changeFlex(){
    if(this.flex === "flex"){
      this.flex = "none";} else {
    this.flex = "flex";}
  }
  

  
}



