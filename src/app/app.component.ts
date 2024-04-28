import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegistrarComponent, RecuperarComponent,FormComponent,ListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularInicioDeSecion';
  
}
