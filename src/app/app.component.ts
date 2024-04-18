import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegistrarComponent, RecuperarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularInicioDeSecion';
  
}
