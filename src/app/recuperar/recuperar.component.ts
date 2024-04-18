import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  Alert():void {
    alert('Se ha enviado un correo a su cuenta de correo electronico para recuperar su contraseña');
  }
  
}

export default RecuperarComponent;







