import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  Alert():void {
    alert('Se ha registrado correctamente');
  }

}
export default RegistrarComponent;