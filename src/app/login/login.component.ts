import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';







@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin@gmail.com' && this.password === 'admin') {
      alert('¡Inicio de sesión exitoso como admin!');
  
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  
    
  
  }
  
}


