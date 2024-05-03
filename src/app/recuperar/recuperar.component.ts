import { Component } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  username: string = '';

  onSubmit() {
    
    if (this.username == 'admin@gmail.com') {
    alert('¡Se ha enviado un correo con instrucciones para recuperar tu contraseña!');}
    else {
      alert('Correo no encontrado. Inténtalo de nuevo.');
    }
  }



 
  
  
  
  
}









